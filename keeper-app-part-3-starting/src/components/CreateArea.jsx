import React, { useState } from "react";

function CreateArea(props) {
  const[note, setNote] = useState({
    title:"",
    content:""
  })

  function handleChange(event) {
    const {value,name} = event.target;
    setNote(prev => {
      return (
        {...prev,
        [name] : value
        }
      )
    })
  }

  function handleClick (event) {
    event.preventDefault()
    props.onAdd(note)
    setNote({
      title:"",
    content:""
    })
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
