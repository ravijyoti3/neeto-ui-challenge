import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import MenuBar from "./LeftMenuBar";
import Create from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showPane, setShowPane] = useState(false);

  return (
    <>
      <MenuBar showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              className="neeto-ui-bg-gray-800 rounded-sm hover:bg-gray-600"
              icon="ri-add-line"
              label="Add Contact"
              size="small"
              onClick={() => setShowPane(true)}
            />
          }
          menuBarToggle={() => {
            setShowMenu(showMenu => !showMenu);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone Number, Etc.",
          }}
        />
        <Create setShowPane={setShowPane} showPane={showPane} />
        <Table setShowDeleteAlert={setShowDeleteAlert} />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Contacts;
