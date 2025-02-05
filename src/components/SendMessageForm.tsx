import React, { useState } from "react";
import { TextField, Button, Stack, Typography } from "@mui/material";
import { SendMessageFormProps } from "../types/type";

const SendMessageForm: React.FC<SendMessageFormProps> = ({
  idInstance,
  apiTokenInstance,
  chatId,
  onMessageSend,
}) => {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (!message) return;

    try {
      const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
      const payload = {
        chatId: chatId + "@c.us",
        message: message,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("Сообщение отправлено!");
        onMessageSend(message);
        setMessage("");
      } else {
        setStatus("Ошибка при отправке сообщения.");
      }
    } catch (error) {
      setStatus("Ошибка при подключении к API.");
      console.error("Ошибка отправки сообщения:", error);
    }
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField
        label="Введите сообщение"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" onClick={handleSendMessage}>
        Отправить
      </Button>
      {status && <Typography variant="body1">{status}</Typography>}
    </Stack>
  );
};

export default SendMessageForm;
