import React from "react";
import { Modal } from "antd";

interface DeleteEventModalProps {
  deleteEventModalShown: boolean;
  setDeleteEventModalShown: () => void;
}

export const DeleteEventModal: React.FC<DeleteEventModalProps> = ({
  deleteEventModalShown,
  setDeleteEventModalShown,
}) => {
  const handleSubmit = () => {
    setDeleteEventModalShown();
  };

  return (
    <Modal
      title="Delete event"
      open={deleteEventModalShown}
      onCancel={setDeleteEventModalShown}
      onOk={handleSubmit}
      okText="Delete"
    >
      Are you sure you want to delete the event?
    </Modal>
  );
};
