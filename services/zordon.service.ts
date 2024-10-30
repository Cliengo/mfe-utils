import axios, { AxiosInstance } from 'axios';

import { OnboardingState } from '../types/Onboarding';
import { getUrls } from '../utils/urls';
import { KnowledgeDocument, ZordonConfig } from '../types/ZordonConfig';
import { FaqsResponseDTO, Question } from '../types/faqs.types';

type ChatbotConfig = ZordonConfig;

export class ZordonService {
  http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }


  /**
   * @mutation
   */
  public async uncacheWebsite(websiteId: string) {
    await this.http.get(`/context/uncache/${websiteId}`);
  }

  public async createChatbot(args: {
    url: string;
    businessName: string;
    hasIA?: boolean;
    lang?: 'Español' | 'Inglés';
  }) {
    const { url, businessName, hasIA } = args;

    let path = '/1.0/setup-genia';

    if (hasIA) {
      path += '?cliengoIA=true';
    }

    const response = await this.http.post<{
      websiteId: string;
    }>(path, {
      url,
      businessName,
    });

    return response.data as ZordonConfig;
  }


  /**
   * @query
   */
  public async getFaqs(websiteId: string, searchQuery?: string) {
    const faqsPromise = this.http.get<FaqsResponseDTO>(
      `/faqs/${websiteId}${searchQuery ? `?${searchQuery}` : ''}`
    );

    const categoriesPromise = this.http.get<{
      categories: string[];
    }>(`/faqs/${websiteId}/categories`);

    const [faqs, categories] = await Promise.all([
      faqsPromise,
      categoriesPromise,
    ]);

    return { faqs: faqs.data, categories: categories.data.categories };
  }

  /**
   * @mutation
   */
  public async updateFaq(args: { question: Question; websiteId: string }) {
    const { websiteId, question } = args;

    const response = await this.http.put<Question>(
      `/faqs/${websiteId}/${question._id}`,
      question
    );

    return response.data;
  }

  /**
   * @mutation
   */
  public async deleteFaq(id: string, websiteId: string) {
    const response = await this.http.delete<{
      message: string;
    }>(`/faqs/${websiteId}/${id}`);

    return response.data;
  }

  /**
   * @mutation
   */
  public async resetKnowledge({ websiteId }: { websiteId: string }) {
    const response = await this.http.delete<{
      message: string;
    }>(`/faqs/${websiteId}?all=true`);

    return response.data;
  }

  /**
   * @mutation
   */
  public async addFaq(args: { question: Question; websiteId: string }) {
    const { websiteId, question } = args;

    const response = await this.http.post<Question>(`/faqs/${websiteId}`, {
      faqs: [question],
    });

    return response.data;
  }

  public async getOnboardingState(companyId: string): Promise<OnboardingState> {
    const respose = await this.http.get<OnboardingState>(
      `/onboarding-state/${companyId}`
    );

    return respose.data;
  }

  public async updateOnboardingState(
    companyId: string,
    lastCompletedStep: string
  ): Promise<OnboardingState> {
    const response = await this.http.put<OnboardingState>(
      `/onboarding-state/${companyId}`,
      {
        lastCompletedStep,
      }
    );

    return response.data;
  }

  public async scrapUrlContent(url: string): Promise<{ content: string }> {
    const response = await this.http.post<{ content: string }>('/1.0/scrap/content', { url });
    return response.data;
  }

  public async scrapLinksFromUrl(url: string): Promise<{ links: string[] }> {
    const response = await this.http.post<{ links: string[] }>('/1.0/scrap/linktree', { url });
    return response.data;
  }

  public async getZordonConfig(websiteId: string): Promise<ChatbotConfig> {
    const response = await this.http.get<ChatbotConfig>(`/1.0/chatbot-config/${websiteId}`);
    return response.data;
  }

  public async createZordonConfig(data: { websiteId: string, businessName: string }): Promise<ChatbotConfig> {
    const response = await this.http.post<ChatbotConfig>('/1.0/chatbot-config', data);
    return response.data;
  }

  public async deleteZordonConfig(websiteId: string): Promise<ChatbotConfig> {
    const response = await this.http.delete<ChatbotConfig>(`/1.0/chatbot-config/${websiteId}`);
    return response.data;
  }

  public async updateZordonConfigStrictMode(args: {
    websiteId: string;
    newValues: Partial<ZordonConfig['botProfile']> &
    Partial<ZordonConfig['aiProviderInfo']>;
    companyId: string;
  }) {
    const { websiteId, companyId, newValues } = args;

    const response = await this.http.put(
      `/1.0/chatbot-config/bot-profile/${websiteId}`,
      {
        newValues,
        companyId,
        websiteId,
      }
    );

    return response.data as ZordonConfig;
  }

  public async updateZordonConfigBotProfile(args: {
    websiteId: string;
    newValues: Partial<ZordonConfig['botProfile']>;
    companyId: string;
  }) {
    const { websiteId, companyId, newValues } = args;

    const response = await this.http.put(
      `/1.0/chatbot-config/bot-profile/${websiteId}`,
      {
        newValues,
        companyId,
        websiteId,
      }
    );

    return response.data as ZordonConfig['botProfile'];
  }

  public async getZordonConfigKnowledgeSources(websiteId: string): Promise<KnowledgeDocument[]> {
    const response = await this.http.get<KnowledgeDocument[]>(`/1.0/chatbot-config/knowledge-sources/${websiteId}`);
    return response.data;
  }

  public async createZordonConfigKnowledgeSources(websiteId: string, knowledgeValues: KnowledgeDocument): Promise<ChatbotConfig> {
    const response = await this.http.post<ChatbotConfig>(`/1.0/chatbot-config/knowledge-sources/${websiteId}`, { knowledgeValues });
    return response.data;
  }

  public async updateZordonconfigKnowledgeSources(websiteId: string, newKnowledgeValues: Partial<KnowledgeDocument>): Promise<ChatbotConfig> {
    const response = await this.http.put<ChatbotConfig>(`/1.0/chatbot-config/knowledge-sources/${websiteId}`, { newKnowledgeValues });
    return response.data;
  }

  public async updateZordonConfigCustomProperties(websiteId: string, customProperties: Partial<ZordonConfig['custom']>): Promise<ChatbotConfig> {
    const response = await this.http.put<ChatbotConfig>(`/1.0/chatbot-config/custom-properties/${websiteId}`, { customProperties });
    return response.data;
  }

  public async getZordonConfigSteps(websiteId: string): Promise<string[]> {
    const response = await this.http.get<string[]>(`/1.0/chatbot-config/steps/${websiteId}`);
    return response.data;
  }

  public async updateZordonConfigSteps(websiteId: string, steps: string[]): Promise<ChatbotConfig> {
    const response = await this.http.put<ChatbotConfig>(`/1.0/chatbot-config/steps/${websiteId}`, { steps });
    return response.data;
  }
}

export const getZordonService = (jwt?: string) => {
  const baseURL = getUrls(process.env.ENVIRONMENT as string).ZORDON_URL;

  const options = {
    baseURL,
    withCredentials: true,
    headers: {},
  }

  if (jwt) {
    options.headers = {
      Authorization: jwt,
    }
  }

  return new ZordonService(
    axios.create(options)
  );
}
