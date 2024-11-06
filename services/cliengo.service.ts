import axios, { AxiosInstance } from 'axios';
import { Account, AccountPlan, ChatbotConfig, ChatWidgetConfig, User, Website } from '../types';
import { getUrls } from '../utils/urls';
import { Channels } from '../types/enums';

type PathsToStringProps<T> = T extends object ? {
  [K in keyof T]: T[K] extends Array<any>
  ? `${K & string}` | `${K & string}.${keyof T[K][0] & string}`
  : T[K] extends object
  ? `${K & string}` | `${K & string}.${keyof T[K] & string}`
  : `${K & string}`;
}[keyof T] : never;

type ChatbotConfigPath = PathsToStringProps<ChatbotConfig>;



export class CliengoService {
  http: AxiosInstance;

  constructor(deps: { http: AxiosInstance }) {
    this.http = deps.http;
  }
  /**
   * @query
   */
  public async getMe() {
    const { data } = await this.http.get<User>(`/users/me`);

    return data;
  }

  /**
   * @query
   */
  public async getAccount() {
    const { data } = await this.http.get<Account>(`/account`);

    return data;
  }

  /**
   * @query
   */
  public async getPlan() {
    const response = await this.http.get('/account/plan');

    return response.data as AccountPlan;
  }

  /**
   * @query
   */
  public async getWebsites() {
    const response = await this.http.get<Record<string, unknown>>('/sites');

    return response.data.results as Website[];
  }

  public async getWebsite(websiteId: string) {
    const websites = await this.getWebsites();

    const website = websites.find((w) => w.id === websiteId);

    if (!website) {
      throw new Error('Website not found');
    }

    return website;
  }

  /**
   * @mutation
   */
  public async createWebsite(name: string) {
    const response = await this.http.post<Website>('/sites', {
      title: name,
      url: name,
    });

    return response.data;
  }

  /**
   * @mutation
   */
  public async createConfig(websiteId: string) {
    const response = await this.http.put<Record<string, unknown>>(
      `/sites/${websiteId}/chatbot`,
      {
        language: 'es',
        name: 'Genia',
        enabled: true,
        windowTitle: 'Asistente',
      }
    );

    return response.data;
  }

  public async setConversationBlocks(websiteId: string, blocks: string[]) {
    const response = await this.http.post(`/projects/question-block/set-blocks/${websiteId}`, {
      blocks,
    });

    return response.data as ChatbotConfig;
  }

  /**
   * @query
   */
  // eslint-disable-next-line react-func/max-lines-per-function
  public async checkConfigHasAI(websiteId: string) {
    const response = await this.http({
      url: '/projects/graphql',
      method: 'POST',
      withCredentials: true,
      data: {
        query: `
          query {
            getChatbotConfig(website_id: "${websiteId}") { 
              _id,
              question_list {
                fulfillment_url,
              }
            }
          }
        `,
      },
    });

    const { data } = response.data as {
      data: {
        getChatbotConfig: {
          question_list: {
            fulfillment_url: string;
          }[];
        }[];
      };
    };
    const fulfillment_url = getUrls(process.env.ENVIRONMENT as string).AI_FULFILLMENT_URL;

    return data.getChatbotConfig[0].question_list.some(
      (q) => q.fulfillment_url === fulfillment_url
    );
  }

  /**
 * @query
 */
  public async getFromChatbotConfig<T extends ChatbotConfigPath>(
    websiteId: string,
    fields: T[]
  ) {
    const fieldsString = fields.map(field => {
      const parts = field!.toString().split('.');
      if (parts.length === 1) return field;

      return `${parts[0]} { ${parts[1]} }`;
    }).join('\n');

    const response = await this.http({
      url: '/projects/graphql',
      method: 'POST',
      withCredentials: true,
      data: {
        query: `
        query GetChatbotConfig($websiteId: ID!) {
          getChatbotConfig(website_id: $websiteId) {
            ${fieldsString}
          }
        }
      `,
        variables: {
          websiteId
        }
      },
    });

    const { data } = response.data as {
      data: {
        getChatbotConfig: [any];
      }
    };

    return data.getChatbotConfig[0];
  }

