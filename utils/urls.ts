const prod = {
  LEGACY_CRM_URL: 'https://legacy.cliengo.com',
  AI_FULFILLMENT_URL: 'https://zordon-8487db5d9dca.herokuapp.com/api/message/receive',
  API_URL: 'https://api.cliengo.com/1.0',
  BROKER_FILES_URL: 'https://broker.cliengo.com',
  BROKER_PUBLIC_URL: 'wss://broker.cliengo.com',
  BROKER_WSPL_URL: 'https://broker-wspl.cliengo.com',
  CDNX_URL: 'https://cdnx.cliengo.com',
  COCOS_URL: 'https://www.coquitos.cliengo.com',
  COMBEE_URL: 'https://combee.cliengo.com',
  CRM_URL: 'https://crm.stagecliengo.com',
  KNOWLEDGE_FILE_INGESTER: 'https://mfrm6z5pmu.us-west-2.awsapprunner.com',
  LOGIN_URL: 'https://login.stagecliengo.com',
  LW_URL: 'https://lw.cliengo.com',
  META_APP_ID: '1721936894718804',
  METRICS_API_URL: 'https://geniol-1b70ca157962.herokuapp.com',
  MFE_ONBOARDING: 'https://onboarding.cliengo.com',
  MFE_APP_CAMPAIGNS_URL: 'https://www.campaigns.cliengo.com',
  MFE_APP_GENIA_CHATBOT_MODULE: 'https://chatbot-module.cliengo.com',
  MFE_APP_HSM_URL: 'https://www.hsm-manager.cliengo.com/',
  MFE_APP_LIVE_URL: 'https://www.genia-live2.cliengo.com',
  MFE_APP_PARTNERS_URL: 'https://www.partners-dashboard.cliengo.com',
  MFE_APP_REPORTS_URL: 'https://reports.cliengo.com/',
  MFE_APP_WPLITE: 'https://wsplite.cliengo.com',
  MFE_COMMON_AUTH: 'https://www.remote-auth.cliengo.com',
  MFE_HERMES_URL: 'https://hermes.cliengo.com',
  MFE_IFRAME_CRM: 'https://crm.cliengo.com',
  MFE_IFRAME_HSM: 'https://www.hsm-manager.cliengo.com',
  MFE_IFRAME_LIT: 'https://genia-live.cliengo.com/live/history',
  MFE_IFRAME_TRIGGERS: 'https://www.triggers.cliengo.com/triggers',
  MOZART_WEBHOOK_URL: 'https://mozart-webhook.cliengo.com/api/job',
  OAUTH_LOGIN_URL: 'https://app.cliengo.com/oauthlogin',
  REDIRECT_LOGOUT_URL: 'https://www.cliengo.com/',
  SCROP_URL: 'https://scrop-887299ed6b69.herokuapp.com',
  SOCKETIA_URL: 'https://socketia-68064d93baa5.herokuapp.com/clients',
  TS_API_URL: 'https://technical-solutions-api.devcliengo.com',
  WEBO_URL: 'https://s.cliengo.com/weboptimizer',
  ZORDON_URL: 'https://zordon.cliengo.com/api',
  DASH_URL: 'https://dash.cliengo.com',
};

