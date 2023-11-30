import { Column } from "@ui/table/table";
import React from "react";

export interface ContactRow {
  name: string;
  email: string;
  phone: string;
  cityCountry: string;
  assignee: string;
  followers: string[];
  addedOn: string;
  status: string;
  contactType: string;
}

export const colConstants = (): Column<ContactRow>[] => {
  return [
    {
      id: "name",
      title: "name",
      render: (rowData) => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      id: "phone",
      title: "Phone",
      render: (rowData) => {
        return <span>{rowData.phone}</span>;
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

export const fakeData: ContactRow[] = [
  {
    name: "test",
    email: "kathrine.montery@outlook.com",
    phone: "+61 6712589874",
    cityCountry: "Sydney, Australia",
    assignee: "Jane Doe",
    followers: ["1", "2"],
    addedOn: "12 Feb, 2022",
    status: "in progress",
    contactType: "client",
  },
  {
    name: "john doe",
    email: "athrine.montery@outlook.com",
    phone: "+61 6712589871",
    cityCountry: "Sydney, Australia",
    assignee: "Jane Doe",
    followers: ["1", "2"],
    addedOn: "12 Feb, 2022",
    status: "in progress",
    contactType: "client",
  },
  {
    name: "appli",
    email: "zathrine.montery@outlook.com",
    phone: "+61 6712589877",
    cityCountry: "Sydney, Australia",
    assignee: "Jane Doe",
    followers: ["1", "2"],
    addedOn: "12 Feb, 2022",
    status: "in progress",
    contactType: "client",
  },
];
