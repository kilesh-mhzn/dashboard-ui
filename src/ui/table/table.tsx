import React from "react";
import styles from "./table.module.css";
import { useTable } from "./useTable";
import { Pagination } from "@ui/pagination/pagination";

export type Column<T> = {
  id: string;
  title: string;
  render: (item: T) => React.ReactNode;
  customWidth?: string;
};

export type TableProps<T> = {
  cols: Column<T>[];
  data: T[];
  hasCheckbox?: boolean;
  page?: number;
  perPage?: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
};
export const Table = <T extends object>({
  cols,
  data,
  hasCheckbox = false,
  page = 1,
  perPage = 10,
  onPageChange,
  onPerPageChange,
}: TableProps<T>) => {
  const {
    sortedData,
    selectedRows,
    toggleRowSelection,
    toggleSelectAll,
    handleHeaderClick,
  } = useTable(data);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <tr>
            {hasCheckbox && (
              <th>
                <input
                  type="checkbox"
                  checked={selectedRows.length === sortedData.length}
                  onChange={() => toggleSelectAll()}
                />
              </th>
            )}
            {cols.map(({ id, title }) => (
              <th key={id} onClick={() => handleHeaderClick(id)}>
                <div className={styles.tableHeader}>
                  <div className={`${styles.tableHeader} ${styles.pointer}`}>
                    {title}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              {hasCheckbox && (
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item)}
                    onChange={() => toggleRowSelection(item)}
                  />
                </td>
              )}
              {cols.map((col, key) => (
                <td
                  key={key}
                  style={
                    col.customWidth ? { width: `${col.customWidth}px` } : {}
                  }
                >
                  {col.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        perPage={perPage}
        page={page}
        totalItems={sortedData.length}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
      />
    </div>
  );
};
