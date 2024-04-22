// title.jsx
import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = (props) => {
  const [title, setTitle] = useState("Hello Context Api...");
  

  const setHeaderTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <Context.Provider value={{ title, setHeaderTitle }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
