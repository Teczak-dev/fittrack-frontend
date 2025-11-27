import { useContext } from "react";
import { ScreenWidthContext } from "./ScreenWidthContextDefinition";

export function useScreenWidth() {
    const context = useContext(ScreenWidthContext);
    if (!context) {
	    throw new Error("useTheme musi być użyty w ScreenWidthProviderze");
    }
    return context;
}
