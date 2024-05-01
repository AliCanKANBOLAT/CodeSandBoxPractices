import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [extended, setExtended] = useState(false)

  function dataEnter () {
    setExtended(true)
    
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
     { extended === true ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : ""}
        <textarea
          name="content"
          onClick={dataEnter}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={ extended ? 3 : 1 }
        />
        <Zoom in={extended}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
