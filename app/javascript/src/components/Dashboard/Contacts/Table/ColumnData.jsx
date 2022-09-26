import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Avatar, Dropdown } from "neetoui";

const { MenuItem } = Dropdown;

export const buildTableColumnData = setShowDeleteAlert => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name, { role }) => (
      <div className="flex space-x-2">
        <Avatar user={{ name }} />
        <div>
          <Typography style="h4">{name}</Typography>
          <Typography style="body3">{role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
    width: "30%",
  },
  {
    title: "",
    dataIndex: "more",
    key: "more",
    width: "10%",
    render: () => (
      <Dropdown
        buttonStyle="text"
        icon={MenuHorizontal}
        position="bottom-start"
      >
        <MenuItem.Button className="m-1">Edit</MenuItem.Button>
        <MenuItem.Button
          className="m-1"
          style="danger"
          onClick={setShowDeleteAlert}
        >
          Delete
        </MenuItem.Button>
      </Dropdown>
    ),
  },
];
