export interface AccountPlan {
  id: string;
  name: string;
  description: string;
  isAnnualPlan: boolean;
  leadLimit: number;
  conversationLimit: number;
  websiteLimit: number;
  userLimit: number;
  priceARS: number;
  priceUSD: number;
  priceBRL: number;
  priceListARS: number;
  priceListUSD: number;
  priceListBRL: number;
  integrationsAllowed: boolean;
  imageUrl: string;
  upgradePrice: number;
  planRemainingTime: PlanRemainingTime;
  futurePlan?: string;
  futurePlanChange?: string;
  tier: 'TIER_0' | 'TIER_1' | 'TIER_2' | 'TIER_3' | 'TIER_4' | 'TIER_5' | 'TIER_6'
}

export interface PlanRemainingTime {
  number: string;
  translationKey: string;
}
