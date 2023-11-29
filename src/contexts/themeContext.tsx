import React, { createContext, useState, FC, ReactNode } from "react";

interface ThemeContextProps {
  isLightMode: boolean;
  toggleLightMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isLightMode: true,
  toggleLightMode: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("themeDark");
  const [isLightMode, setisLightMode] = useState<boolean>(true);

  const toggleLightMode = () => {
    setisLightMode(!isLightMode);
    toggleTheme();
  };

  const toggleTheme = () => {
    setTheme(() => (isLightMode ? "" : "themeDark"));
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
