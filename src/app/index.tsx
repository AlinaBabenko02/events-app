import React from "react";
import { Input, Button, Table } from "antd";
import { useToggleState } from "../data/utils/useToggleState";
import { CreateEventModal } from "./components/modals/create-event-modal";
import "./styles.scss";
import { useEventsTable } from "./hooks/useEventsTable";

const { Search } = Input;

const App: React.FC = () => {
  const onSearch = (value: string) => console.log(value);
  const { columns, events, loading } = useEventsTable();

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
        <Table columns={columns} dataSource={events} loading={loading} />
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
