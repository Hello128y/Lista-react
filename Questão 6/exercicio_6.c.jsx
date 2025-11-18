import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cofre() {
  const [aberto, setAberto] = useState(false); 

  const alternarCofre = () => setAberto(!aberto);

  return (
    <div className="container">
      <h1>Cofre Digital</h1>

      <div className="cofre">
        {aberto ? (
          <>
            <span className="status aberto">🔑 Cofre Aberto</span>
            <ul className="lista-itens">
              <ul>💎 Diamante</ul>
              <ul>💰 Barra de ouro</ul>
              <ul>📜 Documento secreto</ul>
            </ul>
          </>
        ) : (
          <>
            <span className="status fechado">🔒 Cofre Trancado</span>
          </>
        )}
      </div>

      <button onClick={alternarCofre}>
        {aberto ? "Fechar Cofre" : "Abrir Cofre"}
      </button>
    </div>
  );
}

export default function App() {
    return (
        <div>
            <Cofre/>
        </div>
    );
}
