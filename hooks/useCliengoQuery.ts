import { useQuery } from '@tanstack/react-query';

import { getCliengoService } from '../services/cliengo.service';0

export enum CliengoQueryKey {
  user = 'user',
  account = 'account',
  websites = 'websites',
  website = 'website',
  chatbotConfigHasAI = 'chatbot-config-has-ai',
  appearance = 'appearance',
}

export const useUserQuery = () => {
  return useQuery({
    queryKey: [CliengoQueryKey.user],
    queryFn: () => getCliengoService().getMe(),
    staleTime: 60 * 1000,
  });
};

export const useAccountQuery = () => {
  return useQuery({
    queryKey: [CliengoQueryKey.account],
    queryFn: () => getCliengoService().getAccount(),
    staleTime: 60 * 1000,
  });
};

export const useWebsitesQuery = () => {
  return useQuery({
    queryKey: [CliengoQueryKey.websites],
    queryFn: () => getCliengoService().getWebsites(),
    staleTime: 60 * 1000,
  });
};

export const useWebsiteQuery = (websiteId: string) => {
  return useQuery({
    queryKey: [CliengoQueryKey.website, websiteId],
    queryFn: () => getCliengoService().getWebsite(websiteId),
    staleTime: 60 * 1000,
    enabled: !!websiteId,
  });
};

export const useAppearanceQuery = (websiteId: string) => {
  return useQuery({
    queryKey: [CliengoQueryKey.appearance, websiteId],
    queryFn: () => getCliengoService().getAppearance(websiteId),
    staleTime: Infinity,
    enabled: !!websiteId,
  });
};

export const useChatbotConfigHasAIQuery = (websiteId: string) => {
  return useQuery({
    queryKey: [CliengoQueryKey.chatbotConfigHasAI, websiteId],
    queryFn: () => getCliengoService().checkConfigHasAI(websiteId),
    staleTime: 60 * 1000 * 5,
    enabled: !!websiteId,
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
