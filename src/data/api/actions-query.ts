import axios from "axios";
import { Event as EventType, CreateEventBody, SchemaField } from "../types";

export const fetchEventSchema = async (): Promise<SchemaField[]> =>
  await (
    await axios.get("/event-schema")
  ).data;

export const fetchEvents = async (params?: string): Promise<EventType[]> =>
  await (
    await axios.get(`/events?${params}`)
  ).data;

export const createEvent = async (body: CreateEventBody): Promise<EventType> =>
  await (
    await axios.post("/events", body)
  ).data;

export const editEvent = async (
  id: string,
  body: CreateEventBody
): Promise<EventType> => await (await axios.patch(`/events/${id}`, body)).data;

export const deleteEvent = async (id: string): Promise<void> =>
  await axios.delete(`/events/${id}`);
