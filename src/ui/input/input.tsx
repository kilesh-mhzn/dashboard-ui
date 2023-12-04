import React, { useState, useEffect, InputHTMLAttributes } from "react";
import styles from "./input.module.css";
import classNames from "classnames";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  fullWidth?: boolean;
  debounceTime?: number;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  value,
  onChange,
  label,
  fullWidth = false,
  debounceTime = 0,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onChange(inputValue);
    }, debounceTime);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue, onChange, debounceTime]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={classNames(styles.container, {})}>
      {label && <div>{label}</div>}
      <input
        className={classNames(styles.inputField, {
          [styles.fullWidth]: fullWidth,
        })}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={() => onChange(inputValue)}
        {...props}
      />
    </div>
  );
};
