import { useState, useMemo } from 'react';

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export const useTable = <T extends object>(initialData: T[]) => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: SortDirection | null;
  }>({ key: null, direction: null });
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handleHeaderClick = (id: string) => {
    setSortConfig((prevSortConfig) => {
      if (prevSortConfig.key === id) {
        return {
          ...prevSortConfig,
          direction:
            prevSortConfig.direction === SortDirection.ASC
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

      if (typeof valueA === 'string' && typeof valueB === 'string') {
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

  const toggleRowSelection = (row: T) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow !== row),
      );
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === sortedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...sortedData]);
    }
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
  };
};