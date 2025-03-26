import { LDClient, LDContext, initialize } from 'launchdarkly-js-client-sdk';
import { Account, User } from '../types';

export class LaunchDarklyClientSingleton {
  private static instance: LaunchDarklyClientSingleton;
  private client: LDClient;

  private constructor(user: User, account: Account) {
    const ldContext: LDContext = {
      kind: 'user',
      key: user.id,
      companyId: account.id,
      custom: {
        ...user,
        ...account,
        companyId: account.id,
      },
    };

    const key = process.env.ENVIRONMENT || process.env.NEXT_PUBLIC_ENVIRONMENT || '';

    const client = initialize(key, ldContext);

    const typedWindow = window as unknown as { cliengo_ld_client: LDClient };
    typedWindow.cliengo_ld_client = client;
    this.client = client;
  }

  public getClient() {
    return this.client;
  }

  public static getInstance() {
    if (!initialize) {
      console.warn('LaunchDarkly not initialized and getInstance was called');
    }
    return LaunchDarklyClientSingleton.instance;
  }

  public static async initInstance(user: User, account: Account) {
    if (!LaunchDarklyClientSingleton.instance) {
      LaunchDarklyClientSingleton.instance = new LaunchDarklyClientSingleton(
        user,
        account
      );
      await LaunchDarklyClientSingleton.instance.client.waitUntilReady();
    }

    return true;
  }

  public evaluateFlag<T = boolean>(flag: string, defaultValue?: T) {
    const flagValue = this.client.variation(flag, defaultValue) as T;

    return flagValue;
  }
}

export const getLDClient = (client?: LDClient) => {
  const typedWindow = window as unknown as { cliengo_ld_client: LDClient };

  if (typeof typedWindow !== 'undefined' && typedWindow.cliengo_ld_client) {
    return typedWindow.cliengo_ld_client;
  }

  if (client) {
    return client;
  }

  return LaunchDarklyClientSingleton.getInstance().getClient();
};

export const initLaunchDarkly = async (user: User, account: Account) => {
  return await LaunchDarklyClientSingleton.initInstance(user, account);
};
