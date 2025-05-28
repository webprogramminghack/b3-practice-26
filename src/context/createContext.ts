import React, { createContext } from "react";

type UserContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
