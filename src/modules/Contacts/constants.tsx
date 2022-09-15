import type { ColumnsType } from "antd/es/table";
import { TableActionButton } from "./components";
import React from "react";

export interface DataType {
   key: React.Key
   id: string
   username: string
   phone: string

}

const columns: ColumnsType<DataType> = [
   {
      title: "Name",
      dataIndex: "username",
      key: "username",
   },
   {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
   },
   {
      title: "Actions",
      dataIndex: "",
      key: "x",
      render: (value) => <TableActionButton contact={value} />
   }
];

export {
   columns
}