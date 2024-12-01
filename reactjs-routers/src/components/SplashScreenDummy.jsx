import React from 'react';
import { Link , useNavigate } from 'react-router-dom';



const NavigationButton = () => {
  const navigate = useNavigate();

  return(
    <>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate(1)}>Next</button>
    </>
  )
}

const SplashScreen = () => {




  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home?name=kushagra">Home</Link></li>
          <li><Link to="/about?topic=React">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <NavigationButton />
    </div>
  );
};

export default SplashScreen;
