import { useState } from "react";

import { TextField, Button, Stack, Typography } from "@mui/material";

import { SendMessageFormProps } from "../types/type";
import { sendMessage } from "../libs/api";

function SendMessageForm({
  idInstance,
  apiTokenInstance,
  chatId,
  onMessageSend,
}: SendMessageFormProps) {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (!message) return;

    try {
      const response = await sendMessage(
        idInstance,
        apiTokenInstance,
        message,
        chatId
      );

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
}

export default SendMessageForm;
