import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { DeleteEventModal } from "./delete-event-modal";
import { useToggleState } from "../../../utils/useToggleState";

export const Actions: React.FC<{ id: string }> = ({ id }) => {
  const [deleteEventModalShown, setDeleteEventModalShown] =
    useToggleState(false);

  const actions = [
    { icon: <EditOutlined /> },
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

      <DeleteEventModal
        deleteEventModalShown={deleteEventModalShown}
        setDeleteEventModalShown={setDeleteEventModalShown}
      />
    </>
  );
};
