import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('yellow');

  return (
    <>
      <div className="container" style={{ backgroundColor: bgColor }}>
        
          <div className="multi-btn">
              <button onClick={() => setBgColor('white')} style={{backgroundColor : 'white'}}>White</button>
              <button onClick={() => setBgColor('blue')} style={{backgroundColor : 'Blue'}}>Blue</button>
              <button onClick={() => setBgColor('green')} style={{backgroundColor : 'Green'}}>Green</button>
              <button onClick={() => setBgColor('red')} style={{backgroundColor : 'Red'}}>Red</button>
              <button onClick={() => setBgColor('yellow')} style={{backgroundColor : 'Yellow'}}>Yellow</button>
              <button onClick={() => setBgColor('violet')} style={{backgroundColor : 'violet'}}>Violet</button>
              <button onClick={() => setBgColor('lavender')} style={{backgroundColor : 'lavender'}}>Lavender</button>
              <button onClick={() => setBgColor('teal')} style={{backgroundColor : 'teal'}}>Teal</button>
              <button onClick={() => setBgColor('cyan')} style={{backgroundColor : 'cyan'}}>Cyan</button>
              <button onClick={() => setBgColor('gold')} style={{backgroundColor : 'gold'}}>Gold</button>
              <button onClick={() => setBgColor('black')} style={{backgroundColor : 'black' , color : 'white'}}>Black</button>
          </div>

      </div>
    </>
  );
}

export default App;