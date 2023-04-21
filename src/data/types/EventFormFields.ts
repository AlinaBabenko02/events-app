import { EventType } from "../enums";

export interface EventFormFields {
  title: string;
  type: EventType;
  date: Date[];
  description?: string;
}
