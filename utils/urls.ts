const prod = {
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
};

const stage = {
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
  METRICS_API_URL: 'https://geniol-1b70ca157962.herokuapp.com',
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
  MOZART_WEBHOOK_URL: 'https://stage-mozart.stagecliengo.com/api/job',
  OAUTH_LOGIN_URL: 'https://app.stagecliengo.com/oauthlogin',
  REDIRECT_LOGOUT_URL: 'https://www.cliengo.com/',
  SCROP_URL: 'https://stage-scrop-11f6a1c4fb21.herokuapp.com',
  SOCKETIA_URL: 'https://stage-socketia-64373bef850d.herokuapp.com/clients',
  TS_API_URL: 'https://technical-solutions-api.devcliengo.com',
  WEBO_URL: 'https://s.stagecliengo.com/weboptimizer',
  ZORDON_URL: 'https://zordon.stagecliengo.com/api',
};

const getUrls = (env?: string) => {
  const appEnv = process.env.ENVIRONMENT as string;

  if ((env || appEnv) === 'prod') {
    return prod;
  }

  return stage;
}

export {
  stage,
  prod,
  getUrls,
}
