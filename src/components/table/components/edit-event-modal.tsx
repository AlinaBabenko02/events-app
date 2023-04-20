import React from "react";
import { Form, Modal } from "antd";
import { EventForm } from "../../shared/event-form";

interface EditEventModalProps {
  editEventModalShown: boolean;
  setEditEventModalShown: () => void;
}

export const EditEventModal: React.FC<EditEventModalProps> = ({
  editEventModalShown,
  setEditEventModalShown,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    setEditEventModalShown();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="edit-event"
      onFinish={handleSubmit}
    >
      <Modal
        title="Edit event"
        open={editEventModalShown}
        onCancel={setEditEventModalShown}
        onOk={form.submit}
        okText="Edit"
      >
        <EventForm />
      </Modal>
    </Form>
  );
};
