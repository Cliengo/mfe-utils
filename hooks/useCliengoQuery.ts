import { useQuery } from '@tanstack/react-query';

import { getCliengoService } from '../services/cliengo.service';

interface ExtraQueryOptions {
  enabled?: boolean;
  staleTime?: number;
  retry?: number;
  retryDelay?: number;
  retryOnMount?: boolean;
  refetchOnWindowFocus?: boolean;
}

export enum CliengoQueryKey {
  user = 'user',
  account = 'account',
  websites = 'websites',
  website = 'website',
  chatbotConfigHasAI = 'chatbot-config-has-ai',
  appearance = 'appearance',
}

export const useUserQuery = (extraOptions?: ExtraQueryOptions) => {
  return useQuery({
    queryKey: [CliengoQueryKey.user],
    queryFn: () => getCliengoService().getMe(),
    staleTime: Infinity,
    ...(extraOptions || {}),
  });
};

export const useAccountQuery = (extraOptions?: ExtraQueryOptions) => {
  return useQuery({
    queryKey: [CliengoQueryKey.account],
    queryFn: () => getCliengoService().getAccount(),
    staleTime: Infinity,
    ...(extraOptions || {}),
  });
};

export const useWebsitesQuery = (extraOptions?: ExtraQueryOptions) => {
  return useQuery({
    queryKey: [CliengoQueryKey.websites],
    queryFn: () => getCliengoService().getWebsites(),
    staleTime: (60 * 1000) * 60,
    ...(extraOptions || {}),
  });
};

export const useWebsiteQuery = (websiteId: string, extraOptions?: ExtraQueryOptions) => {
  return useQuery({
    queryKey: [CliengoQueryKey.website, websiteId],
    queryFn: () => getCliengoService().getWebsite(websiteId),
    staleTime: (60 * 1000) * 60,
    enabled: !!websiteId,
    ...(extraOptions || {}),
  });
};

export const useAppearanceQuery = (websiteId: string, extraOptions?: ExtraQueryOptions) => {
  return useQuery({
    queryKey: [CliengoQueryKey.appearance, websiteId],
    queryFn: () => getCliengoService().getAppearance(websiteId),
    staleTime: Infinity,
    enabled: !!websiteId,
    ...(extraOptions || {}),
  });
};

export const useChatbotConfigHasAIQuery = (websiteId: string, extraOptions?: ExtraQueryOptions) => {
  return useQuery({
    queryKey: [CliengoQueryKey.chatbotConfigHasAI, websiteId],
    queryFn: () => getCliengoService().checkConfigHasAI(websiteId),
    staleTime: Infinity,
    enabled: !!websiteId,
    ...(extraOptions || {})
  });
};

export const cliengoQueries = {
  user: useUserQuery,
  account: useAccountQuery,
  websites: useWebsitesQuery,
  website: useWebsiteQuery,
  chatbotConfigHasAI: useChatbotConfigHasAIQuery,
  appearance: useAppearanceQuery,
};
