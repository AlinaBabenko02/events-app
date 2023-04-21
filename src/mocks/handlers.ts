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
];
