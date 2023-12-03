import { Avatar } from "@ui/avatar/avatar";
import { Flex } from "@ui/layout/flex";
import React from "react";
import styles from "./profile-info.module.css";

type ProfileInfoProps = {
  full_name: string;
  email: string;
  img: string;
};

export const ProfileInfo = ({ full_name, email, img }: ProfileInfoProps) => {
  return (
    <Flex container alignItems="center" gap={"1rem"}>
      <Avatar size="md" name={full_name} img={img} />
      <Flex>
        <div>{full_name}</div>
        <div className={styles["profile__email"]}>{email}</div>
      </Flex>
    </Flex>
  );
};
