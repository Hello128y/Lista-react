import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cartao({ nome, idade, profissao }) {
  return (
    <div>
      <h3>Nome: {nome}</h3>
      <p><strong>Idade:</strong> {idade}</p>
      <p><strong>Profissão:</strong> {profissao}</p>
    </div>
  );
}

function CartaoExemplo() {
  return (
    <div>
      <Cartao nome="Duda" idade={17} profissao="Desenvolvedora" />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <CartaoExemplo />
    </div>
  );
}
