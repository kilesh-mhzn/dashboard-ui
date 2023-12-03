// Pagination.tsx

import React from "react";
import styles from "./pagination.module.css";

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
    <div className={styles.paginationWrapper}>
      <div>
        <span>Rows per page</span>
        <select
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div>
        <span>{(page - 1) * perPage + 1}</span> -{" "}
        <span>{Math.min(page * perPage, totalItems)}</span> of
        <span> {totalItems} </span>
      </div>
      <div>
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          prev
        </button>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPage}
        >
          next
        </button>
      </div>
    </div>
  );
};
