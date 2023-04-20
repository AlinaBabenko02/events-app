import { EventType } from "../enums";

export interface Event {
  id: string;
  title: string;
  type: EventType;
  startDate: string;
  endDate: string;
  description: string;
}
