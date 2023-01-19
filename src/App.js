import './App.css';
import { useState } from 'react';

export default function App() {
  const [hex, setHex] = useState('#cc1a1a');
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  return (
    <>
      <div
        style={{
          height: '50vh',
          width: '50vw',
          backgroundColor: hex,
        }}
      >
        <div>Generated Color: {hex}</div>
      </div>
      <button onClick={generateRandomColor}>Generate</button>
    </>
  );
}
