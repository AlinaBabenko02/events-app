import React from "react";
import { useIsMutating } from "react-query";
import { Form, Input, Select, DatePicker, Skeleton } from "antd";
import { useEventSchema } from "../../data/api/hooks";
import { EventTypeOption, SchemaField } from "../../data/types";
import { InputComponents, RenderSchemaPlaces } from "../../data/enums";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface InputComponentType {
  field: SchemaField;
  disabled: boolean;
}

const fieldToInputComponent: {
  [key in InputComponents]: React.FC<InputComponentType>;
} = {
  [InputComponents.TEXT_INPUT]: ({ ...props }) => <Input {...props} />,
  [InputComponents.SELECT]: ({ ...props }) => (
    <Select {...props}>
      {props.field.options &&
        props.field.options.map((option: EventTypeOption) => (
          <Option value={option.value}>{option.label}</Option>
        ))}
    </Select>
  ),
  [InputComponents.RANGE_PICKER]: ({ ...props }) => (
    <RangePicker format="YYYY-MM-DD" style={{ width: "100%" }} {...props} />
  ),
  [InputComponents.TEXTAREA]: ({ ...props }) => (
    <TextArea rows={4} {...props} />
  ),
};

export const EventForm: React.FC = () => {
  const { data: eventSchema, isLoading: eventSchemaLoading } = useEventSchema();
  const isMutating = !!useIsMutating();

  return !eventSchemaLoading ? (
    <div>
      {eventSchema
        ?.filter((field) => field.render.includes(RenderSchemaPlaces.FORM))
        .map((field, i) => {
          const InputComponent: React.FC<InputComponentType> =
            fieldToInputComponent[field.component];
          return (
            <Form.Item
              key={`${field.label}-${i}`}
              label={field.label}
              name={field.name}
              rules={[{ required: field?.required, message: "Required" }]}
            >
              <InputComponent field={field} disabled={isMutating} />
            </Form.Item>
          );
        })}
    </div>
  ) : (
    <Skeleton />
  );
};
