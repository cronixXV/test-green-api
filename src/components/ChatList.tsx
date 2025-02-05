import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Stack,
} from "@mui/material";

interface ChatListProps {
  onSelectChat: (chatId: string) => void;
}

function ChatList({ onSelectChat }: ChatListProps) {
  const [chats, setChats] = useState<string[]>([]);
  const [newChat, setNewChat] = useState("");

  const handleAddChat = () => {
    if (newChat.trim() && !chats.includes(newChat)) {
      setChats([...chats, newChat]);
      setNewChat("");
    }
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <TextField
          label="Номер телефона"
          variant="outlined"
          size="small"
          value={newChat}
          onChange={(e) => setNewChat(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleAddChat}>
          +
        </Button>
      </Stack>

      <List>
        {chats.map((chat) => (
          <ListItem button key={chat} onClick={() => onSelectChat(chat)}>
            <ListItemText primary={chat} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

export default ChatList;
