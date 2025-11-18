import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Lista() {
  const hobby = [
    "Volei",
    "Ler",
    "Pintar",
    "Nadar",
    "Basquete",
  ];

  return (
    <div>
      <h2>Meus Hobbies:</h2>
      <ul>
        {hobby.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Lista />
    </div>
  );
}
