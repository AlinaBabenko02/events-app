import React from "react";
import { Table } from "antd";
import { useEventsTable } from "./hooks/useEventsTable";
import "./styles.scss";

export const EventsTable: React.FC = () => {
  const {
    table: { columns, data },
  } = useEventsTable();
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
