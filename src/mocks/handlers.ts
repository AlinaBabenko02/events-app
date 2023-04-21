import { rest } from "msw";
import { events } from "./data";

export const handlers = [
  rest.get("/events", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(JSON.stringify(events)),
      ctx.delay(1000)
    );
  }),
];
