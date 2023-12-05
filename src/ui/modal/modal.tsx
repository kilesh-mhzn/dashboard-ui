import React, { ReactNode } from "react";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import { Flex } from "@ui/layout/flex";

type BaseModalProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};
export const Modal = ({ children, open, onClose }: BaseModalProps) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <Flex container justifyContent="flex-end">
          <div className={styles["close-btn"]} onClick={onClose}>
            &times;
          </div>
        </Flex>
        {children}
      </div>
    </>,
    document.getElementById("portal") as Element
  );
};
