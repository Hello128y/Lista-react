import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Menu() {
  const pratos = [
    { nome: "Lasanha", preco: 32.0, descricao: "Massa de lasanha à bolonhesa" },
    { nome: "Salada", preco: 45.5, descricao: "Feixe" },
    { nome: "Pizza Margherita", preco: 21.0, descricao: "Massa de pizza com tomate" },
    { nome: "Risotto de Camarão", preco: 38.7, descricao: "Camarão no molho" },
  ];

  return (
    <div>
      <h2>Cardápio:</h2>
      <ul>
        {pratos.map((prato, index) => (
          <li key={index}>
            <p>
              <strong>{prato.nome}</strong> - R$ {prato.preco.toFixed(2)}
            </p>
            <p className="descricao">Descrição: {prato.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Menu />
    </div>
  );
}
