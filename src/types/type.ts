export type LoginFormData = {
  idInstance: string;
  apiTokenInstance: string;
};

export type AuthContextType = {
  idInstance: string;
  apiTokenInstance: string;
  login: (idInstance: string, apiTokenInstance: string) => void;
  logout: () => void;
};

export interface SendMessageFormProps {
  idInstance: string;
  apiTokenInstance: string;
  chatId: string;
  onMessageSend: (message: string) => void;
}

export interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  timestamp: string;
}

export interface ChatListProps {
  onSelectChat: (chatId: string) => void;
}

export interface ChatWindowProps {
  chatId: string;
}
