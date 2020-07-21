import React, { createContext, useContext, useState, useCallback } from "react";
import { message } from "antd";

interface Context {
  user?: string;
  login: () => any;
  logout: () => any;
}
const AppContext = createContext<Context>({
  user: undefined,
  login: () => {},
  logout: () => {},
});
const useAppContext = () => useContext(AppContext);

const useFetch = (): Context => {
  const [user, setUser] = useState<string | undefined>(undefined);
  const login = useCallback(() => {
    message.success("로그인");
    setUser("관리자");
  }, []);
  const logout = useCallback(() => {
    message.info("로그아웃");
    setTimeout(() => {
      setUser(undefined);
    }, 1000);
  }, []);
  return {
    user,
    login,
    logout,
  };
};
const AppProvider: React.FC = ({ children }) => {
  const store = useFetch();
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { useAppContext, AppProvider };
