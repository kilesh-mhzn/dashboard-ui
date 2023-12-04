import { Search } from "@components/searchInput";
import { Flex } from "@ui/layout/flex";
import { Table } from "@ui/table/table";
import React, { useState } from "react";
import { useUserData } from "../../hooks/useUserData";
import { customerColumns } from "./customerColumns";
import styles from "./customers.module.css";

export const Customers = () => {
  const { data, loading, error, setSearchTerm } = useUserData();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePerPageChange = (newPerPage: number) => {
    setItemsPerPage(newPerPage);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      <Flex container justifyContent="space-between" padding={"2rem"}>
        <div className={styles.pageTitle}>Customers</div>

        <Search
          placeholder={"Search"}
          onChange={(value) => setSearchTerm(value)}
        />
      </Flex>

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
    </div>
  );
};
