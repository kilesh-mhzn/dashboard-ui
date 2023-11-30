import { Table } from "@ui/table/table";
import React from "react";
import { colConstants } from "./colConstants";
import styles from "./customers.module.css";

export const Customers = () => {
  return (
    <div className={styles.container}>
      <div>&nbsp;</div>
      <Table
        hasCheckbox
        cols={colConstants()}
        data={[
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
        ]}
      />
      <div>&nbsp;</div>
    </div>
  );
};
