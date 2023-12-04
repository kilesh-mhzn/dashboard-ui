import { Flex } from "@ui/layout/flex";
import React from "react";
import styles from "./empty-state.module.css";

export const EmptyState = () => {
  return (
    <div className={styles.container}>
      <Flex
        container
        justifyContent="center"
        alignItems="center"
        height={"100%"}
      >
        <div>No data found.</div>
      </Flex>
    </div>
  );
};
