import React, {
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";

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
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "";
  });

  const [isLightMode, setisLightMode] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isLightMode");
    return storedValue ? JSON.parse(storedValue) : true;
  });

  const toggleLightMode = () => {
    setisLightMode(!isLightMode);
    toggleTheme();
  };

  const toggleTheme = () => {
    setTheme(() => (isLightMode ? "" : "themeDark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("isLightMode", JSON.stringify(isLightMode));
  }, [theme, isLightMode]);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
