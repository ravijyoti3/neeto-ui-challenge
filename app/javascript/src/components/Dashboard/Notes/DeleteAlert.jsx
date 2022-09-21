import React, { useState } from "react";

import { Alert } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({ refetch, onClose, selectedNote, setSelectedNote }) => {
  const [deleting, setDeleting] = useState(false);

  const { title, id } = selectedNote;

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: [id] });
      onClose();
      setSelectedNote({});
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      className="rounded-sm"
      isSubmitting={deleting}
      message={`Are you sure you want to delete ${title}? This cannot be undone.`}
      title="Delete note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
