import React from "react";
import styles from "./table.module.css";
import { useTable } from "./useTable";
import { Pagination } from "@ui/pagination/pagination";
import { Flex } from "@ui/layout/flex";

export type Column<T> = {
  id: string;
  title: string;
  render: (item: T) => React.ReactNode;
  customWidth?: string;
  sortable?: boolean;
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
}: TableProps<T>) => {
  const {
    selectedRows,
    toggleRowSelection,
    toggleSelectAll,
    paginatedData,
    onPageChange,
    onPerPageChange,
    page,
    perPage,
    sortColumn,
    sortDirection,
    setSortColumn,
    setSortDirection,
  } = useTable(data);

  const handleSort = (columnId: string) => {
    const newSortDirection =
      sortColumn === columnId && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(columnId);
    setSortDirection(newSortDirection);
  };

  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <tr>
            {hasCheckbox && (
              <th>
                <input
                  type="checkbox"
                  checked={selectedRows.length === paginatedData.length}
                  onChange={() => toggleSelectAll()}
                />
              </th>
            )}
            {cols.map(({ id, title, sortable }) => (
              <th
                key={id}
                onClick={() => (sortable ? handleSort(id) : undefined)}
              >
                <div className={`${styles.tableHeader} ${styles.pointer}`}>
                  {title}
                  {sortable && (
                    <span style={{ fontSize: "10px" }}>
                      {sortColumn === id &&
                        (sortDirection === "asc" ? " ▲" : " ▼")}
                    </span>
                  )}
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
      <Flex container padding={"0 0.625rem"} justifyContent="flex-end">
        <Pagination
          perPage={perPage}
          page={page}
          totalItems={data.length}
          onPageChange={onPageChange}
          onPerPageChange={onPerPageChange}
        />
      </Flex>
    </div>
  );
};
