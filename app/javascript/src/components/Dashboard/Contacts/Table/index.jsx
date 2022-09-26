import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { buildTableColumnData } from "./ColumnData";

import { ROW_DATA } from "../constants";

const Table = ({ setShowDeleteAlert }) => (
  <NeetoUITable
    allowRowClick
    pagination
    rowSelection
    columnData={buildTableColumnData(setShowDeleteAlert)}
    rowData={ROW_DATA}
  />
);
export default Table;
