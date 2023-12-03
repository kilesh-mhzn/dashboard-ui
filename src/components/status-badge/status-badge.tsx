import { Status } from "@pages/customers/customer.model";
import { Badge, BadgeType } from "@ui/badge/badge";
import React from "react";

type SubscriptionStatus = "active" | "inactive";

type StatusBadgeProps = {
  type: Status;
};

export const StatusBadge = ({ type }: StatusBadgeProps) => {
  const badgeType: Record<SubscriptionStatus, BadgeType> = {
    active: "success",
    inactive: "danger",
  };

  const label = Number(type) === Status.INACTIVE ? "Inactive" : "Active";
  const badgeTypeValue = badgeType[label.toLowerCase() as SubscriptionStatus];

  return <Badge label={label} type={badgeTypeValue} />;
};
