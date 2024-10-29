export interface OnboardingState {
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
  };
}