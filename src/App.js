import './App.css';
import { useState } from 'react';

export default function App() {
  const [hex, setHex] = useState('#ffffff');
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: hex,
        overflow: 'hidden',
        zoom: '2',
      }}
    >
      <div>Generated Color: {hex}</div>
      <div>
        <button onClick={generateRandomColor}>Generate</button>
      </div>
    </div>
  );
}