const stage = {
  LEGACY_CRM_URL: 'https://legacy.stagecliengo.com',
  AI_FULFILLMENT_URL: 'https://stage-zordon-9e009c9b84c6.herokuapp.com/api/message/receive',
  API_URL: 'https://api.stagecliengo.com/1.0',
  BROKER_FILES_URL: 'https://broker.stagecliengo.com',
  BROKER_PUBLIC_URL: 'wss://broker.stagecliengo.com',
  BROKER_WSPL_URL: 'https://broker-wspl.stagecliengo.com',
  CDNX_URL: 'https://cdnx.stagecliengo.com',
  COCOS_URL: 'https://www.coquitos.stagecliengo.com',
  COMBEE_URL: 'https://combee.stagecliengo.com',
  CRM_URL: 'https://crm.stagecliengo.com',
  DASH_URL: 'https://dash.stagecliengo.com',
  KNOWLEDGE_FILE_INGESTER: 'https://mfrm6z5pmu.us-west-2.awsapprunner.com',
  LOGIN_URL: 'https://login.stagecliengo.com',
  LW_URL: 'https://lw.stagecliengo.com',
  META_APP_ID: '1050385118369983',
  METRICS_API_URL: 'https://stage-geniol-48f33dc2c467.herokuapp.com',
  MFE_ONBOARDING: 'https://onboarding.stagecliengo.com',
  MFE_APP_CAMPAIGNS_URL: 'https://www.campaigns.stagecliengo.com',
  MFE_APP_GENIA_CHATBOT_MODULE: 'https://chatbot-module.stagecliengo.com',
  MFE_APP_HSM_URL: 'https://www.hsm-manager.stagecliengo.com',
  MFE_APP_LIVE_URL: 'https://www.genia-live2.stagecliengo.com',
  MFE_APP_PARTNERS_URL: 'https://www.partners-dashboard.stagecliengo.com',
  MFE_APP_REPORTS_URL: 'https://reports.stagecliengo.com/',
  MFE_APP_WPLITE: 'https://wsplite.stagecliengo.com',
  MFE_COMMON_AUTH: 'https://www.remote-auth.cliengo.com',
  MFE_HERMES_URL: 'https://hermes.stagecliengo.com',
  MFE_IFRAME_CRM: 'https://crm.stagecliengo.com',
  MFE_IFRAME_HSM: 'https://www.hsm-manager.stagecliengo.com',
  MFE_IFRAME_LIT: 'https://genia-live.stagecliengo.com/live/history',
  MFE_IFRAME_TRIGGERS: 'https://www.triggers.stagecliengo.com/triggers',
  MOZART_WEBHOOK_URL: 'https://mozart-webhook.stagecliengo.com/api/job',
  OAUTH_LOGIN_URL: 'https://app.stagecliengo.com/oauthlogin',
  REDIRECT_LOGOUT_URL: 'https://www.cliengo.com/',
  SCROP_URL: 'https://stage-scrop-11f6a1c4fb21.herokuapp.com',
  SOCKETIA_URL: 'https://stage-socketia-64373bef850d.herokuapp.com/clients',
  TS_API_URL: 'https://technical-solutions-api.devcliengo.com',
  WEBO_URL: 'https://s.stagecliengo.com/weboptimizer',
  ZORDON_URL: 'https://zordon.stagecliengo.com/api',
};

