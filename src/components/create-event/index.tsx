import React from "react";
import { Form, Modal } from "antd";
import { EventForm } from "../shared/event-form";

interface CreateEventModalProps {
  createEventModalShown: boolean;
  setCreateEventModalShown: () => void;
}

export const CreateEventModal: React.FC<CreateEventModalProps> = ({
  createEventModalShown,
  setCreateEventModalShown,
}) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    setCreateEventModalShown();
  };
  const handleSubmit = () => {
    setCreateEventModalShown();
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
        onCancel={handleCancel}
        onOk={form.submit}
        okText="Create"
      >
        <EventForm />
      </Modal>
    </Form>
  );
};
