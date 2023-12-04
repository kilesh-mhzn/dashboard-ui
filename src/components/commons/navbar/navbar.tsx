import { ThemeContext } from "@contexts/themeContext";
import { Flex } from "@ui/layout/flex";
import { Switch } from "@ui/switch/switch";
import React, { useContext } from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles["nav-container"]}>
      <Flex container justifyContent="space-between" padding={"1rem 4rem"}>
        <div>Dashboard</div>

        <Switch
          label={`${theme === "themeDark" ? "Dark" : "Light"}`}
          checked={theme === "themeDark"}
          onChange={toggleTheme}
        />
      </Flex>
    </nav>
  );
};
