import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './components/q1';

const App = () => {
  return (
    <div>
      <h1>User Details</h1>
      <UserCard name="John Doe" age={0.000001} location="New York, USA" />
      <UserCard name="Tanish" age={5151151} location="Earth, Milkyway galaxy" />
    </div>
  );
};

export default App;
