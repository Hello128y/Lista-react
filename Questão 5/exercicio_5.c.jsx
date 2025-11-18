import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [temperatura, setTemperatura] = useState(20);

  const aumentarTemp = () => setTemperatura((prev) => prev + 2);
  const diminuirTemp = () => setTemperatura((prev) => prev - 2);

  const corDisplay = temperatura >= 20 ? "#ff4c4c" : "#4c6fff"; 
  return (
    <div className="container">
      <h1>Termômetro Digital</h1>

      <div className="display" style={{ backgroundColor: corDisplay }}>
        <span>{temperatura}°C</span>
      </div>

      <div className="buttons">
        <button onClick={diminuirTemp}>- 2°C</button>
        <button onClick={aumentarTemp}>+ 2°C</button>
      </div>
    </div>
  );
}
export default App;