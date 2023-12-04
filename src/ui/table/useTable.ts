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
    if (data.length < perPage) return data;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return data.slice(startIndex, endIndex);
  }, [data, page, perPage]);

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
  };
};
