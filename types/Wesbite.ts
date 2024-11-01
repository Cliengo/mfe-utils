import { Channels } from "./enums";

export interface Website {
  id: string;
  url: string;
  creationDate: Date;
  email: string;
  companyId: string;
  title: string;
  tags: string[];
  enableChat: boolean;
  labs: unknown;
  deleted: boolean;
  scriptInstalled: boolean;
  availableSmartTriggers: string[];
  assignPriority: string[];
  autoAssign: unknown[];
  wavyAccessToken?: string;
  fbPageAccessToken?: string;
  type?: Channels;
  isWhatsAppChat: boolean;
  externalId?: string;
  whatsappNumber? : string;
}
