export enum Channels {
  WEB = 'WEBSITE',
  WHATSAPP = 'WHATSAPP',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  WSPLITE = 'WSPLITE',
  EXTERNAL = 'EXTERNAL',
}

export enum WELCOME_BACK_TYPE {
  HARD_WELCOME_BACK = 'HARD_WELCOME_BACK',
  WELCOME_BACK = 'WELCOME_BACK',
}

export enum RESPONSE_TYPE {
  TEXT= 'TEXT',
  EMAIL= 'EMAIL',
  PHONE= 'PHONE',
  LIST= 'LIST',
  MEETING= 'MEETING',
  INTENTIONS_DEBUGGER= 'INTENTIONS_DEBUGGER',
  NONE= 'NONE',
  EMAIL_OR_PHONE= 'EMAIL_OR_PHONE',
  NAME= 'NAME',
  REGEX= 'REGEX'
}

export enum QUESTION_TYPE {
  PLAIN_TEXT = 'text/plain',
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  FILE = 'file',
}

export enum RESTRICTED_ACTIONS {
  'DELETE' = 'delete',
  'SORT' = 'sort',
  'CHANGE_RESPONSE_TYPE' = 'changeResponseType',
  'INSIST' = 'insist',
  'REQUIRED' = 'required',
  'OPTIONAL' = 'optional',
  'EDIT' = 'edit',
  'CHANGE_INTERNAL_NAME' = 'changeInternalName',
  'CHILDREN' = 'children',
  'PREMIUM_PLAN' = 'premiumPlan',
}

export enum ACTIONS {
  GOTO = 'GOTO',
  DELETE = 'DELETE',
  OPERATOR_NEEDED = 'OPERATOR_NEEDED',
  GOTO_INTERNAL = 'GOTO_INTERNAL',
}