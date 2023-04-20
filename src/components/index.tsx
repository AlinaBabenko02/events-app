import React from "react";
import { Input, Button } from "antd";
import "./styles.scss";
import { EventsTable } from "./table";
import { useToggleState } from "../data/utils/useToggleState";
import { CreateEventModal } from "./create-event";

const { Search } = Input;

const App: React.FC = () => {
  const onSearch = (value: string) => console.log(value);

  const [createEventModalShown, setCreateEventModalShown] =
    useToggleState(false);

  return (
    <>
      <div className="root">
        <div className="rootHeader">
          <Search
            placeholder="Search events"
            onSearch={onSearch}
            enterButton
            className="rootHeaderSearch"
          />
          <Button type="primary" onClick={setCreateEventModalShown}>
            Create event
          </Button>
        </div>
        <EventsTable />
      </div>
      {createEventModalShown && (
        <CreateEventModal
          createEventModalShown={createEventModalShown}
          setCreateEventModalShown={setCreateEventModalShown}
        />
      )}
    </>
  );
};

export default App;
