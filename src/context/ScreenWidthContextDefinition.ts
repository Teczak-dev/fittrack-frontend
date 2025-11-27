import { createContext } from "react";

interface ScreenWidthContextType {
    width: number;
    handleResize: () => void;
}

export const ScreenWidthContext = createContext<ScreenWidthContextType | undefined>(undefined);
