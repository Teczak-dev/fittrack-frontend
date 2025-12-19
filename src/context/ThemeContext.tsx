import React, { useState } from "react";
import { createContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = (localStorage.getItem("theme") as Theme) || null;
    let systemTheme: Theme = "light";
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      systemTheme = "dark";
    return localTheme ?? systemTheme;
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme: Theme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
