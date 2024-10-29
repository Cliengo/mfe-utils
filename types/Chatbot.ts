export type DefaultMsgs = {
  askForName: string;
  wb_message: string;
  wb_end_message: string;
  wrongPhone: string;
  askEmail3: string;
  askEmail4: string;
  askForNameTrigger: string;
  askEmailHasPhoneOnly: string;
  initialMessage: string;
  askEmail1: string;
  askEmail2: string;
  areYouThere: string;
  SHUT_UP_MESSAGE: string;
  askPhone2: string;
  askPhone1: string;
  restartQuestion: string;
  askPhone3: string;
  finalSalutation: string;
  promiseFutureContact: string;
  notEnoughInformation3: string;
  findingOperatorTimeout: string;
  notEnoughInformation4: string;
  notEnoughInformation1: string;
  notEnoughInformation2: string;
  sayHello: string;
  wb_default_message: string;
  notEnoughInformation5: string;
}

export type ChatWidgetConfig = {
  askTelephone: string;
  askEmail: string;
  askDni: string;
  color: string;
  saluteTime: number;
  language: string;
  windowTitle: string;
  name: string;
  askTimeToCall: boolean;
  companyId: string;
  websiteId: string;
  countryId: string;
  type: string;
  aditionalQuestions: any[];
  enabled: boolean;
  widgetIcon: string;
  widgetStyle: string;
  cliengoMeetings: boolean;
  globalTrigger: boolean;
  defaultMsgs: DefaultMsgs;
}
