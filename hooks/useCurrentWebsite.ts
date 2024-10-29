import { useWebsiteId } from './useWebsiteId';
import { cliengoQueries } from './useCliengoQuery';
import { Website } from '../types';

export const useCurrentWebsite = () => {
  const websiteId = useWebsiteId();
  const { data: website } = cliengoQueries.website(websiteId);

  return website as Website;
};
