// HeaderTitle.jsx
import React, { useContext } from 'react';
import { Context } from "./title";

const HeaderTitle = () => {
  const contextValue = useContext(Context);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h1>{contextValue.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderTitle;
