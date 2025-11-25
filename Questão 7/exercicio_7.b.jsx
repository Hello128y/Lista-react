import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function LetraMaiuscula(){
    const [texto, setTexto] = useState('');

    return(
        <div>
            <h1>Versão maiúscula da versão do que você digitou:<br></br> {texto.toUpperCase()}</h1>
            <input type="text"
                value = {texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Digite aqui"
                className="digite" />
        </div>
    )
}

export default LetraMaiuscula
