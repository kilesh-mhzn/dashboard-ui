import { Table } from "@ui/table/table";
import React, { useMemo, useState } from "react";
import { customerColumns } from "./customerColumns";
import styles from "./customers.module.css";
import { useUserData } from "./useUserData";

export const Customers = () => {
  const { data, loading, error } = useUserData({ baseUrl: "users.json" });

  // State to manage current page and items per page
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  // Handler for page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Handler for items per page change
  const handlePerPageChange = (newPerPage: number) => {
    setItemsPerPage(newPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  return useMemo(() => {
    return (
      <div className={styles.container}>
        {loading && <p>Loading data...</p>}
        {error && <p>Error: {error}</p>}
        {data.length > 0 && (
          <Table
            cols={customerColumns()}
            data={data}
            page={currentPage}
            perPage={itemsPerPage}
            onPageChange={handlePageChange}
            onPerPageChange={handlePerPageChange}
          />
        )}
        <div>&nbsp;</div>
      </div>
    );
  }, [data, error, loading, currentPage, itemsPerPage]);
};
