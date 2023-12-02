import { Column } from "@ui/table/table";
import React from "react";
import { User } from "./useUserData";

export const customerColumns = (): Column<User>[] => {
  return [
    {
      id: "name",
      title: "name",
      render: (rowData) => {
        return <span>{rowData.first_name}</span>;
      },
    },
    {
      id: "phone",
      title: "Phone",
      render: (rowData) => {
        return <span>{rowData.last_name}</span>;
      },
    },
    {
      id: "email",
      title: "email",
      render: (rowData) => {
        return <span>{rowData.email}</span>;
      },
    },
  ];
};
