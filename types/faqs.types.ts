export type Question = {
  question: string;
  category: string;
  response: string;
  chatbotId: string;
  _id: string;
  source: string;
};

export interface FaqsResponseDTO {
  questions: Question[];
  search: string;
  category: string[];
  source: string;
  limit: number;
  page: number;
  totalPages: number;
  total: number;
}

export interface AppearanceResponseDTO {
  name: string;
  widgetIcon: string;
  widgetStyle: string;
  enabled: boolean;
  color: string;
  saluteTime: number;
}
