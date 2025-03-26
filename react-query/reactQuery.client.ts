import { QueryClient } from '@tanstack/react-query';

export class QueryClientSingleton {
  private static instance: QueryClientSingleton;
  private client: QueryClient;

  private constructor() {
    this.client = new QueryClient();
  }

  public static getInstance(): QueryClientSingleton {
    if (!QueryClientSingleton.instance) {
      QueryClientSingleton.instance = new QueryClientSingleton();
    }
    return QueryClientSingleton.instance;
  }

  public getClient(): QueryClient {
    return this.client;
  }
}

export const getQueryClient = (client?: QueryClient): QueryClient => {
  console.info('getting query client');
  if (typeof window === 'undefined') {
    return QueryClientSingleton.getInstance().getClient();
  }

  const typedWindow = window as unknown as { cliengo_query_client: QueryClient };

  if (typeof typedWindow !== 'undefined' && typedWindow.cliengo_query_client) {
    console.info('returning client from window');
    return typedWindow.cliengo_query_client;
  }

  if (client) {
    console.info('returning client from param');
    return client;
  }

  console.info('returning client from singleton');
  return QueryClientSingleton.getInstance().getClient();
}

export const invalidateQuery = (queryKey: string[]) => {
  return getQueryClient().invalidateQueries({
    queryKey,
  });
};
