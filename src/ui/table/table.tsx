import React from "react";
// import { Icon } from "../icons/icon";
import styles from "./table.module.css";
import { SortDirection, useTable } from "./useTable";

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
  sortable?: boolean;
};

export const Table = <T extends object>({
  cols,
  data,
  hasCheckbox = false,
}: // sortable = false,
TableProps<T>) => {
  const {
    // handleHeaderClick,
    // sortConfig,
    sortedData,
    selectedRows,
    toggleRowSelection,
    toggleSelectAll,
  } = useTable(data);

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
            {cols.map((headerItem) => (
              <th key={headerItem.title}>
                <div className={styles.tableHeader}>
                  <div
                    className={`${styles.tableHeader} ${styles.pointer}`}
                    // onClick={() => handleHeaderClick(headerItem.id)}
                  >
                    {headerItem.title}
                    {/*{sortConfig.key === headerItem.id && (*/}
                    {/*  <span*/}
                    {/*    className={classNames({*/}
                    {/*      [styles.desc]:*/}
                    {/*        sortConfig.direction === SortDirection.DESC,*/}
                    {/*    })}*/}
                    {/*  >*/}
                    {/*    {sortConfig.direction === SortDirection.ASC ? (*/}
                    {/*      <span>*/}
                    {/*        <Icon name={'southArrow'} />*/}
                    {/*      </span>*/}
                    {/*    ) : (*/}
                    {/*      <span className={styles.desc}>*/}
                    {/*        <Icon name={'southArrow'} />*/}
                    {/*      </span>*/}
                    {/*    )}*/}
                    {/*  </span>*/}
                    {/*)}*/}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
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
    </div>
  );
};
