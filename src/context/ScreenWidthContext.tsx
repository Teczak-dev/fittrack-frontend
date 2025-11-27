import { useState, useEffect } from "react";
import { ScreenWidthContext } from "./ScreenWidthContextDefinition";

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
