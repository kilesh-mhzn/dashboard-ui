// Pagination.tsx

import React from "react";
import styles from "./pagination.module.css";
import { Flex } from "@ui/layout/flex";
import { IconLeftChevron, IconRightChevron } from "@ui/icons/icons";

type PaginationProps = {
  perPage: number;
  page: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
  onPerPageChange: (newPerPage: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  perPage,
  page,
  totalItems,
  onPageChange,
  onPerPageChange,
}) => {
  const totalPage = Math.ceil(totalItems / perPage);

  return (
    <Flex
      className={styles.container}
      container
      gap={"1rem"}
      alignItems="center"
      margin={" 1rem 0px"}
    >
      <Flex container gap={"5px"}>
        <span>Rows per page</span>
        <select
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </Flex>
      <div>
        <span>{(page - 1) * perPage + 1}</span> -{" "}
        <span>{Math.min(page * perPage, totalItems)}</span> of
        <span> {totalItems} </span>
      </div>
      <Flex container>
        <button
          className={styles.paginationBtn}
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          <IconLeftChevron size="2em" />
        </button>
        <button
          className={styles.paginationBtn}
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPage}
        >
          <IconRightChevron size="2em" />
        </button>
      </Flex>
    </Flex>
  );
};
