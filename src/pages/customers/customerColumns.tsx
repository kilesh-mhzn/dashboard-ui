import { Column } from "@ui/table/table";
import React from "react";
import { User } from "./useUserData";
import { format } from "date-fns";

export const customerColumns = (): Column<User>[] => {
  return [
    {
      id: "name",
      title: "name",
      render: (rowData) => {
        return (
          <div>
            <div>{`${rowData.first_name} ${rowData.middle_name} ${rowData.last_name}`}</div>
            <div>{rowData.email}</div>
          </div>
        );
      },
    },
    {
      id: "address",
      title: "Address",
      render: (rowData) => {
        return <span>{rowData.address}</span>;
      },
    },
    {
      id: "joinData",
      title: "Join Date",
      render: (rowData) => {
        const date = new Date(Number(rowData.join_date) * 1000);
        const formattedDate = format(date, "yyyy/MM/dd");
        return <span>{formattedDate}</span>;
      },
    },
  ];
};
