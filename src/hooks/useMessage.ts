import { useEffect, useState, useContext } from "react";

import { Message } from "../types/type";
import { AuthContext } from "../context/AuthContext";

export function useMessage(chatId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const url = `https://api.green-api.com/waInstance${auth.idInstance}/receiveNotification/${auth.apiTokenInstance}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.body?.senderData?.chatId === chatId + "@c.us") {
          const newMessage: Message = {
            id: data.receiptId.toString(),
            text: data.body.messageData.textMessageData.textMessage,
            sender: "them",
            timestamp: new Date(data.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };

          setMessages((prev) => [...prev, newMessage]);

          await fetch(
            `https://api.green-api.com/waInstance${auth.idInstance}/deleteNotification/${auth.apiTokenInstance}/${data.receiptId}`,
            { method: "DELETE" }
          );
        }
      } catch (error) {
        console.error("Ошибка при получении сообщений:", error);
      }
    };

    const interval = setInterval(fetchMessages, 15000);
    return () => clearInterval(interval);
  }, [chatId]);

  return { messages, setMessages };
}
