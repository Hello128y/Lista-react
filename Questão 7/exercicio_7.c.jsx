import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function InputComValidacao() {

    const [texto, setTexto] = useState('');
    const ehValido = texto.length >= 3;
    const mostrarMensagem = texto.length > 0;
    const mensagem = ehValido ? 'Texto válido!' : 'Digite pelo menos 3 caracteres';
    const corMensagem = ehValido ? 'green' : 'red';
    const handleInputChange = (e) => {
        setTexto(e.target.value);
    };

    return (
        <div>
            <h1 htmlFor="meuInput">Digite seu texto:<br></br></h1>
            <input
                type="text"
                id="meuInput"
                value={texto}
                onChange={handleInputChange}
                placeholder="Mínimo de 3 caracteres..."
                style={{ border: mostrarMensagem ? `2px solid ${corMensagem}` : '1px solid #ccc' }}
            />

            {mostrarMensagem && (
                <p style={{ color: corMensagem, marginTop: '5px' }}>
                    {mensagem}
                </p>
            )}
        </div>
    );
}

export default InputComValidacao;
