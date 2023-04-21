import { Dayjs } from "dayjs";
import { EventType } from "../enums";

export interface EventFormFields {
  title: string;
  type: EventType;
  date: Dayjs[];
  description?: string;
}