  /**
  * @query
  */
  public async muteChatbot(websiteId: string, muted?: boolean) {
    const isMuted = muted === undefined ? true : muted;

    const response = await this.http({
      url: '/projects/graphql',
      method: 'POST',
      withCredentials: true,
      data: {
        query: `
        mutation updateConversationConfig($websiteId: ID!, $muted: Boolean!) {
          updateConversationConfig(
            websiteId: $websiteId,
            muted: $muted
          )
        }
        `,
        variables: {
          websiteId,
          muted: isMuted
        }
      }
    })

    return response.data as {
      data: {
        updateConversationConfig: ChatbotConfig | null;
      }
    }
  }

  /**
   * @mutation
   */
  public async updateChatbotConfig(websiteId: string) {
    const response = await this.http.put<{ id: string }>(
      `/projects/${websiteId}/templates/genia?lang=es`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  }

  /**
   * @mutation
   */
  public createCliengoWebsite = async (args: { url: string }) => {
    const { url } = args;

    const chatbot = await this.createWebsite(url);

    await this.createConfig(chatbot.id);
    await this.updateChatbotConfig(chatbot.id);

    return chatbot;
  };

  /**
   * @query
   */
  public getAppearance = async (websiteId: string) => {
    const response = await this.http.get<ChatWidgetConfig>(
      `/sites/${websiteId}/chatbot`
    );

    return response.data;
  };

  /**
   * @mutation
   */
  public updateAppearance = async (
    websiteId: string,
    newAppearance: Partial<ChatWidgetConfig>
  ) => {
    const response = await this.http.put(
      `/sites/${websiteId}/chatbot`,
      newAppearance
    );

    return response;
  };

  /**
   * @mutation
   */
  public uncacheLightWidget = async (websiteId: string, companyId: string) => {
    const url = getUrls(process.env.ENVIRONMENT as string).WEBO_URL;
    await this.http.get(
      `${url}/${companyId}/${websiteId}.js?uncache=true&validate=skip`
    );
  };

  /**
   * @mutation
   */
  public updateWebsiteConfig = async (
    websiteId: string,
    payload: Partial<Website>
  ) => {
    const response = await this.http.patch<Website>(`sites/${websiteId}`, {
      ...payload,
    });

    return response.data;
  };

  /**
   * @mutation
   */
  public updateWebsiteType = async (
    websiteId: string,
    payload: Partial<Website>
  ) => {
    const response = await this.http.put<Website>(
      `/websites/${websiteId}`,
      payload
    );

    return response.data;
  };

  /**
   * @mutation
   */
  public disconnectMetaWebsite = async (websiteId: string) => {
    await this.updateWebsiteType(websiteId, {
      type: Channels.EXTERNAL,
      fbPageAccessToken: 'disconnect',
      externalId: '',
    });
  };

  /**
   * @mutation
   */
  public sendInstallationScriptByEmail = async (args: {
    websiteId: string;
    email: string;
  }) => {
    const { websiteId, email } = args;

    await this.http.post(`/mails/sendToWebMaster`, {
      to: email,
      websiteId,
      platform: 'view_installation_code_mail_webmaster',
    });
  };

  /**
   * @query
   */
  public async getChatbotConfigsWithAi(websites: Website[]) {
    const websitesWithAI = await Promise.all(
      websites.map(async (website) => {
        const hasAI = await this.checkConfigHasAI(website.id);

        return hasAI ? website.id : null;
      })
    );

    const websitesWithAIIds = websitesWithAI.filter((w) => !!w);

    return websitesWithAIIds as string[];
  }
}

export const getCliengoService = (jwt?: string) => {
  const baseURL = getUrls(process.env.ENVIRONMENT as string).API_URL;

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

  return new CliengoService({
    http: axios.create(options),
  });
}
