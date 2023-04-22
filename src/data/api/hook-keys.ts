export const eventsKeys = {
  all: () => ["events"] as const,
  list: (params: string) => [...eventsKeys.all(), params] as const,
  schema: () => ["schema"] as const,
};
