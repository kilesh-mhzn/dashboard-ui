import { User } from "@pages/customers/customer.model";
import CustomerService from "@services/customer.service";
import React from "react";
import { useLoaderData } from "react-router-dom";

interface LoaderData {
  customerDetail?: User;
  error?: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function customerDetailLoader({ params }): Promise<LoaderData> {
  try {
    const customerId = +params.id;

    if (isNaN(customerId)) {
      throw new Error("Invalid customer ID");
    }

    const customerService = new CustomerService();
    const customerDetail: User = await customerService.getCustomer(customerId);

    return { customerDetail };
  } catch (error) {
    console.error("Error fetching customer detail:", error);
    return { error: "Failed to fetch customer detail" };
  }
}

export const CustomerDetail = () => {
  const loaderData = useLoaderData() as LoaderData;

  const { customerDetail, error } = loaderData;

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!customerDetail) {
    return <div>Loading...</div>;
  }

  return <div>{customerDetail.first_name}</div>;
};
