export interface Account {
  id: string;
  email: string;
  phone: string;
  name: string;
  contactName: string;
  taxId: string;
  creationDate: string;
  whiteLabelId: string;
  whiteLabelName: string;
  isCliengoReseller: boolean;
  whiteLabelLogoUrl: string;
  whiteLabelEmail: string;
  taxIdName: string;
  googleMccId: string;
  preSelectedLeads: number;
  language: string;
  timeZone: string;
  vertical: string;
  companySize: string;
  businessTeamSize: string;
  registerRole: string;
  registerPhone: string;
  knowledgeOrigin: string;
  countryId: string;
  labs: Record<string, boolean>;
  chatUrl: string;
  hasSubscription: boolean;
  subscriptionMethod: string;
  forceChargebee: boolean;
  forceMercadoPago: boolean;
  quickstartSteps: QuickstartSteps;
  shouldFireScriptPixel: boolean;
  affiliateProgramCode: string;
  affiliate: string;
  allowReferralAccess: boolean;
  marketingCampaignsInfo: MarketingCampaignsInfo;
  shouldFirePaymentPixel: boolean;
  hashId: string;
  hasInstalledScript: boolean;
  scriptInstallTimestamp: number;
  isWhatsAppFree: boolean;
  isWhatsAppBasic: boolean;
  showNewPlans: boolean;
  isWhitelabelFlex: boolean;
  hideLeads: boolean;
  customUOCLimit: number;
  autoRefreshContactsList: boolean;
  communicationChannels: unknown[];
  channel: string;
  ecommercePlatform: string;
  unitHsm: number;
  unitLimitHsm: number;
  isAgency: boolean;
  isMercadoPago1: boolean;
  leadCount: number;
  leadLimit: number;
  customUserLimit: number;
  customWebsiteLimit: number;
  leadResetDate: string;
  daysToLeadResetDate: number;
  planCurrency: string;
  planPrice: number;
  planName: string;
  planType: string;
  planLimits: {
    additionalRecurringUnits: number;
    additionalUnits: number;
    unitCount: number;
    unitLimit: number;
    unitType: string;
  }
  unitCountConversation: number;
  unitLimitConversation: number;
  autoBuyLeadPackageEnabled: boolean;
  autoBuyConversationPackageEnabled: boolean;
}

export interface MarketingCampaignsInfo {
  isAgency: boolean;
  numberOfClients: number;
}

export interface QuickstartSteps {
  CREATE_ACCOUNT_COMPLETED: boolean;
  CHOOSE_APPEARANCE_VISITED: boolean;
  CHOOSE_APPEARANCE_COMPLETED: boolean;
  CUSTOMIZE_CONVERSATION_VISITED: boolean;
  CUSTOMIZE_CONVERSATION_COMPLETED: boolean;
  CREATE_AUTOMATIC_REPLY_VISITED: boolean;
  CREATE_AUTOMATIC_REPLY_COMPLETED: boolean;
  INSTALL_CHATBOT_VISITED: boolean;
  INSTALL_CHATBOT_COMPLETED: boolean;
  COMPLETE_INFO_VISITED: boolean;
  COMPLETE_INFO_COMPLETED: boolean;
}
