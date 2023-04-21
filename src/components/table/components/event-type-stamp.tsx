import React from "react";
import { Tag } from "antd";
import { EventType } from "../../../data/enums";

const EventTypeStampColor = {
  [EventType.COMPETITOR]: "purple",
  [EventType.GENERIC]: "volcano",
  [EventType.HOLIDAY]: "green",
  [EventType.LAUNCH]: "gold",
};

const EventTypeStampLabel = {
  [EventType.COMPETITOR]: "Competitor event",
  [EventType.GENERIC]: "Generic event",
  [EventType.HOLIDAY]: "Public holidays",
  [EventType.LAUNCH]: "Content launch",
};

export const EventTypeStamp: React.FC<{ type: EventType }> = ({ type }) => {
  return (
    <Tag
      color={EventTypeStampColor[type]}
      bordered={false}
      className="columnsStamp"
    >
      {EventTypeStampLabel[type]}
    </Tag>
  );
};
