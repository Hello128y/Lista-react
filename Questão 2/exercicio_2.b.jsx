import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Boasvindas({ usuario }) {
  return <h1> Bem- vindo de volta, {usuario}!</h1>;
}

export default function App() {
  return (
    <div>
      <Boasvindas usuario=" Vallentina"/>
    </div>
  );
}