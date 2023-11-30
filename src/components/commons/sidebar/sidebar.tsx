import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "./sidebarData";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside>
      <div className={styles.container}>
        <ul role="list" className={styles["sidebar-list"]}>
          {sidebarData.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive ? styles["active-nav"] : ""
              }
              to={item.path}
            >
              <li className={styles["list-item"]}>{item.title}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </aside>
  );
};
