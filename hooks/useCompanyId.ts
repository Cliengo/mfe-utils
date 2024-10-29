import { cliengoQueries } from './useCliengoQuery';

export const useCompanyId = () => {
  const { data } = cliengoQueries.account();

  return data?.id as string;
};
