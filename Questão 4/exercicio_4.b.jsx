import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CartaoLivro({ titulo, autor, ano, genero }) {
  return (
    <div className="cartao">
      <h2>{titulo}</h2>
      <p>
        <strong>Autor: </strong> {autor}
      </p>
      <p>
        <strong>Lançado em: </strong> {ano}
      </p>
      <p>
        <strong>Gênero literário: </strong> {genero}
      </p>
    </div>
  );
}

function CartaoLivroIBIL() {
  return (
    <CartaoLivro
      titulo="Welcome to the Demon school Anna-chan"
      autor="Andreia Falcão e Cauã Falcão (Mãe e filho)"
      ano="Lançado dia 2023"
      genero="Romance"
    />
  );
}

export default function App() {
  return (
    <div>
      <CartaoLivroIBIL />
    </div>
  );
}


