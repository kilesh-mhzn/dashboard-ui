import React, { FC, useEffect, useState } from "react";
import styles from "./search-input.module.css";
import useDebounce from "@hooks/useDebounce";
import { Input } from "@ui/input/input";

export type BaseSearchProps = {
  placeholder: string;
  onChange: (value: string) => void;
};

export const Search: FC<BaseSearchProps> = ({ onChange, placeholder }) => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 500);

  const searchHandler = (e: string) => {
    setSearch(e);
  };

  useEffect(() => {
    onChange(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <div>
      <Input
        name={"search"}
        onChange={(value) => searchHandler(value)}
        value={search}
        placeholder={placeholder}
      />
    </div>
  );
};
