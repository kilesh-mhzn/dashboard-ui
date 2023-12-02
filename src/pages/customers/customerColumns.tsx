import { Column } from "@ui/table/table";
import React from "react";
import { User } from "./useUserData";
import { format } from "date-fns";
import { Avatar } from "@ui/avatar/avatar";
import { Flex } from "@ui/layout/flex";

export const customerColumns = (): Column<User>[] => {
  return [
    {
      id: "name",
      title: "name",
      render: (rowData) => {
        return (
          <Flex container alignItems="center" gap={"1rem"}>
            <Avatar
              size="md"
              name={rowData.full_name}
              // img="https://randomuser.me/api/portraits/men/10.jpg"
            />
            <Flex>
              <div>{rowData.full_name}</div>
              <div>{rowData.email}</div>
            </Flex>
          </Flex>
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
