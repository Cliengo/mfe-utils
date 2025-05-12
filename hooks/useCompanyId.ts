import { cliengoQueries } from './useCliengoQuery';

/**
 * @description
 * Hook that returns the current company/account ID.
 * Uses cliengoQueries to fetch the account data.
 * 
 * @example
 * const companyId = useCompanyId();
 * 
 * return (
 *   <div>
 *     Current company ID: {companyId}
 *   </div>
 * );
 */
export const useCompanyId = () => {
  const { data } = cliengoQueries.account();

  return data?.id as string;
};
