import { useWebsiteId } from './useWebsiteId';
import { cliengoQueries } from './useCliengoQuery';
import { Website } from '../types';

/**
 * @description
 * Hook that returns the current website data based on the websiteId from URL params.
 * Uses cliengoQueries to fetch the website data.
 * :websiteId MUST be defined on the router path.
 * 
 * @example
 * const website = useCurrentWebsite();
 * 
 * return (
 *   <div>
 *     <h1>{website.name}</h1>
 *     <p>{website.url}</p>
 *   </div>
 * );
 */
export const useCurrentWebsite = () => {
  const websiteId = useWebsiteId();
  const { data: website } = cliengoQueries.website(websiteId);

  return website as Website;
};
