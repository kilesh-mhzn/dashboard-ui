// Dashboard.tsx
import GroupedBarChart from "@components/charts/group-bar-chart";
import PieChart from "@components/charts/pie-chart";
import { User } from "@models/customer.model";
import { Flex } from "@ui/layout/flex";
import classNames from "classnames";
import React from "react";
import styles from "./dashboard.module.css";
import { useUserData } from "@hooks/useUserData";
import { useSubscriptionData } from "@hooks/useSubscriptionData";
import { Subscription } from "@models/subscription.model";
import { ActiveSubscriberCountParams, GetMergeDataParams } from "./compose";

type DashboardProps = {
  getActiveSubscriptionCount: ({ data }: ActiveSubscriberCountParams) => {
    active: number;
    inactive: number;
  };
  getMergedData: ({
    userData,
    subscriptionData,
  }: GetMergeDataParams) => Array<User & { subscriptionInfo?: Subscription }>;
};

export const Dashboard: React.FC<DashboardProps> = ({
  getMergedData,
  getActiveSubscriptionCount,
}) => {
  const { data } = useUserData();
  const { data: subscriptionData } = useSubscriptionData();
  return (
    <>
      {data.length === 0 && subscriptionData.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Dashboard</h1>
          <Flex margin={"16px 0 0 0"} container gap={"2rem"} flexWrap="wrap">
            <div className={classNames(styles.card, styles.barChart)}>
              <h3 className={styles.chartName}>
                Active Subscription per Package
              </h3>
              <GroupedBarChart
                mergedData={getMergedData({ userData: data, subscriptionData })}
              />
            </div>
            <div className={classNames(styles.card, styles.pieChart)}>
              <h3 className={styles.chartName}>Active Users</h3>

              <PieChart statusData={getActiveSubscriptionCount({ data })} />
            </div>
          </Flex>
        </>
      )}
    </>
  );
};

export default Dashboard;
