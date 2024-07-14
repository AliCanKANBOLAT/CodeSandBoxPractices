import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([])

  function getNote(newNote) {
    setNotes(prev => {
      return (
        [...prev,
          newNote
        ]
      )
    })
  }

  function deleteNote(id) {
    setNotes(prev => {
      return prev.filter((value, index) => {
      return index !== id;
    }
    );
    });
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd = {getNote} />
      {notes.map((item,index) =>
      <Note key={index} title={item.title} content={item.content} 
      onDelete= {deleteNote} id={index}  />)}
      <Footer />
    </div>
  );
}

export default App;
