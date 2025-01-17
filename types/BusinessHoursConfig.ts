export interface BusinessHours {
  range: string;
  days: number[];
}

interface BusinessHoursEnabledChannels {
  WHATSAPP_CHAT: boolean;
  WHATSAPP: boolean;
  WEB_CHAT: boolean;
  WHATSAPP_WIDGET: boolean;
  CHATBOT: boolean;
}

export interface BusinessHourConfig {
  enabledChannels: BusinessHoursEnabledChannels;
  businessHours: BusinessHours[];
  initialMessage: string;
  promiseFutureContact: string | null;
  finalSalutation: string | null;
  timeZone: string | null;
}

export interface BusinessHourUpdatePayload {
  businessHours: BusinessHours[];
  enabledChannels: BusinessHoursEnabledChannels;
}
