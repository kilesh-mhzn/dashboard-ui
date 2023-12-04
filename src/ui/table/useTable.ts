import { useState, useMemo, useEffect } from "react";

export const useTable = <T extends object>(
  initialData: T[] = [],
  initialPage: number = 1,
  initialPerPage: number = 10
) => {
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [page, setPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const onPerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setPage(1);
  };

  const paginatedData = useMemo(() => {
    const sortedData = sortData(data, sortColumn, sortDirection);

    if (sortedData.length < perPage) return sortedData;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return sortedData.slice(startIndex, endIndex);
  }, [data, page, perPage, sortColumn, sortDirection]);

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
    selectedRows,
    toggleRowSelection,
    toggleSelectAll,
    page,
    perPage,
    paginatedData,
    onPageChange,
    onPerPageChange,
    sortColumn,
    sortDirection,
    setSortColumn,
    setSortDirection,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sortData = <T extends Record<string, any>>(
  data: T[],
  sortColumn: string,
  sortDirection: "asc" | "desc"
) => {
  if (sortColumn && sortDirection) {
    const sorted = [...data].sort((a, b) => {
      const valueA = a[sortColumn] as string;
      const valueB = b[sortColumn] as string;

      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }

  return data;
};
