import { ReactNode, createContext, useEffect, useState } from "react";
import { User as Auth} from "../models/user";
import axios from "../api/axios";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType{
  auth: Auth | null;
  setAuth: React.Dispatch<React.SetStateAction<Auth | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children} : AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth | null>(null);

  const contextValue : AuthContextType = {
    auth,
    setAuth
  }

  useEffect(() => {
    const getAuthorizedUser = async () => {
      try {
        const response = await axios.get("/users");
        setAuth(response.data);
      } catch (error) {
          console.error(error);
      }
    }

    getAuthorizedUser();
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
