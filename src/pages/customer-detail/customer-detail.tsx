import { User } from "@pages/customers/customer.model";
import CustomerService from "@services/customer.service";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import styles from "./customer-detail.module.css";
import { Grid } from "@ui/layout/grid";
import { Flex } from "@ui/layout/flex";
import classNames from "classnames";
import { formatDate } from "utils";
import { IconLeftChevron } from "@ui/icons";
import { StatusBadge } from "@components/status-badge/status-badge";
import SubscriptionService from "@services/subscription.service";
import { Subscription } from "models/subscription.model";

interface LoaderData {
  customerDetail?: User;
  subscriptionDetail?: Subscription;
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
    const subscriptionService = new SubscriptionService();

    const customerDetail: User = await customerService.getCustomer(customerId);
    const subscriptionDetail = await subscriptionService.getSubscription(
      params.id
    );

    return { customerDetail, subscriptionDetail };
  } catch (error) {
    return { error: "Failed to fetch customer detail" };
  }
}

export const CustomerDetail = () => {
  const loaderData = useLoaderData() as LoaderData;

  const { customerDetail, error, subscriptionDetail } = loaderData;

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!customerDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classNames(styles.container)}>
      <Link to="/customers" className={styles.backBtn}>
        <IconLeftChevron />
      </Link>
      <Flex container gap={"2rem"}>
        <div className={styles.card} style={{ flexGrow: "1" }}>
          <Grid gap={"1rem"} cols={2}>
            <div>
              <div className={styles.label}>Name</div>
              <div
                className={styles.detailField}
              >{`${customerDetail.first_name} ${customerDetail.middle_name} ${customerDetail.last_name}`}</div>
            </div>
            <div>
              <div className={styles.label}>Email</div>
              <div className={styles.detailField}>{customerDetail.email}</div>
            </div>

            <div>
              <div className={styles.label}>Address</div>
              <div className={styles.detailField}>{customerDetail.address}</div>
            </div>
            <div>
              <div className={styles.label}>Country</div>
              <div className={styles.detailField}>{customerDetail.country}</div>
            </div>
          </Grid>
        </div>
        <div>
          <div className={classNames(styles.card)}>
            <Flex
              container
              flexDirection="column"
              gap={"1.25rem"}
              width={"12.5rem"}
            >
              <div>
                <div className={styles.label}>Joined at</div>
                <div className={styles.joinDate}>
                  {formatDate(customerDetail.join_date)}
                </div>
              </div>
              <div>
                <div className={styles.label}>Status</div>
                <Flex container>
                  <StatusBadge type={customerDetail.active} />
                </Flex>
              </div>
              <div>{subscriptionDetail?.package}</div>
            </Flex>
          </div>
        </div>
      </Flex>
    </div>
  );
};
