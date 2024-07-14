import React from "react";

function Note(props) {
function handleId() {
  props.onDelete(props.id)
  console.log("id alindi:::",props.id)
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleId}>DELETE</button>
    </div>
  );
}

export default Note;
