import React, { FC } from "react";
import styles from "./switch.module.css";

export type SwitchProps = {
  checked: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
};

export const Switch: FC<SwitchProps> = ({ checked, label, onChange }) => {
  const handleOnChange = () => {
    onChange(!checked);
  };

  return (
    <div className={styles.switchWrapper}>
      <label className={styles.switch}>
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleOnChange}
        />
        <span className={styles.slider}></span>
      </label>
      {label}
    </div>
  );
};
