import { Status, User } from "@models/customer.model";
import { Subscription } from "@models/subscription.model";
import React from "react";
import { Dashboard } from "./dashboard";

export type ActiveSubscriberCountParams = {
  data: User[];
};
export type GetMergeDataParams = {
  userData: User[];
  subscriptionData: Subscription[];
};

export const composeDashboard = () => {
  const getActiveSubscriberCount = ({ data }: ActiveSubscriberCountParams) => {
    return data.reduce(
      (counts, user) => {
        if (user.active === Status.ACTIVE) {
          counts.active++;
        } else {
          counts.inactive++;
        }
        return counts;
      },
      { active: 0, inactive: 0 }
    );
  };

  const getMergedData = ({
    userData,
    subscriptionData,
  }: GetMergeDataParams) => {
    return userData.map((user) => {
      const subscriptionInfo = subscriptionData.find(
        (subscription) => subscription.user_id === String(user.id)
      );
      return { ...user, subscriptionInfo };
    });
  };
  return () => {
    return (
      <Dashboard
        getActiveSubscriptionCount={getActiveSubscriberCount}
        getMergedData={getMergedData}
      />
    );
  };
};
