import { LANG } from "./i18n";

export interface User {
  name: string;
  email: string;
  privileges: string;
  isSuperUser: boolean;
  deleted: boolean;
  allowedWebsiteIds: unknown[];
  creationDate: Date;
  id: string;
  cloudinaryId: string;
  companyId: string;
  imageUrl: string;
  thumbnailUrl: string;
  language: LANG;
  labs: Record<string, boolean>;
  tutorials: string[];
  permissions: string[];
  roles: string[];
  notificationsSilenced: boolean;
  mobileNotificationsSilenced: boolean;
  migrations: Migrations;
  intercomHashId: string;
  hashId: string;
  phone: string;
  delighted: boolean;
  deletable: boolean;
  isEmailVerified: boolean;
}

interface Migrations {
  uiv2: Uiv2;
}

interface Uiv2 {
  userMigrated: boolean;
}
