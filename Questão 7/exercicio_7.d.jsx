import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Contador() {
    const [texto, setTexto] = useState('');
    return (
        <div>
            <h1>Você digitou: <br></br>{texto}</h1>

            <input type="text" value={texto} onChange={(e) => e.target.value.length <= 50 ? setTexto(e.target.value) : setTexto(texto)}
                placeholder=" Digite algo..." />
            <h2>Tamanho: {texto.length}/50</h2>
        </div>
    );
}

export default Contador;
