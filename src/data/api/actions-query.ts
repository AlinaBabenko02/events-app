import { Event as EventType, CreateEventBody } from "../types";

export const fetchEvents = async (): Promise<EventType[]> => {
  const response = await fetch(`/events`);
  const data = await response.json();
  return data;
};

export const createEvent = async (
  body: CreateEventBody
): Promise<EventType> => {
  const response = await fetch("/events", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const eventResponse: EventType = await response.json();

  return {
    ...eventResponse,
    startDate: new Date(eventResponse.startDate).toString(),
    endDate: new Date(eventResponse.endDate).toString(),
  };
};
