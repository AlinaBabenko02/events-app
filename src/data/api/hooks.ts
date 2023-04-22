import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "react-query";
import {
  fetchEventSchema,
  fetchEvents,
  createEvent,
  editEvent,
  deleteEvent,
} from "./actions-query";
import { eventsKeys } from "./hook-keys";
import { Event as EventType, CreateEventBody, SchemaField } from "../types";

export const useEventSchema = () =>
  useQuery<SchemaField[], Error>(eventsKeys.schema(), fetchEventSchema);

export const useEvents = (params: string) => {
  const queryParams = `search=${params}`;
  return useQuery<EventType[], Error>(eventsKeys.list(queryParams), () =>
    fetchEvents(queryParams)
  );
};

export const useCreateEvent = (): UseMutationResult<
  EventType,
  Error,
  { values: CreateEventBody },
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation(({ values }) => createEvent(values), {
    onSuccess: () => {
      queryClient.invalidateQueries(eventsKeys.all());
    },
  });
};

export const useEditEvent = (
  id: string
): UseMutationResult<
  EventType,
  Error,
  { values: CreateEventBody },
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation(({ values }) => editEvent(id, values), {
    onSuccess: () => {
      queryClient.invalidateQueries(eventsKeys.all());
    },
  });
};

export const useDeleteEvent = (): UseMutationResult<
  void,
  Error,
  { id: string },
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation(({ id }) => deleteEvent(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(eventsKeys.all());
    },
  });
};
