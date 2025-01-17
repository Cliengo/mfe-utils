interface WhatsappFormConfig {
  websiteId: string;
  id?: string;
  phone: string;
  desktop_version: 'EXTENDED' | 'BUBBLE';
  mobile_version: 'BUBBLE';
  showDesktop: boolean;
  widget_color: string;
  active: boolean;
  creationDate: string;
  assignableUserIdList: string[];
  notice: {
    title: string;
    type: 'text';
  };
  nameRequestMessage: {
    title: string;
    type: 'text';
  };
  whatsAppRequestMessage: {
    title: string;
    type: 'text';
  },
  messageRequestMessage: {
    title: string;
    type: 'text' | 'options';
    options?: string[];
  }
}
