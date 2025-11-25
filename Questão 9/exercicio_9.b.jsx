import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AlterarCorFundo() {
  const [cor, setCor] = useState('20px');

  const mudarCor = (novaCor) => {
    setCor(novaCor)
    document.getElementById('text').style.fontSize = novaCor
  };

  return (
    <div>
      <h2 id='text'> Escolha seu tamanho</h2>
      <button onClick={() => mudarCor('15px')}>P</button>
      <button onClick={() => mudarCor('30px')}>M</button>
      <button onClick={() => mudarCor('60px')}>G</button>
    </div>
  );
}

export default AlterarCorFundo;