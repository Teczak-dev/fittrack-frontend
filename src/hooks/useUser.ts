import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// Custom hook to access the current user from context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser musi być użyty w UserProviderze");
  }
  return context;
}
