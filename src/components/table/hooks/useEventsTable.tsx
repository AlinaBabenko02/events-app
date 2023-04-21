import type { ColumnsType } from "antd/es/table";
import { Event } from "../../../data/types";
import { EventTypeStamp } from "../components/event-type-stamp";
import { Actions } from "../components/actions";
import { useEvents } from "../../../data/api/hooks";

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

interface UseEventsTableValues {
  table: {
    columns: ColumnsType<Event>;
    events?: Event[];
    eventsLoading: boolean;
  };
}

export const useEventsTable = (): UseEventsTableValues => {
  const { data: events, isLoading: eventsLoading } = useEvents();

  return {
    table: {
      columns,
      events,
      eventsLoading,
    },
  };
};
