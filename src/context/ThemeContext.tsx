import React, { createContext, useContext, useState } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType{
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>( () => {
	const localTheme = localStorage.getItem('theme') as Theme || null;
	let systemTheme: Theme = 'light';
	if(window.matchMedia('(prefers-color-scheme: dark)').matches) systemTheme = 'dark';
	return localTheme ?? systemTheme;

    });

    const toggleTheme = () => {
	setTheme((prev) => {
	    const newTheme: Theme = prev === "light" ? "dark" : "light";
	    localStorage.setItem('theme', newTheme);
	    return newTheme;
	});
    };

    return (
	<ThemeContext.Provider value={{ theme, toggleTheme }}>
	    {children}
	</ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
	throw new Error("useTheme musi być użyty w ThemeProviderze");
    }
    return context;
}

/*export function ThemeProvider({children}:{children:ReactElemen}){
    const [theme, setTheme] = useState<string>('dark');

    const toggleTheme = () => {
	setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }

    return(
	<ThemeContext.Provider value={{theme, toggleTheme}}>
	    {children}
	</ThemeContext.Provider>
    );

}

export function useTheme(){
    const context = useContext(ThemeContext);
    return context;
}*/
