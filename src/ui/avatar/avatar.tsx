import React from "react";
import styles from "./avatar.module.css";
import { extractInitials } from "utils";
import classNames from "classnames";

type AvatarSize = "md" | "xs" | "sm";
const AvatarSizeMap: Record<AvatarSize, string> = {
  md: styles.avatarSizeMd,
  xs: styles.avatarSizeXs,
  sm: styles.avatarSizeSm,
};
type AvatarProps = {
  name: string;
  img?: string;
  size?: AvatarSize;
};

export const Avatar = ({ name, img, size = "md" }: AvatarProps) => {
  return (
    <div title={name} className={styles.container}>
      {img ? (
        <img
          className={classNames(styles.avatar, AvatarSizeMap[size])}
          src={img}
          alt=""
        />
      ) : (
        <div className={classNames(styles.avatar, AvatarSizeMap[size])}>
          {extractInitials(name)}
        </div>
      )}
    </div>
  );
};
