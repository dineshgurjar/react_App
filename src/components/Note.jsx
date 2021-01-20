import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Zoom } from "@material-ui/core";

function Note(props) {
  const [isEditable, setEditabe] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    console.log("clicked note");
    setEditabe(() => {
      return !isEditable;
    });
  }

  return isEditable ? (
    <Zoom in={true}>
      <div className={isEditable ? "note2" : "note"}>
        <h1 contentEditable={isEditable ? "true" : "false"}>{props.title}</h1>
        <p contentEditable={isEditable ? "true" : "false"}>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
        <button onClick={handleEdit}>
          <EditOutlinedIcon />
        </button>
      </div>
    </Zoom>
  ) : (
    <div className={isEditable ? "note2" : "note"}>
      <h1 contentEditable={isEditable ? "true" : "false"}>{props.title}</h1>
      <p contentEditable={isEditable ? "true" : "false"}>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onClick={handleEdit}>
        <EditOutlinedIcon />
      </button>
    </div>
  );
}

export default Note;
