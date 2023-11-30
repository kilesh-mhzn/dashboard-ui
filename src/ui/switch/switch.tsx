import React, { useState, ChangeEvent, FC, useEffect } from "react";

import styles from "./switch.module.css";

export type BaseSwitchProps = {
  checked?: boolean;
  label?: string;
  onChange: (shown: boolean) => void;
};

export const Switch: FC<BaseSwitchProps> = ({
  checked = false,
  label,
  onChange,
}) => {
  const [switchState, setSwitchState] = useState(checked);

  const handleOnChange = () => {
    const finalState = !switchState;

    setSwitchState(finalState);
    onChange(finalState);
  };

  useEffect(() => {
    setSwitchState(checked);
  }, [checked]);

  return (
    <div className={styles.switchWrapper}>
      <label className={styles.switch}>
        <input
          id="checkbox"
          type="checkbox"
          checked={switchState}
          onChange={handleOnChange}
        />
        <span className={styles.slider}></span>
      </label>
      {label}
    </div>
  );
};
