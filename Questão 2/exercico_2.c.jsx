import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Statusjogo({ nivel, pontos }) {
  const maxpontos = nivel * 100;
  const progresso = Math.min((pontos / maxpontos) * 100, 100);
  const corbarra = progresso < 30 ? "red" : progresso < 70 ? "orange" : "green";
  return (
    <div>
      <h2>Nível {nivel}</h2>
      <p>
        {" "}
        Pontos: {pontos}/{maxpontos}
      </p>
      <div
        style={{
          width: "200px",
          height: "20px",
          backgroundcolor: "white ",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progresso}%`,
            height: "100%",
            backgroundcolor: corbarra,
            transition: "all 0.3s ease",
          }}
        ></div>
      </div>
      <p>{progresso.toFixed(1)}% completo</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Statusjogo nivel={10} pontos={9000} />
    </div>
  );
}
