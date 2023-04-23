import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "../app/app";
import { EventTypeStampLabel } from "../app/components/table/event-type-stamp";
import { events } from "../mocks/handlers";

const queryClient = new QueryClient();

describe("Events table", () => {
  test("Table render with the correct data", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    events.forEach(async (event) => {
      await waitFor(() => {
        expect(screen.getByText(event.title)).toBeInTheDocument();
      });
      await waitFor(() => {
        expect(
          screen.getByText(EventTypeStampLabel[event.type])
        ).toBeInTheDocument();
      });
      await waitFor(() => {
        expect(
          screen.getByText(event.startDate.toString())
        ).toBeInTheDocument();
      });
      await waitFor(() => {
        expect(screen.getByText(event.endDate.toString())).toBeInTheDocument();
      });
      await waitFor(() => {
        expect(screen.getByText(event.description)).toBeInTheDocument();
      });
    });
  });
});
