import { ProfileInfo } from "@components/profile-info/profile-info";
import { StatusBadge } from "@components/status-badge/status-badge";
import { Column } from "@ui/table/table";
import React from "react";
import { formatDate } from "utils";
import { User } from "../../models/customer.model";
import { Flex } from "@ui/layout/flex";

export const customerColumns = (): Column<User>[] => {
  return [
    {
      id: "full_name",
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
      sortable: true,
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
      sortable: true,
    },
    {
      id: "active",
      title: "Status",
      render: (rowData) => {
        return (
          <Flex container>
            <StatusBadge type={rowData.active} />
          </Flex>
        );
      },
      sortable: true,
    },
  ];
};
