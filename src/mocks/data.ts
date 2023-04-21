import { Event } from "../data/types";
import { EventType } from "../data/enums";
import { faker } from "@faker-js/faker";
import { getUniqueId } from "../data/utils/getUniqueId";

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
