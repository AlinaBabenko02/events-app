import React from "react";
import { Modal } from "antd";

interface CreateEventModalProps {
  createEventModalShown: boolean;
  setCreateEventModalShown: () => void;
}

export const CreateEventModal: React.FC<CreateEventModalProps> = ({
  createEventModalShown,
  setCreateEventModalShown,
}) => {
  const handleCancel = () => {
    setCreateEventModalShown();
  };
  const handleSuccess = () => {
    setCreateEventModalShown();
  };

  return (
    <Modal
      title="Create event"
      open={createEventModalShown}
      onCancel={handleCancel}
      onOk={handleSuccess}
    >
      hello
    </Modal>
  );
};
