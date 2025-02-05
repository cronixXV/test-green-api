import { useContext, useEffect, useRef, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import SendMessageForm from "./SendMessageForm";
import { AuthContext } from "../context/AuthProvider";
import { Message } from "../types/type";
import { ChatWindowProps } from "../types/type";

function ChatWindow({ chatId }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  const chatRef = useRef<HTMLDivElement>(null);

  const auth = useContext(AuthContext);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: (prevMessages.length + 1).toString(), text: message, sender: "me" },
    ]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Чат с {chatId}
      </Typography>

      <Box
        ref={chatRef}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxHeight: "60vh",
        }}
      >
        {messages.map((msg) => (
          <Paper
            key={msg.id}
            sx={{
              maxWidth: "75%",
              alignSelf: msg.sender === "me" ? "flex-end" : "flex-start",
              p: 1.5,
              bgcolor: msg.sender === "me" ? "primary.main" : "grey.300",
              color: msg.sender === "me" ? "white" : "black",
              borderRadius: 2,
            }}
          >
            {msg.text}
          </Paper>
        ))}
      </Box>
      <SendMessageForm
        idInstance={auth.idInstance}
        apiTokenInstance={auth.apiTokenInstance}
        chatId={chatId}
        onMessageSend={addMessage}
      />
    </Box>
  );
}

export default ChatWindow;
