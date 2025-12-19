import React, { useState } from "react";
import { createContext } from "react";
import type { User } from "../types/user";

interface UserContextType {
  user: User | null;
  updateUser: (newUser: User) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
