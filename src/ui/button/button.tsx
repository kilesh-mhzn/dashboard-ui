import classNames from "classnames";
import React, { ReactNode } from "react";
import styles from "./button.module.css";
type BaseButtonProps = {
  children?: ReactNode;
  onClick: () => void;
};

//TODO: create sizes, types for button
export const Button = ({ children, onClick }: BaseButtonProps) => {
  return (
    <button className={classNames(styles.button)} onClick={onClick}>
      {children}
    </button>
  );
};
