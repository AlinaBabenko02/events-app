import { Event, SchemaField } from "../data/types";
import { EventType, InputComponents, RenderSchemaPlaces } from "../data/enums";
import { faker } from "@faker-js/faker";
import { getUniqueId } from "../data/utils/getUniqueId";

export const eventSchema: SchemaField[] = [
  {
    name: "title",
    label: "Title",
    required: true,
    render: [RenderSchemaPlaces.FORM, RenderSchemaPlaces.TABLE],
    component: InputComponents.TEXT_INPUT,
  },
  {
    name: "type",
    label: "Type",
    required: true,
    render: [RenderSchemaPlaces.FORM, RenderSchemaPlaces.TABLE],
    component: InputComponents.SELECT,
    options: [
      {
        label: "Competitor event",
        value: EventType.COMPETITOR,
      },
      {
        label: "Generic event",
        value: EventType.GENERIC,
      },
      {
        label: "Public holidays",
        value: EventType.HOLIDAY,
      },
      {
        label: "Content launch",
        value: EventType.LAUNCH,
      },
    ],
  },
  {
    name: "startDate",
    label: "Start date",
    render: [RenderSchemaPlaces.TABLE],
    component: InputComponents.RANGE_PICKER,
  },
  {
    name: "endDate",
    label: "End date",
    render: [RenderSchemaPlaces.TABLE],
    component: InputComponents.RANGE_PICKER,
  },
  {
    name: "date",
    label: "Date",
    required: true,
    render: [RenderSchemaPlaces.FORM],
    component: InputComponents.RANGE_PICKER,
  },
  {
    name: "description",
    label: "Description",
    render: [RenderSchemaPlaces.FORM, RenderSchemaPlaces.TABLE],
    component: InputComponents.TEXTAREA,
  },
];

export const eventsData: Event[] = Array(10)
  .fill(0)
  .map((_, i) => {
    const [startDate, endDate] = faker.date.betweens(
      new Date().toString(),
      faker.date.future().toString(),
      2
    );
    return {
      id: getUniqueId(),
      title: faker.lorem.words(),
      type: faker.helpers.arrayElement([
        EventType.COMPETITOR,
        EventType.GENERIC,
        EventType.HOLIDAY,
        EventType.LAUNCH,
      ]),
      startDate: startDate.toString(),
      endDate: endDate.toString(),
      description: faker.lorem.paragraph(),
    };
  });
