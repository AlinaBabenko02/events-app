import type { ColumnsType } from "antd/es/table";
import { Event } from "../../../data/types";

export const columns: ColumnsType<Event> = [
  {
    title: "TITLE",
    dataIndex: "title",
    key: "title",
    className: "columnsTitle",
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "START DATE",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "END DATE",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "ACTIONS",
    dataIndex: "actions",
    key: "actions",
  },
];

export const data: Event[] = [
  {
    id: "1",
    title: "Start of the year",
    type: "generic",
    startDate: "2022-01-01",
    endDate: "2022-12-01",
    description: "This is an event about the start of this year",
  },
  {
    id: "2",
    title: "Mediagenix holiday",
    type: "holiday",
    startDate: "2022-04-04",
    endDate: "2022-04-05",
    description: "Celebrating Mediagenix",
  },
];
interface UseEventsTableValues {
  table: {
    columns: ColumnsType<Event>;
    data: Event[];
  };
}

export const useEventsTable = (): UseEventsTableValues => {
  return {
    table: {
      columns,
      data,
    },
  };
};
