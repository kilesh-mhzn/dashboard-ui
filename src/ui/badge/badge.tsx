import React from "react";
import styles from "./badge.module.css";
import classnames from "classnames";

export type BadgeType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";
type BadgeProps = {
  label: string;
  type?: BadgeType;
};
export const Badge = ({ label, type = "success" }: BadgeProps) => {
  return (
    <div className={classnames(styles.container, styles[type])}>{label}</div>
  );
};
