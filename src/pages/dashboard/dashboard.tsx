import React from "react";
import classNames from "classnames";
import { useUserData } from "@hooks/useUserData";
import { useSubscriptionData } from "@hooks/useSubscriptionData";
import styles from "./dashboard.module.css";
import PieChart from "@components/charts/pie-chart";
import { Flex } from "@ui/layout/flex";
import GroupedBarChart from "@components/charts/group-bar-chart";
import { Status, User } from "@models/customer.model";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const { data } = useUserData();
  const { data: subscriptionData } = useSubscriptionData();

  interface Counts {
    active: number;
    inactive: number;
  }

  const activeSubscriberCount = data.reduce(
    (counts: Counts, user: User) => {
      if (user.active === Status.ACTIVE) {
        counts.active++;
      } else {
        counts.inactive++;
      }
      return counts;
    },
    { active: 0, inactive: 0 }
  );

  interface PackageCounts {
    [packageName: string]: number;
  }

  const packageCounts = subscriptionData.reduce(
    (counts: PackageCounts, item) => {
      const packageName = item.package.trim();
      counts[packageName] = (counts[packageName] || 0) + 1;
      return counts;
    },
    {}
  );

  const mergedData = data.map((user) => {
    const subscriptionInfo = subscriptionData.find(
      (subscription) => subscription.user_id === String(user.id)
    );
    return { ...user, subscriptionInfo };
  });

  return (
    <>
      <div>Welcome to Your Dashboard</div>
      <Flex container gap={"1rem"} flexWrap="wrap">
        <div className={classNames(styles.card, styles.barChart)}>
          <GroupedBarChart mergedData={mergedData} />
        </div>
        <div className={classNames(styles.card, styles.pieChart)}>
          <PieChart statusData={activeSubscriberCount} />
        </div>
      </Flex>
    </>
  );
};
