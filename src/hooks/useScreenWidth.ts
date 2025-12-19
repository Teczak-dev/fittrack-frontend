import { useContext } from "react";
import { ScreenWidthContext } from "../context/ScreenWidthContext";

// Custom hook to access the current screen width from context
export function useScreenWidth() {
  const context = useContext(ScreenWidthContext);
  if (!context) {
    throw new Error("useTheme musi być użyty w ScreenWidthProviderze");
  }
  return context;
}
