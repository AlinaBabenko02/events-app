import React from "react";
import { Input, Button } from "antd";
import "./styles.scss";

const { Search } = Input;

const App = () => {
  const onSearch = (value: string) => console.log(value);
  return (
    <div className="root">
      <div className="rootHeader">
        <Search
          placeholder="Search events"
          onSearch={onSearch}
          enterButton
          className="rootHeaderSearch"
        />
        <Button type="primary">Create event</Button>
      </div>
    </div>
  );
};

export default App;
