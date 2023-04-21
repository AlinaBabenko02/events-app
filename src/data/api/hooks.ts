import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "react-query";
import { fetchEvents, createEvent } from "./actions-query";
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
