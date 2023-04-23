import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "../app/app";
import { RenderSchemaPlaces } from "../data/enums";
import { eventSchema } from "../mocks/data";
import { events } from "../mocks/handlers";

const queryClient = new QueryClient();

describe("Events table", () => {
  test("Table render with the correct data", async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      );
    });
    // data is loading
    expect(screen.getByText("No data")).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText("No data"));
    // data loading finished

    await waitFor(() => {
      events.forEach((event) => {
        expect(screen.getByText(event.title)).toBeInTheDocument();
        expect(screen.getByText(event.description)).toBeInTheDocument();
      });
    });
  });
});

describe("Event modal", () => {
  test("Create event modal validation", async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      );
    });
    const openModalButton = screen.getByText("Create event");
    fireEvent.click(openModalButton);

    // data loading
    await waitFor(() => {
      eventSchema
        .filter((field) => field.render.includes(RenderSchemaPlaces.FORM))
        .forEach((field) => {
          expect(screen.getByText(field.label)).toBeInTheDocument();
        });
    });
    // data loading finished

    const createButton = screen.getByText("Create");
    fireEvent.submit(createButton);

    await waitFor(() => {
      const messagesCount = screen.getAllByText("Required");
      expect(messagesCount).toHaveLength(3);
    });
    expect(
      screen.getByText(
        "There are errors in the form. Please correct before saving."
      )
    ).toBeInTheDocument();
  });
});
