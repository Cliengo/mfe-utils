export interface OnboardingState {
  oldCompanyId: boolean;
  isCompleted: boolean;
  isOmitted: boolean;
  lastCompletedStep: string;
  chatbot: {
    chooseChatbotObjective: boolean;
    configureChatbot: boolean;
    configureKnowledgeBase: boolean;
    testChatbot: boolean;
  };
  kanban: {
    createNewPhase: boolean;
    moveConversationAround: boolean;
    connectToAChannel: boolean;
    hideSampleConversation: boolean;
  };
}