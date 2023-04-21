import { Event as EventType } from "../types";

export const fetchEvents = async (): Promise<EventType[]> => {
  const response = await fetch(`/events`);
  const data = await response.json();
  return data;
};
