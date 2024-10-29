export type IAProviderInfo = {
  providerKey: string;
  confidence: number;
  temperature: number;
  faqsLimit: number;
  maxTokens: number;
  model: string;
  providerName: string;
};

export type BotProfile = {
  id: 'default';
  pitch:
    | 'COOL'
    | 'FRIENDLY'
    | 'SERIOUS'
    | 'PROFESIONAL'
    | 'CREATIVE'
    | 'FUNNY'
    | 'HELPFUL';
  botName?: string;
  botBusinessName?: string;
  botObjective?: string;
  botResponseLength?: string;
  oneShot?: string;
  aboutUs?: string;
  customInstructions?: string;
  multimediaMessage?: string;
  language?: 'en' | 'es';
  knowledgeFallback?: {
    shouldUseFallback: boolean;
    message: string;
  };
};

export type KnowledgeDocument = {
  name: string;
  src: string;
  originalName: string;
  status: 'learning' | 'learned';
  type: 'file' | 'url';
  createdAt?: Date;
  updatedAt?: Date;
  generatedQuestionsQty?: number;
  totalTokens?: number;
};

export type BasicKnowledge = Omit<
  KnowledgeDocument,
  'updatedAt' | 'generatedQuestionsQty' | 'totalTokens'
>;

export type ChatbotOnboardingFlag = {
  completed: boolean;
  error?: {
    reason: string;
  };
};

type OnboardingFlag = {
  botCreated: ChatbotOnboardingFlag;
  botPersonalized: ChatbotOnboardingFlag;
  botTrained: ChatbotOnboardingFlag;
  botInstalled: ChatbotOnboardingFlag;
  botIsTested: ChatbotOnboardingFlag;
};

type MandatoryQuestions = {
  question: string;
  conditionToBeRight: string;
  enabled: boolean;
  internalName: string;
};

type CustomPromptMessage = {
  content: string;
  role: string;
  name?: string;
};

type CustomProperties = {
  promptMessages: CustomPromptMessage[] | null;
  externalNamespace: string | null;
};

export type ChatbotConfigDocument = {
  _id: string;
  websiteId: string;
  companyId: string;
  aiProviderInfo: IAProviderInfo;
  botProfile: BotProfile;
  knowledgeSources: KnowledgeDocument[];
  custom: CustomProperties;
  onboardingFlags: OnboardingFlag;
  currentOnboardingStep?: string;
  steps: string[];
  chatbotTags: string[];
  mandatoryQuestions: MandatoryQuestions[];
  flags: {
    [key: string]: boolean;
  };
};

/**
 * @alias ChatbotConfigDocument
 */
export type ZordonConfig = ChatbotConfigDocument;
