import { useContext } from "react";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

import Chat from "./components/Chat";
import LoginForm from "./components/LoginForm";

import { AuthContext } from "./context/AuthContext";

function App() {
  const auth = useContext(AuthContext);

  if (!auth) {
    return <div>Загрузка...</div>;
  }

  return (
    <Container>
      <Stack>
        <Typography variant="h4" gutterBottom>
          WhatsApp Chat
        </Typography>

        {!auth.idInstance ? (
          <LoginForm />
        ) : (
          <>
            <Typography>Вы вошли как {auth.idInstance}!</Typography>

            <Box display="flex" justifyContent="flex-end" width={"100%"}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={auth.logout}
                size="small"
              >
                Выйти
              </Button>
            </Box>
            <Chat />
          </>
        )}
      </Stack>
    </Container>
  );
}

export default App;
