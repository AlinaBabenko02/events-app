import type { ColumnsType } from "antd/es/table";
import { EventType } from "../../../data/enums";
import { Event } from "../../../data/types";
import { EventTypeStamp } from "../components/event-type-stamp";
import { Actions } from "../components/actions";

export const columns: ColumnsType<Event> = [
  {
    title: "TITLE",
    dataIndex: "title",
    key: "title",
    className: "columnsTitle",
    width: 350,
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
    render: (_, { type }) => <EventTypeStamp type={type} />,
    width: 150,
  },
  {
    title: "START DATE",
    dataIndex: "startDate",
    key: "startDate",
    render: (date) => new Date(date).toLocaleDateString(),
    width: 200,
  },
  {
    title: "END DATE",
    dataIndex: "endDate",
    key: "endDate",
    render: (date) => new Date(date).toLocaleDateString(),
    width: 200,
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description",
    key: "description",
    width: 370,
  },
  {
    title: "ACTIONS",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    render: (_, { id }) => <Actions id={id} />,
  },
];

export const data: Event[] = [
  {
    id: "1",
    title: "Start of the year",
    type: EventType.GENERIC,
    startDate: "2022-01-01",
    endDate: "2022-12-01",
    description: "This is an event about the start of this year",
  },
  {
    id: "2",
    title: "Mediagenix holiday",
    type: EventType.HOLIDAY,
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
