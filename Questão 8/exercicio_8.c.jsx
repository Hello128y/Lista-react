import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PlacarJogos() {
  const [nomeTime, setNomeTime] = useState('');
  const [pontuacao, setPontuacao] = useState('');
  const [placar, setPlacar] = useState([]);

  const adicionarTime = () => {
    if (nomeTime.trim() && pontuacao) {
      const novoTime = {
        nome: nomeTime.trim(),
        pontos: parseInt(pontuacao, 10)
      };

      const novoPlacar = [...placar, novoTime];
      novoPlacar.sort((a, b) => b.pontos - a.pontos);
      setPlacar(novoPlacar);
      setNomeTime('');
      setPontuacao('');
    }
  };

  return (
    <div>
      <h1>Placar de Jogos</h1>
      <input
        type="text"
        value={nomeTime}
        onChange={(e) => setNomeTime(e.target.value)}
        placeholder="Nome do Time"
      />
 <div></div>
 <div></div>
 <div></div>
      <input
        type="number"
        value={pontuacao}
        onChange={(e) => setPontuacao(e.target.value)}
        placeholder="Pontuação"
      />

      <ol>
        {placar.map((time, index) => (
          <li key={index}>
            {time.nome} - <strong>{time.pontos}</strong> pontos
          </li>
        ))}
      </ol>
      <br></br>
      <button onClick={adicionarTime}>Adicionar Time</button>

    </div>
  );
}

export default PlacarJogos;