const dev = {
  LEGACY_CRM_URL: process.env.LEGACY_CRM_URL ?? stage.LEGACY_CRM_URL,
  AI_FULFILLMENT_URL: process.env.AI_FULFILLMENT_URL ?? stage.AI_FULFILLMENT_URL,
  API_URL: process.env.API_URL ?? stage.API_URL,
  BROKER_FILES_URL: process.env.BROKER_FILES_URL ?? stage.BROKER_FILES_URL,
  BROKER_PUBLIC_URL: process.env.BROKER_PUBLIC_URL ?? stage.BROKER_PUBLIC_URL,
  BROKER_WSPL_URL: process.env.BROKER_WSPL_URL ?? stage.BROKER_WSPL_URL,
  CDNX_URL: process.env.CDNX_URL ?? stage.CDNX_URL,
  COCOS_URL: process.env.COCOS_URL ?? stage.COCOS_URL,
  COMBEE_URL: process.env.COMBEE_URL ?? stage.COMBEE_URL,
  CRM_URL: process.env.CRM_URL ?? stage.CRM_URL,
  DASH_URL: process.env.DASH_URL ?? stage.DASH_URL,
  KNOWLEDGE_FILE_INGESTER: process.env.KNOWLEDGE_FILE_INGESTER ?? stage.KNOWLEDGE_FILE_INGESTER,
  LOGIN_URL: process.env.LOGIN_URL ?? stage.LOGIN_URL,
  LW_URL: process.env.LW_URL ?? stage.LW_URL,
  META_APP_ID: process.env.META_APP_ID ?? stage.META_APP_ID,
  METRICS_API_URL: process.env.METRICS_API_URL ?? stage.METRICS_API_URL,
  MFE_ONBOARDING: process.env.MFE_ONBOARDING ?? stage.MFE_ONBOARDING,
  MFE_APP_CAMPAIGNS_URL: process.env.MFE_APP_CAMPAIGNS_URL ?? stage.MFE_APP_CAMPAIGNS_URL,
  MFE_APP_GENIA_CHATBOT_MODULE: process.env.MFE_APP_GENIA_CHATBOT_MODULE ?? stage.MFE_APP_GENIA_CHATBOT_MODULE,
  MFE_APP_HSM_URL: process.env.MFE_APP_HSM_URL ?? stage.MFE_APP_HSM_URL,
  MFE_APP_LIVE_URL: process.env.MFE_APP_LIVE_URL ?? stage.MFE_APP_LIVE_URL,
  MFE_APP_PARTNERS_URL: process.env.MFE_APP_PARTNERS_URL ?? stage.MFE_APP_PARTNERS_URL,
  MFE_APP_REPORTS_URL: process.env.MFE_APP_REPORTS_URL ?? stage.MFE_APP_REPORTS_URL,
  MFE_APP_WPLITE: process.env.MFE_APP_WPLITE ?? stage.MFE_APP_WPLITE,
  MFE_COMMON_AUTH: process.env.MFE_COMMON_AUTH ?? stage.MFE_COMMON_AUTH,
  MFE_HERMES_URL: process.env.MFE_HERMES_URL ?? stage.MFE_HERMES_URL,
  MFE_IFRAME_CRM: process.env.MFE_IFRAME_CRM ?? stage.MFE_IFRAME_CRM,
  MFE_IFRAME_HSM: process.env.MFE_IFRAME_HSM ?? stage.MFE_IFRAME_HSM,
  MFE_IFRAME_LIT: process.env.MFE_IFRAME_LIT ?? stage.MFE_IFRAME_LIT,
  MFE_IFRAME_TRIGGERS: process.env.MFE_IFRAME_TRIGGERS ?? stage.MFE_IFRAME_TRIGGERS,
  MOZART_WEBHOOK_URL: process.env.MOZART_WEBHOOK_URL ?? stage.MOZART_WEBHOOK_URL,
  OAUTH_LOGIN_URL: process.env.OAUTH_LOGIN_URL ?? stage.OAUTH_LOGIN_URL,
  REDIRECT_LOGOUT_URL: process.env.REDIRECT_LOGOUT_URL ?? stage.REDIRECT_LOGOUT_URL,
  SCROP_URL: process.env.SCROP_URL ?? stage.SCROP_URL,
  SOCKETIA_URL: process.env.SOCKETIA_URL ?? stage.SOCKETIA_URL,
  TS_API_URL: process.env.TS_API_URL ?? stage.TS_API_URL,
  WEBO_URL: process.env.WEBO_URL ?? stage.WEBO_URL,
  ZORDON_URL: process.env.ZORDON_URL ?? stage.ZORDON_URL,
}

const getEnv = () => {
  const env = (process.env.ENVIRONMENT || process.env.NEXT_PUBLIC_ENVIRONMENT) as string;
  return env;
}

const getUrls = (env?: string) => {
  const appEnv = getEnv();

  if ((env || appEnv) === 'prod') {
    return prod;
  }

  if ((env || appEnv) === 'dev') {
    console.info('Using dev urls from mfe-utils');
    return dev;
  }

  return stage;
}

const checkEnvUrl = (scope: string, url: string) => {
  const env = getEnv();

  if (env === 'dev' && url?.includes('stage')) {
    console.warn(`${scope}: detected stage url while using dev environment.`);
    console.warn(`${scope}: url detected: `, url);
  }
}

export {
  stage,
  prod,
  getUrls,
  checkEnvUrl,
  getEnv,
}
