import { useState, useMemo } from "react";

export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}
export const useTable = <T extends object>(
  initialData: T[] = [],
  initialPage: number = 1,
  initialPerPage: number = 10
) => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: SortDirection | null;
  }>({ key: null, direction: null });
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [page, setPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);

  const handleHeaderClick = (id: string) => {
    setSortConfig(({ key, direction }) => {
      if (key === id) {
        return {
          key,
          direction:
            direction === SortDirection.ASC
              ? SortDirection.DESC
              : SortDirection.ASC,
        };
      } else {
        return { key: id, direction: SortDirection.ASC };
      }
    });
  };
  const sortedData = useMemo(() => {
    if (!sortConfig.key) {
      return data;
    }

    return [...data].sort((a: T, b) => {
      const valueA = sortConfig.key && (a as never)[sortConfig.key];
      const valueB = sortConfig.key && (b as never)[sortConfig.key];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortConfig.direction === SortDirection.ASC
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return sortConfig.direction === SortDirection.ASC
          ? Number(valueA) - Number(valueB)
          : Number(valueB) - Number(valueA);
      }
    });
  }, [data, sortConfig]);
  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, page, perPage]);

  const toggleRowSelection = (row: T) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(row)) {
        return prevSelectedRows.filter((selectedRow) => selectedRow !== row);
      } else {
        return [...prevSelectedRows, row];
      }
    });
  };

  const toggleSelectAll = () => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.length === paginatedData.length ? [] : [...paginatedData]
    );
  };

  return {
    data,
    setData,
    sortConfig,
    handleHeaderClick,
    sortedData,
    selectedRows,
    toggleRowSelection,
    toggleSelectAll,
    page,
    setPage,
    perPage,
    setPerPage,
    paginatedData,
  };
};
