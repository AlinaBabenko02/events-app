import { rest } from "msw";
import { getUniqueId } from "./../data/utils/getUniqueId";
import { eventsData } from "./data";

let events = eventsData;

export const handlers = [
  rest.get("/events", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(JSON.stringify(events)),
      ctx.delay(1000)
    );
  }),

  rest.post("/events", async (req, res, ctx) => {
    const event = { id: getUniqueId(), ...(await req.json()) };
    events = [event, ...events];

    return res(
      ctx.status(200),
      ctx.body(JSON.stringify(event)),
      ctx.delay(1000)
    );
  }),

  rest.patch("/events/:id", async (req, res, ctx) => {
    const eventId = req.params.id;
    const updatedEvent = await req.json();
    const eventIndex = events.findIndex((event) => event.id === eventId);
    events[eventIndex] = updatedEvent;

    return res(
      ctx.status(200),
      ctx.body(JSON.stringify(updatedEvent)),
      ctx.delay(1000)
    );
  }),

  rest.delete("/events/:id", async (req, res, ctx) => {
    const eventId = req.params.id;
    const eventIndex = events.findIndex((event) => event.id === eventId);
    events.splice(eventIndex, 1);

    return res(ctx.status(204), ctx.delay(1000));
  }),
];
