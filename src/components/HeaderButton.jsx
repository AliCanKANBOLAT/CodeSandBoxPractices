// HeaderButton.jsx
import React, { useContext } from 'react';
import { Context } from "./title";

const HeaderButton = () => {
  const contextValue = useContext(Context);

  const handleClick = () => {
    contextValue.setHeaderTitle("Go on your education...");
  };

  return (
    <button onClick={handleClick}>touch with your finger...</button>
  );
}

export default HeaderButton;
