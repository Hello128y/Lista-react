import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CalculadoraArea() { 
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);

  const calcular = () => {
    let res = Number(n1) * Number(n2); 
    document.getElementById("resul").innerText = `Resultado: ${res}`
  }

  return (
    <div>
      <h1>Calcular a Área 🖾</h1>
      <h2 id='resul'>Resultado: </h2>
      <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder="Altura" />
      <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder="Comprimento" />
      <br></br>
      <br></br>
      <button onClick={() => calcular()}>Calcular</button>
      
    </div>
  );
}

export default CalculadoraArea;