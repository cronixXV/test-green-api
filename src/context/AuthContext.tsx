import { createContext } from "react";
import { AuthContextType } from "../types/type";

export const AuthContext = createContext<AuthContextType>({
  idInstance: "",
  apiTokenInstance: "",
  login: () => {},
  logout: () => {},
});
