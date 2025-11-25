import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function InputTemporeal(){
  const[ texto, setTexto] = useState('');

   const MIN_LENGTH= 3; 
   const isValido = texto.length>= MIN_LENGTH;
   const mensagem = isValido 
    ? "✅ Texto válido!" 
    : "❌ Digite pelo menos 3 caracteres.";

  return(
    <div>
       <h1>Você digitou: {texto} </h1>
      <input
      type="text"
      value = {texto}
      onChange= {(e)=> setTexto(e.target.value)}
      placeholder = "Digite aqui (mínimo 3 caracteres)"
      className='digite'  
      />
    </div>
  );
  }


export default function App() {
    return (
        <div>
            <InputTemporeal/>
        </div>
    );
}
