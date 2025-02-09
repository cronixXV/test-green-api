import React, { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [idInstance, setIdInstance] = useState<string>("");
  const [apiTokenInstance, setApiTokenInstance] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedIdInstance = localStorage.getItem("idInstance");
    const savedApiToken = localStorage.getItem("apiTokenInstance");

    if (savedIdInstance && savedApiToken) {
      setIdInstance(savedIdInstance);
      setApiTokenInstance(savedApiToken);
    }
    setLoading(false);
  }, []);

  const login = (id: string, token: string) => {
    localStorage.setItem("idInstance", id);
    localStorage.setItem("apiTokenInstance", token);

    setIdInstance(id);
    setApiTokenInstance(token);
  };

  const logout = () => {
    localStorage.removeItem("idInstance");
    localStorage.removeItem("apiTokenInstance");

    setIdInstance("");
    setApiTokenInstance("");
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <AuthContext.Provider
      value={{ idInstance, apiTokenInstance, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
