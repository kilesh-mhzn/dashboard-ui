import React, { useState } from "react";
import styles from "./payment-details.module.css";
import { Flex } from "@ui/layout/flex";
import { Button } from "@ui/button/button";
import { Modal } from "@ui/modal/modal";

export const PayementDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <Button onClick={() => setIsModalOpen(true)}>+ Add payment</Button>
        </div>
      </Flex>
      <div className={styles.card}>
        <div>No Payment details available</div>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Flex
          container
          flexDirection="column"
          gap={"1rem"}
          margin={".5rem 0"}
          alignItems="center"
        >
          <div>Payment Function not implemented Yet. 😓</div>
          <div>Comming soon... 🔨</div>
        </Flex>
      </Modal>
    </div>
  );
};
