import { Channels, WELCOME_BACK_TYPE, RESPONSE_TYPE, QUESTION_TYPE, RESTRICTED_ACTIONS, ACTIONS } from "./enums";

export interface ChatbotConfig {
  /** defaults to false */
  chained_messages?: boolean;
  website_id: string;
  company_id: string;
  version: number;
  chatbotName: string;
  title: string;
  enabled: boolean;
  template_version: number;
  template_code: string;
  are_you_there: {
    send_after: number;
  };
  welcome_back_config: {
    config_id: string;
    channel: Channels;
    type: WELCOME_BACK_TYPE;
  }[];
  welcome_back_messages: {
    channel: Channels;
    type: WELCOME_BACK_TYPE;
    enabled: boolean;
    fire_after: number;
    has_custom_text: boolean;
    messages: {
      type: 'DEFAULT' | 'END' | 'INTERVENED';
      text: string[];
      response_type: RESPONSE_TYPE;
      response_options: string[];
      internal_name: string[];
    }[]
  }[];
  close_conversation_after: number;
  shut_up_message: string;
  conditions_to_convert: Record<string, unknown>;
  send_all_to_crm: boolean;
  lang: string;
  assign_priority: string[];
  aliases: Record<string, unknown>;
  group_conditions: {
    questions: string;
    conditions: Record<string, unknown>;
  }[];
  question_list: {
    id: number;
    order: number;
    slot_id: string;
    internal_name: string;
    parent: string;
    text: string[];
    retry_text: string[];
    alternative_texts: {
      name: string;
      text: string;
      conditions_to_show: Record<string, unknown>;
    }[];
    disabled: boolean;
    question_type: QUESTION_TYPE;
    question_file_url: string;
    question_file_caption: string;
    response_type: RESPONSE_TYPE;
    response_options: string[];
    required: boolean;
    autodetect: {
      value: string;
      synonyms: string[];
    }[];
    conditions_to_show: Record<string, unknown>;
    interface_configuration: {
      label: string;
      restricted_actions: RESTRICTED_ACTIONS;
    };
    actions: {
      name: ACTIONS;
      conditions_to_execute: Record<string, unknown>;
      params: string[];
    };
    fulfillment_url: string,
    assigned_to: string[],
    tag: string;
    is_default_question: boolean,
    go_to_internal_name: string,
    is_custom: boolean,
    is_empty_text: boolean
  }[];
  special_messages: {
    are_you_there: string[];
    finding_operator_start: string;
    restart_conversation: string;
    finding_operator_timeout: string;
  };
  tags: string[];
  global_fulfillment_url: string;
  allConversationTags: string[];
  questions_limit: number;
  businessHoursConfiguration: Record<string, unknown>;
  hasToSanitizeChatlog: boolean;
  createdAt: Date;
  updatedAt: Date;
}
