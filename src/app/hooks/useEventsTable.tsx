import { ReactNode } from "react";
import type { ColumnsType, ColumnType } from "antd/es/table";
import { Event } from "../../data/types";
import { EventTypeStamp } from "../components/table/event-type-stamp";
import { Actions } from "../components/table/actions";
import { RenderSchemaPlaces } from "../../data/enums";
import { useEvents, useEventSchema } from "../../data/api/hooks";

const columnRenderComponent: {
  [key: string]: (text: string, record: Event) => ReactNode;
} = {
  type: (_, { type }) => <EventTypeStamp type={type} />,
  startDate: (date) => new Date(date).toLocaleDateString(),
  endDate: (date) => new Date(date).toLocaleDateString(),
};

const columnWidth: {
  [key: string]: number;
} = {
  title: 350,
  type: 150,
  startDate: 200,
  endDate: 200,
  description: 370,
};

const actionsColumn: ColumnType<Event> = {
  title: "ACTIONS",
  dataIndex: "actions",
  key: "actions",
  render: (_, event) => <Actions event={event} />,
};

interface UseEventsTableValues {
  columns: ColumnsType<Event>;
  events?: Event[];
  loading: boolean;
}

export const useEventsTable = (): UseEventsTableValues => {
  const { data: eventSchema, isLoading: eventSchemaLoading } = useEventSchema();
  const { data: events, isLoading: eventsLoading } = useEvents();
  const loading = eventSchemaLoading || eventsLoading;

  const columns: ColumnsType<Event> = eventSchema
    ? eventSchema
        ?.filter((field) => field.render.includes(RenderSchemaPlaces.TABLE))
        .map((field) => {
          return {
            title: field.label.toUpperCase(),
            dataIndex: field.name,
            key: field.name,
            width: columnWidth[field.name],
            render: columnRenderComponent[field.name],
          };
        })
    : [];

  columns.push(actionsColumn);

  return {
    columns,
    events,
    loading,
  };
};
