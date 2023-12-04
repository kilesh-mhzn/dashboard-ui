import React, { useState, useEffect } from "react";
import styles from "./input.module.css";
import classNames from "classnames";

type InputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  fullWidth?: boolean;
  debounceTime?: number;
};

export const Input = ({
  name,
  placeholder,
  value,
  onChange,
  label,
  fullWidth = false,
  debounceTime = 0,
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
        name={name}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={() => onChange(inputValue)}
        placeholder={placeholder}
      />
    </div>
  );
};
