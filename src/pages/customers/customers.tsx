import { Table } from "@ui/table/table";
import React, { useMemo } from "react";
import { customerColumns } from "./customerColumns";
import styles from "./customers.module.css";
import { useUserData } from "./useUserData";

export const Customers = () => {
  const { data, loading, error } = useUserData({ baseUrl: "users.json" });

  return useMemo(() => {
    return (
      <div className={styles.container}>
        {loading && <p>Loading data...</p>}
        {error && <p>Error: {error}</p>}
        {data.length > 0 && <Table cols={customerColumns()} data={data} />}
        <div>&nbsp;</div>
      </div>
    );
  }, [data, error, loading]);
};
