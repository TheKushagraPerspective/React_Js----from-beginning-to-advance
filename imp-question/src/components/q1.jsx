// Create a simple React component called UserCard that takes name, age,
// and location as props and displays them in a styled card format. The
// component should use functional components and hooks.


import React from 'react';
import './q1.css'; // For custom styles

const UserCard = ({ name, age, location }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{name}</h2>
      <p className="user-age">Age: {age}</p>
      <p className="user-location">Location: {location}</p>
    </div>
  );
};

export default UserCard;
