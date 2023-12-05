import React from "react";
import styles from "./payment-details.module.css";
import { Flex } from "@ui/layout/flex";
import { Button } from "@ui/button/button";

export const PayementDetails = () => {
  return (
    <div className={styles.container}>
      <Flex
        className={styles.title}
        container
        justifyContent="space-between"
        margin={"1rem 0"}
        flexWrap="wrap"
      >
        <div></div>
        <div>Payment Details</div>
        <div>
          <Button
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            + Add payment
          </Button>
        </div>
      </Flex>
      <div className={styles.card}>
        <div>No Payment details available</div>
      </div>
    </div>
  );
};
