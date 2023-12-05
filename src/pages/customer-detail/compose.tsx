import React from "react";
import { CustomerDetail } from "./customer-detail";
import { User } from "@models/customer.model";
import { Subscription } from "@models/subscription.model";
import CustomerService from "@services/customer.service";
import SubscriptionService from "@services/subscription.service";

export interface LoaderData {
  customerDetail?: User;
  subscriptionDetail?: Subscription;
  error?: string;
}

export async function customerDetailLoader({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}): Promise<LoaderData> {
  try {
    const customerId = +params.id;

    if (isNaN(customerId)) {
      throw new Error("Invalid customer ID");
    }

    const customerService = new CustomerService();
    const subscriptionService = new SubscriptionService();

    const customerDetail: User = await customerService.getCustomer(customerId);
    const subscriptionDetail: Subscription =
      await subscriptionService.getSubscription(params.id);

    return { customerDetail, subscriptionDetail };
  } catch (error) {
    return { error: "Failed to fetch customer detail" };
  }
}

export const composeCustomerDetail = () => {
  return () => {
    return (
      <>
        <CustomerDetail />
      </>
    );
  };
};
