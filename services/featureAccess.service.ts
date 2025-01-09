import { cliengoQueries } from "../hooks/useCliengoQuery";
import { AccountWithFeatures } from "../types";

export type FeatureId =
  | 'ENABLE_CHATBOT';
// TODO: add more feature ids when they exist


export class FeatureAccessService {
  account: AccountWithFeatures;
  private features: Map<FeatureId, boolean> = new Map();

  constructor(account: AccountWithFeatures) {
    this.account = account;

    if (account.planFeatures) {
      for (const features of account.planFeatures) {
        this.features.set((features.id as FeatureId), features.value);
      }
    }
  }

  public canUseFeature(feature: FeatureId): boolean {
    if (this.features.has(feature)) {
      return this.features.get(feature) as boolean;
    }

    // fallback for legacy plans that don't have the planFeatures field
    return true;
  }

  public canUseFeatures(features: FeatureId[]): boolean {
    return features.every((feature) => this.canUseFeature(feature));
  }

  public getFeatures() {
    return this.features;
  }
}

/**
 * @description Hook that provides access to feature flags based on the current account.
 * Returns a FeatureAccessService instance which can be used to check feature availability.
 * 
 * In case of legacy accounts where the planFeatures field is not present, the service will
 * fallback to true for all features.
 * @param {AccountWithFeatures} [account] - Optional account object. If provided, will create service with this account instead of fetching
 * @returns {FeatureAccessService | null} A service instance to check feature access, or null if account fetch fails
 * @example
 * // Using with automatic account fetch
 * const MyComponent = () => {
 *   const featureAccess = useFeatureAccess();
 *   
 *   if (!featureAccess) {
 *     return <LoadingState />;
 *   }
 *   
 *   if (featureAccess.canUseFeature('ENABLE_CHATBOT')) {
 *     return <ChatbotComponent />;
 *   }
 *   
 *   return null;
 * };
 * 
 * // Using with provided account
 * const MyOtherComponent = ({ account }) => {
 *   const featureAccess = useFeatureAccess(account);
 *   
 *   if (!featureAccess) {
 *     return null;
 *   }
 *   
 *   return featureAccess.canUseFeature('ENABLE_CHATBOT') 
 *     ? <ChatbotComponent />
 *     : null;
 * };
 */
export const useFeatureAccess = (account?: AccountWithFeatures): FeatureAccessService | null => {
  if (account) {
    return new FeatureAccessService(account);
  }

  // query already has withFeatures=true
  const { data, status, error } = cliengoQueries.account();

  if (error) {
    console.error('useFeatureAccess::Failed to fetch account data:', error);
    return null;
  }

  if (data && status === 'success') {
    return new FeatureAccessService(data);
  }

  return null
};

/**
 * @description Creates a FeatureAccessService instance for use outside of the React component tree.
 * This is useful for utilities or services that need to check feature access but don't have access to React hooks.
 * @param {AccountWithFeatures} account - The account object containing feature flags
 * @returns {FeatureAccessService} A service instance to check feature access
 * @example
 * // In a utility function or service
 * const myUtilityFunction = (account: AccountWithFeatures) => {
 *   const featureAccess = getFeatureAccessService(account);
 *   
 *   if (featureAccess.canUseFeature('ENABLE_CHATBOT')) {
 *     // Perform chatbot-related operations
 *   }
 * };
 */
export const getFeatureAccessService = (account: AccountWithFeatures) => {
  return new FeatureAccessService(account);
};
