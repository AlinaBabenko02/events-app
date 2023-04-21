import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "react-query";
import {
  fetchEvents,
  createEvent,
  editEvent,
  deleteEvent,
} from "./actions-query";
import { eventsKeys } from "./hook-keys";
import { Event as EventType, CreateEventBody } from "../types";

export const useEvents = () =>
  useQuery<EventType[], Error>(eventsKeys.all(), fetchEvents);

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
