import { Avatar } from "@ui/avatar/avatar";
import { Flex } from "@ui/layout/flex";
import React from "react";
import styles from "./profile-info.module.css";
import { Link } from "react-router-dom";

type ProfileInfoProps = {
  full_name: string;
  email: string;
  img: string;
  id: number;
};

export const ProfileInfo = ({
  full_name,
  email,
  img,
  id,
}: ProfileInfoProps) => {
  return (
    <Link to={`/customers/${id}`}>
      <Flex container alignItems="center" gap={"1rem"}>
        <Avatar size="md" name={full_name} img={img} />
        <Flex>
          <div>{full_name}</div>
          <div className={styles["profile__email"]}>{email}</div>
        </Flex>
      </Flex>
    </Link>
  );
};
