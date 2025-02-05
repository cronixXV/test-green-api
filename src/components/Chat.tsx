import { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <Grid container spacing={2} sx={{ height: "90vh", mt: 2 }}>
      <Grid item xs={4}>
        <Paper sx={{ height: "100%", p: 2 }}>
          <Typography variant="h6">Чаты</Typography>
          <ChatList onSelectChat={setSelectedChat} />
        </Paper>
      </Grid>

      <Grid item xs={8}>
        <Paper sx={{ height: "100%", p: 2 }}>
          {selectedChat ? (
            <ChatWindow chatId={selectedChat} />
          ) : (
            <Typography variant="h6">Выберите чат</Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Chat;
