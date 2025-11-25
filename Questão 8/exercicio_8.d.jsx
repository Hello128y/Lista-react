import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PlacarJogos() {
  const [nomeTime, setNomeTime] = useState("");
  const [pontuacao, setPontuacao] = useState("");
  const [placar, setPlacar] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [pontuacaoEditada, setPontuacaoEditada] = useState("");

  const adicionarTime = () => {
    if (nomeTime.trim() && pontuacao) {
      const novoTime = {
        nome: nomeTime.trim(),
        pontos: parseInt(pontuacao, 10)
      };

      const novoPlacar = [...placar, novoTime];
      novoPlacar.sort((a, b) => b.pontos - a.pontos);

      setPlacar(novoPlacar);
      setNomeTime("");
      setPontuacao("");
    }
  };

  const iniciarEdicao = (index, pontosAtuais) => {
    setEditandoIndex(index);
    setPontuacaoEditada(pontosAtuais);
  };

  const salvarEdicao = (index) => {
    const placarAtualizado = [...placar];
    placarAtualizado[index] = {
      ...placarAtualizado[index],
      pontos: parseInt(pontuacaoEditada, 10) || 0
    };

    placarAtualizado.sort((a, b) => b.pontos - a.pontos);

    setPlacar(placarAtualizado);
    setEditandoIndex(null);
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

      <input
        type="number"
        value={pontuacao}
        onChange={(e) => setPontuacao(e.target.value)}
        placeholder="Pontuação"
      />
      <div></div>
      <div></div>                                                                                                                         
      <div></div>
      <div></div>

      <ol>
        {placar.map((time, index) => (
          <li key={index}>
            {editandoIndex === index ? (
              <>
                {time.nome} -
                <input
                  type="number"
                  value={pontuacaoEditada}
                  onChange={(e) => setPontuacaoEditada(e.target.value)}
                  autoFocus
                />

                <button onClick={() => salvarEdicao(index)}>Salvar</button>
                <div></div>
                <div></div>
                <button onClick={() => setEditandoIndex(null)}>Cancelar</button>
              </>
            ) : (
              <>
                {time.nome} - <strong>{time.pontos}</strong> pontos
                <button onClick={() => iniciarEdicao(index, time.pontos)}>
                  Editar
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
      <br></br>
        <button onClick={adicionarTime}>Adicionar Time</button>
    </div>
  );
}

export default PlacarJogos;
