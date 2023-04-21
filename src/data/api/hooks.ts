import { useQuery } from "react-query";
import { fetchEvents } from "./actions-query";
import { eventsKeys } from "./hook-keys";
import { Event as EventType } from "../types";

export const useEvents = () =>
  useQuery<EventType[], Error>(eventsKeys.all(), fetchEvents);
