import { ThemeContext } from "@contexts/themeContext";
import { Flex } from "@ui/layout/flex";
import { Switch } from "@ui/switch/switch";
import React, { useContext } from "react";
import styles from "./navbar.module.css";
import { IconMoon, IconSun } from "@ui/icons/icons";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles["nav-container"]}>
      <Flex container justifyContent="space-between" padding={"1rem 4rem"}>
        <div>Dashboard</div>

        <Flex container alignItems="center" gap={"1rem"}>
          <Switch checked={theme === "themeDark"} onChange={toggleTheme} />
          {theme === "themeDark" ? (
            <IconMoon color="#f29941" />
          ) : (
            <IconSun color="#f29941" />
          )}
        </Flex>
      </Flex>
    </nav>
  );
};
