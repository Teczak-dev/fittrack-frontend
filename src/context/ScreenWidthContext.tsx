import { useState, useEffect } from "react";
import { createContext } from "react";

interface ScreenWidthContextType {
    width: number;
    handleResize: () => void;
}

export const ScreenWidthContext = createContext<ScreenWidthContextType | undefined>(undefined);

export const ScreenWidthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    
    const handleResize = () => {
	setWidth(window.innerWidth);
    }
    
    useEffect(()=>{
	window.addEventListener('resize', handleResize);
    });

    return (
        <ScreenWidthContext.Provider value={{ width, handleResize }}>
            {children}
        </ScreenWidthContext.Provider>
    );
};
