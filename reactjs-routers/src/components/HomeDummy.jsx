import React from 'react';
import SplashScreen from './SplashScreenDummy';

const Home = () => {

  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');

  return (
    <div>
      <SplashScreen />
      <h1>Welcome, {name ? name : 'Guest'}</h1>
    </div>
  );
};

export default Home;
