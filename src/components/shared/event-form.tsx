import React from "react";
import { Form, Input, Select, DatePicker } from "antd";
import { EventType } from "../../data/enums";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface eventTypeOption {
  value: EventType;
  label: string;
}

const eventTypeOptions: eventTypeOption[] = [
  { value: EventType.COMPETITOR, label: "Competitor event" },
  { value: EventType.GENERIC, label: "Generic event" },
  { value: EventType.HOLIDAY, label: "Public holidays" },
  { value: EventType.LAUNCH, label: "Content launch" },
];

export const EventForm: React.FC = () => {
  return (
    <div>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Type"
        name="type"
        rules={[{ required: true, message: "Required" }]}
      >
        <Select>
          {eventTypeOptions.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Required" }]}
      >
        <RangePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <TextArea rows={4} />
      </Form.Item>
    </div>
  );
};
