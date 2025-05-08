import React, { createContext, useState, ReactNode } from "react";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({
    name: "abdur rahman rafi",
    email: "rafi@gmail.com",
  });

  const authData: AuthContextType = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
