import React from "react";
import { Form, Modal } from "antd";
import { EventForm } from "../shared/event-form";
import { useCreateEvent } from "../../data/api/hooks";
import { EventFormFields } from "../../data/types";

interface CreateEventModalProps {
  createEventModalShown: boolean;
  setCreateEventModalShown: () => void;
}

export const CreateEventModal: React.FC<CreateEventModalProps> = ({
  createEventModalShown,
  setCreateEventModalShown,
}) => {
  const [form] = Form.useForm();
  const { mutate: createEvent, isLoading: isCreatingEvent } = useCreateEvent();

  const handleSubmit = (values: EventFormFields) => {
    const { date, ...newValues } = values;
    createEvent(
      {
        values: {
          ...newValues,
          startDate: values.date[0].toString(),
          endDate: values.date[1].toString(),
        },
      },
      { onSuccess: () => setCreateEventModalShown() }
    );
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="create-event"
      onFinish={handleSubmit}
    >
      <Modal
        title="Create event"
        open={createEventModalShown}
        onCancel={setCreateEventModalShown}
        onOk={form.submit}
        okText="Create"
        okButtonProps={{ loading: isCreatingEvent }}
        cancelButtonProps={{ loading: isCreatingEvent }}
      >
        <EventForm />
      </Modal>
    </Form>
  );
};
