import { useState } from "react";

import { Grid2, Paper, Typography } from "@mui/material";

import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

function Chat() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <Grid2 container spacing={2} sx={{ height: "90vh", mt: 2 }}>
      <Grid2 size={{ xs: 4 }}>
        <Paper sx={{ height: "100%", p: 2 }}>
          <Typography variant="h6" mb={2}>
            Чаты
          </Typography>
          <ChatList onSelectChat={setSelectedChat} />
        </Paper>
      </Grid2>

      <Grid2 size={{ xs: 8 }}>
        <Paper sx={{ height: "100%", p: 2 }}>
          {selectedChat ? (
            <ChatWindow chatId={selectedChat} />
          ) : (
            <Typography variant="h6">Выберите чат</Typography>
          )}
        </Paper>
      </Grid2>
    </Grid2>
  );
}

export default Chat;
