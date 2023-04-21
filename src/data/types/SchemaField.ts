import { EventType, InputComponents, RenderSchemaPlaces } from "../enums";

export interface EventTypeOption {
  value: EventType;
  label: string;
}

export interface SchemaField {
  name: string;
  label: string;
  required?: boolean;
  render: RenderSchemaPlaces[];
  component: InputComponents;
  options?: EventTypeOption[];
}
