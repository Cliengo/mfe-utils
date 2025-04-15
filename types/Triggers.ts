export interface Match {
  position?: number;
  value: string;
  type: 'REGEX' | 'CONTAINS' | 'PHRASE' | 'EQUALS';
}

export interface Trigger {
  id: string | null;
  assignedTo: string[];
  response: string;
  name: string | null;
  ignoreLead: boolean;
  enabled: boolean;
  matches: Match[];
  responseOptions: string[];
  stopNextMessage: boolean;
  hasUnsaveChanges?: boolean;
}
