import './App.css';

// importing our components
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextFile from './Components/TextForm';
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';

function App() {

  useEffect(() => {
    // Optional: any code to run on component mount
  }, []);  // Removed TextFile from dependency array

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const setTheAlertMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Auto-hide the alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#282828';
      document.body.style.color = 'white';
      setTheAlertMessage("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setTheAlertMessage("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" homePage="Home" aboutPage="About TextUtils" mode={mode} toggleMode={toggleMode} />

        <div className="container-fluid">
          {/* Display the alert if it exists */}
          <Alert alert={alert} />
        </div>

        <div className="container my-3">
          <Routes>
            <Route path="/" element={
              <TextFile heading="Enter your text below" mode={mode} showAlert={setTheAlertMessage} />
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
