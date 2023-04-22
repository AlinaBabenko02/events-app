import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { DeleteEventModal } from "../modals/delete-event-modal";
import { useToggleState } from "../../../data/utils/useToggleState";
import { EditEventModal } from "../modals/edit-event-modal";
import { Event } from "../../../data/types";

export const Actions: React.FC<{ event: Event }> = ({ event }) => {
  const [editEventModalShown, setEditEventModalShown] = useToggleState(false);
  const [deleteEventModalShown, setDeleteEventModalShown] =
    useToggleState(false);

  const actions = [
    {
      icon: <EditOutlined />,
      onClick: setEditEventModalShown,
    },
    { icon: <DeleteOutlined />, onClick: setDeleteEventModalShown },
  ];

  return (
    <>
      {actions.map((action) => (
        <Button
          icon={action.icon}
          onClick={action.onClick}
          type="text"
          shape="circle"
        />
      ))}

      <EditEventModal
        editEventModalShown={editEventModalShown}
        setEditEventModalShown={setEditEventModalShown}
        event={event}
      />
      <DeleteEventModal
        deleteEventModalShown={deleteEventModalShown}
        setDeleteEventModalShown={setDeleteEventModalShown}
        eventId={event.id}
      />
    </>
  );
};
