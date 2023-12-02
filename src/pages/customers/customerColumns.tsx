import { ProfileInfo } from "@components/profile-info/profile-info";
import { Column } from "@ui/table/table";
import { format } from "date-fns";
import React from "react";
import { User } from "./useUserData";

export const customerColumns = (): Column<User>[] => {
  return [
    {
      id: "name",
      title: "name",
      render: (rowData) => {
        return (
          <ProfileInfo
            full_name={rowData.full_name}
            email={rowData.email}
            img={""}
          />
        );
      },
    },
    {
      id: "address",
      title: "Address",
      render: (rowData) => {
        return (
          <span>
            {rowData.address}, {rowData.country}
          </span>
        );
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
