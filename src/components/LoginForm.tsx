import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Stack } from "@mui/material";
import { LoginFormData } from "../types/type";
import { AuthContext } from "../context/AuthProvider";

function LoginForm() {
  const { login } = useContext(AuthContext)!;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Отправкаформы", data);
    login(data.idInstance, data.apiTokenInstance);
  };
  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        mx: "auto",
        mt: 5,
      }}
    >
      <TextField
        label="idInstance"
        variant="outlined"
        fullWidth
        {...register("idInstance", { required: "Введите idInstance" })}
        error={!!errors.idInstance}
        helperText={errors.idInstance?.message as string}
      />

      <TextField
        label="apiTokenInstance"
        variant="outlined"
        fullWidth
        {...register("apiTokenInstance", {
          required: "Введите apiTokenInstance",
        })}
        error={!!errors.apiTokenInstance}
        helperText={errors.apiTokenInstance?.message as string}
      />

      <Button type="submit" variant="contained" color="primary">
        Войти
      </Button>
    </Stack>
  );
}

export default LoginForm;
