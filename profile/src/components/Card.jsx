import React from 'react';
import './Card.css';

export default function Card ({ user }) {
  return (

    <body>
      <div className="card">
      <div className="picture">
        <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
      </div>
      <div className="name">
        {user.name.title} {user.name.first} {user.name.last}
      </div>
      <div className="email">{user.email}</div>
      
    </div>
    </body>
  );
}
