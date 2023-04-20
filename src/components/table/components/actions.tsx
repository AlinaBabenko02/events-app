import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

const actions = [{ icon: <EditOutlined /> }, { icon: <DeleteOutlined /> }];

export const Actions: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div>
      {actions.map((action) => (
        <Button icon={action.icon} type="text" shape="circle" />
      ))}
    </div>
  );
};
