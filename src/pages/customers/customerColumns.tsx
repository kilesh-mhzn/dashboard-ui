import { ProfileInfo } from "@components/profile-info/profile-info";
import { StatusBadge } from "@components/status-badge/status-badge";
import { Column } from "@ui/table/table";
import React from "react";
import { formatDate } from "utils";
import { User } from "../../models/customer.model";

export const customerColumns = (): Column<User>[] => {
  return [
    {
      id: "name",
      title: "name",
      render: (rowData) => {
        return (
          <ProfileInfo
            id={rowData.id}
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
        return <span>{formatDate(rowData.join_date)}</span>;
      },
    },
    {
      id: "status",
      title: "Status",
      render: (rowData) => {
        return <StatusBadge type={rowData.active} />;
      },
    },
  ];
};
