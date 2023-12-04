import { useUserData } from "@pages/customers/useUserData";
import classNames from "classnames";
import React from "react";
import styles from "./dashboard.module.css";
import PieChart from "@components/charts/pie-chart";
import { Status, User } from "@pages/customers/customer.model";

export const Dashboard = () => {
  const { data } = useUserData();

  const activeSubscriberCount = data.reduce(
    (counts, user: User) => {
      if (user.active === Status.ACTIVE) {
        counts.active++;
      } else {
        counts.inactive++;
      }
      return counts;
    },
    { active: 0, inactive: 0 }
  );
  return (
    <div className={classNames(styles.card, styles.pieChart)}>
      <PieChart statusData={activeSubscriberCount} />
    </div>
  );
};
