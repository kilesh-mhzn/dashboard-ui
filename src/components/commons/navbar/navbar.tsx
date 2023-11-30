import { ThemeContext } from "@contexts/themeContext";
import { Flex } from "@ui/layout/flex";
import { Switch } from "@ui/switch/switch";
import React, { useContext } from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const { isLightMode, toggleLightMode } = useContext(ThemeContext);
  return (
    <nav>
      <Flex
        className={styles["nav-container"]}
        container
        justifyContent="space-between"
        padding={"1rem 4rem"}
      >
        <div>Dashboard</div>

        <Switch
          label="Dark mode"
          checked={isLightMode}
          onChange={toggleLightMode}
        />
      </Flex>
    </nav>
  );
};
