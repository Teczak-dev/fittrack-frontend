import { useContext } from "react";
import { ThemeContext } from "./ThemeContextDefinition";

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
	    throw new Error("useTheme musi być użyty w ThemeProviderze");
    }
    return context;
}