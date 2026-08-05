import { cliengoQueries } from '../hooks/useCliengoQuery';
import { User } from '../types/User';

// {{name}} // {{crm ref}}
export type Permissions =
  | 'reseller_admin' // isAdmin
  | 'admin' // isAccountAdmin
  | 'websites_write' // canEditChatbot
  | 'websites_read' // canViewChatbot
  | 'clients_read' // canViewClients
  | 'clients_write' // canEditClients
  | 'clients_read_assigned' // canViewAssignedClients
  | 'clients_write_assigned' // canEditAssignedClients
  | 'users_read' // canViewUsers
  | 'users_write' // canEditUsers
  | 'chat_talk' // canIntervineChat
  | 'reports_write' // canViewReports
  | 'conversations_read'
  | 'conversations_write'
  | 'automations_read'
  | 'automations_write'
  | Restrictions;

/**
 * Restriction keys (roadmap#1281). These invert the usual grant semantics:
 * **absence means allowed**, presence means denied. That is what lets an admin
 * revoke a capability from a single user without a backfill over every existing
 * user document — untouched users keep behaving exactly as they did before.
 *
 * Never require one of these to be present in order to allow something, and
 * always let `isAdmin()` short-circuit first: admins are never restricted.
 * Read them through `PermissionsService.isRestricted()`.
 */
export type Restrictions =
  | 'no_export_inbox' // cannot export conversations from the Inbox
  | 'no_export_contacts' // cannot export the contacts base
  | 'no_contacts_create' // cannot create contacts manually
  | 'no_automations'; // cannot see or manage the Automations module

export const RESTRICTIONS: readonly Restrictions[] = [
  'no_export_inbox',
  'no_export_contacts',
  'no_contacts_create',
  'no_automations',
] as const;

export class PermissionsService {
  user: User;
  private permissions: Set<string>;

  constructor(user: User) {
    this.permissions = new Set(user.permissions);
    this.user = user;
  }

  /** userfull for check if all permissions are present */
  public hasPermission(required: Permissions[]): boolean {
    return required.every((p) => this.permissions.has(p));
  }

  /** userfull for check if ONE of the permissions is present */
  public hasOneOf(required: Permissions[]): boolean {
    return required.some((p) => this.permissions.has(p));
  }

  public isAdmin() {
    return this.hasOneOf(['admin', 'reseller_admin']);
  }

  /**
   * Whether this user has been explicitly restricted from a capability
   * (roadmap#1281). Admins are never restricted.
   *
   * Deny-by-presence: a user with no restriction keys is *not* restricted, which
   * is what keeps existing accounts behaving as they always have.
   */
  public isRestricted(restriction: Restrictions): boolean {
    if (this.isAdmin()) {
      return false;
    }
    return this.permissions.has(restriction);
  }

  public getPermissions() {
    return this.permissions;
  }

  public isSuperUser() {
    return this.user.isSuperUser;
  }
}

/**
 * Hook to get the PermissionsService instance.
 * 
 * @returns {PermissionsService} The PermissionsService instance.
 * 
 * @description
 * This hook typically returns a populated PermissionsService instance. 
 * Due to React Query's caching mechanism, the MFE host has usually 
 * already fetched the user data, so it will use the cached data and 
 * "data" will rarely, if ever, be undefined.
 * 
 * The conditional check and type casting are primarily for TypeScript's 
 * benefit, ensuring the correct type is returned. In practice, the 
 * PermissionsService will almost always be instantiated with valid user data.
 */
export const usePermissionsService = (): PermissionsService => {
  const { data, status } = cliengoQueries.user();

  let service = {} as PermissionsService;

  if (data && status === 'success') {
    service = new PermissionsService(data);
  }

  return service;
};

export const getPermissionsService = (user: User) => {
  return new PermissionsService(user);
};
