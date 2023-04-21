import React from "react";
import { Form, Modal } from "antd";
import dayjs from "dayjs";
import { EventForm } from "../../shared/event-form";
import { Event, EventFormFields } from "../../../data/types";
import { useEditEvent } from "../../../data/api/hooks";

const dateFormat = "YYYY-MM-DD";

interface EditEventModalProps {
  editEventModalShown: boolean;
  setEditEventModalShown: () => void;
  event: Event;
}

export const EditEventModal: React.FC<EditEventModalProps> = ({
  editEventModalShown,
  setEditEventModalShown,
  event,
}) => {
  const [form] = Form.useForm();

  const { mutate: editEvent, isLoading: isEditingEvent } = useEditEvent(
    event.id
  );

  const initialValues: EventFormFields = {
    title: event.title,
    type: event.type,
    date: [
      dayjs(event.startDate, dateFormat),
      dayjs(event.endDate, dateFormat),
    ],
    description: event.description,
  };

  const handleSubmit = (values: EventFormFields) => {
    const { date, ...newValues } = values;
    editEvent(
      {
        values: {
          ...newValues,
          startDate: values.date[0].toString(),
          endDate: values.date[1].toString(),
        },
      },
      { onSuccess: () => setEditEventModalShown() }
    );
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="edit-event"
      onFinish={handleSubmit}
      initialValues={initialValues}
    >
      <Modal
        title="Edit event"
        open={editEventModalShown}
        onCancel={setEditEventModalShown}
        onOk={form.submit}
        okText="Edit"
        okButtonProps={{ loading: isEditingEvent }}
        cancelButtonProps={{ loading: isEditingEvent }}
      >
        <EventForm />
      </Modal>
    </Form>
  );
};
