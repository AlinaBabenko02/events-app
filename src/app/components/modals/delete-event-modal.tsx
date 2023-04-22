import React from "react";
import { Modal } from "antd";
import { useDeleteEvent } from "../../../data/api/hooks";

interface DeleteEventModalProps {
  deleteEventModalShown: boolean;
  setDeleteEventModalShown: () => void;
  eventId: string;
}

export const DeleteEventModal: React.FC<DeleteEventModalProps> = ({
  deleteEventModalShown,
  setDeleteEventModalShown,
  eventId,
}) => {
  const { mutate: deleteEvent, isLoading: isDeletingEvent } = useDeleteEvent();

  const handleSubmit = () => {
    deleteEvent(
      { id: eventId },
      { onSuccess: () => setDeleteEventModalShown() }
    );
  };

  return (
    <Modal
      title="Delete event"
      open={deleteEventModalShown}
      onCancel={setDeleteEventModalShown}
      onOk={handleSubmit}
      okText="Delete"
      okButtonProps={{ loading: isDeletingEvent }}
      cancelButtonProps={{ loading: isDeletingEvent }}
    >
      Are you sure you want to delete the event?
    </Modal>
  );
};
