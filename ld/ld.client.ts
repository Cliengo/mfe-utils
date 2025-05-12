import { LDClient, LDContext, initialize } from "launchdarkly-js-client-sdk";
import { Account, User } from "../types";

export class LaunchDarklyClientSingleton {
  private static instance: LaunchDarklyClientSingleton;
  private client: LDClient;

  private constructor(user: User, account: Account) {
    const ldContext: LDContext = {
      kind: 'user',
      key: user.id,
      companyId: account.id,
      custom: {
        companyId: account.id,
        whiteLabelId: account.whiteLabelId,
        whiteLabelName: account.whiteLabelName,
        countryId: account.countryId,
        companyCreationDate: Math.floor(
          new Date(account.creationDate).getTime() / 1000
        ),
        affiliate: account.affiliate,
        affiliateProgramCode: account.affiliateProgramCode,
        creationDate: new Date(account.creationDate).getTime(),
        planType: account.planType,
      },
    };

    const key =
      process.env.STAGE_LAUNCHDARKLY_KEY ||
      process.env.PROD_LAUNCHDARKLY_KEY ||
      process.env.NEXT_PUBLIC_LAUNCHDARKLY_KEY ||
      "";

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
      console.warn("LaunchDarkly not initialized and getInstance was called");
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

/**
 * @description
 * Get the LaunchDarkly client instance.
 * If the client is not already initialized, it will be initialized and returned.
 * If the client is already initialized, it will be returned.
 * If the client is not initialized, it will be initialized and returned.
 * 
 * @example
 * const ldClient = getLDClient();
 * 
 * return (
 *   <div>
 *     <h1>{ldClient.variation('test-flag', false)}</h1>
 *   </div>
 * );
 */
export const getLDClient = (client?: LDClient) => {
  const typedWindow = window as unknown as { cliengo_ld_client: LDClient };

  if (typeof typedWindow !== "undefined" && typedWindow.cliengo_ld_client) {
    return typedWindow.cliengo_ld_client;
  }

  if (client) {
    return client;
  }

  return LaunchDarklyClientSingleton.getInstance().getClient();
};

/**
 * @description
 * Initialize the LaunchDarkly client instance.
 * 
 * @example
 *   const { data: userData, status: userStatus } = cliengoQueries.user();
 *   const { data: accountData, status: accountStatus } = cliengoQueries.account();
 * 
 *   const { status: initLaunchDarklyStatus } = useQuery({
 *     queryKey: ['init-launchdarkly'],
 *     queryFn: () => initLaunchDarkly(userData!, accountData!),
 *     refetchOnWindowFocus: false,
 *     enabled: !!userData && !!accountData,
 *   });
 * 
 *   if ([userStatus, accountStatus].some(status => status !== 'success')) {
 *     return <div>Loading...</div>;
 *   }
 * 
 *   if (initLaunchDarklyStatus === 'success') {
 *     return <div>LaunchDarkly initialized</div>;
 *   }
 * 
 *   if (initLaunchDarklyStatus === 'error') {
 *     return <div>Error initializing LaunchDarkly</div>;
 *   }
 * 
 *   return null;
 */
export const initLaunchDarkly = async (user: User, account: Account) => {
  const typedWindow = window as unknown as { cliengo_ld_client: LDClient };

  if (typeof typedWindow !== "undefined" && typedWindow.cliengo_ld_client) {
    return !!typedWindow.cliengo_ld_client;
  }

  return await LaunchDarklyClientSingleton.initInstance(user, account);
};
