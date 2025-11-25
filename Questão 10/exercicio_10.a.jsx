import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Calculadora() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);

  const calcular = (operacao) => {
    let res
    switch (operacao) {
      case 'soma': res = Number(n1) + Number(n2); break;
      case 'sub': res = Number(n1) - Number(n2); break;
      case 'mult': res = Number(n1) * Number(n2); break;
      case 'div': res = Number(n1) / Number(n2); break;
    }

    document.getElementById("resul").innerText = `Resultado: ${res}`
  }

  return (
    <div>
      <h1>Calculadora</h1>
      <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} />
      <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} />
      <br></br>

      <button onClick={() => calcular("soma")}>Soma</button>
      <button onClick={() => calcular("sub")}>Subtração</button><div></div>
      <button onClick={() => calcular("mult")}>Multiplicação</button>
      <button onClick={() => calcular("div")}>Divisão</button>

      <h2 id='resul'>Resultado: </h2>
    </div>
  );
}

export default Calculadora;