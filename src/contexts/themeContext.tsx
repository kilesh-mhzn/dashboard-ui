import React, {
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "themeLight",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "themeLight";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "themeLight" ? "themeDark" : "themeLight"
    );
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
