import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Tag, Dropdown, Avatar, Tooltip } from "neetoui";

import { calculateCreatedAgo, calculateDateToWeekday } from "./utils";

const Card = ({ note }) => {
  const { title, description, created_at } = note;

  return (
    <div className="neeto-ui-shadow-xs neeto-ui-rounded-none neeto-ui-border-gray-300 mb-4 w-full border py-3 px-4">
      <div className="flex items-center justify-between">
        <Typography className="mb-px leading-6" style="h4">
          {title}
        </Typography>
        <Dropdown buttonSize="small" buttonStyle="text" icon={MenuVertical}>
          <li>Edit</li>
          <li>Delete</li>
        </Dropdown>
      </div>
      <Typography className="neeto-ui-text-gray-600 leading-5" style="body2">
        {description}
      </Typography>
      <hr className="my-3" />
      <div className="flex items-center justify-between">
        <Tag
          className="border-1 rounded-sm bg-gray-100"
          label="Getting Started"
          style="body3"
        />
        <div className="flex items-center justify-between">
          <Clock className="mr-2" color="#68737D" size={16} />
          <Tooltip
            content={calculateDateToWeekday(created_at)}
            followCursor="horizontal"
            position="bottom"
          >
            <Typography
              className="neeto-ui-text-gray-600 mr-2 leading-5"
              style="body3"
            >
              Created {calculateCreatedAgo(created_at)}
            </Typography>
          </Tooltip>
          <Avatar
            user={{
              name: "Oliver Smith",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
