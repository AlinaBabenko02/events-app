import axios from "axios";
import { Event as EventType, CreateEventBody } from "../types";

export const fetchEvents = async (): Promise<EventType[]> =>
  await (
    await axios.get(`/events`)
  ).data;

export const createEvent = async (body: CreateEventBody): Promise<EventType> =>
  await (
    await axios.post("/events", body)
  ).data;
