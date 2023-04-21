import { EventType } from "../enums";

export interface CreateEventBody {
  title: string;
  type: EventType;
  startDate: string;
  endDate: string;
  description?: string;
}
