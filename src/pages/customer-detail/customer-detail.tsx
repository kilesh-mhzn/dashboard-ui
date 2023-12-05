import { StatusBadge } from "@components/status-badge/status-badge";
import { IconLeftChevron } from "@ui/icons/icons";
import { Flex } from "@ui/layout/flex";
import { Grid } from "@ui/layout/grid";
import classNames from "classnames";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatDate } from "utils";
import { LoaderData } from "./compose";
import styles from "./customer-detail.module.css";

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
        Go Back
      </Link>
      <Flex container gap={"2rem"} flexWrap="wrap">
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
            <Grid cols={2} gap={"1.25rem"}>
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
              {subscriptionDetail?.package && (
                <>
                  <div>
                    <div className={styles.label}>Subscription Plan</div>
                    <div className={styles.detailField}>
                      {subscriptionDetail?.package}
                    </div>
                  </div>
                  <div>
                    <div className={styles.label}>Expiry date</div>
                    <div>{subscriptionDetail?.expires_on}</div>
                  </div>
                </>
              )}
            </Grid>
          </div>
        </div>
      </Flex>
    </div>
  );
};
