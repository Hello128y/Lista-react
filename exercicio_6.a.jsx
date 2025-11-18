import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MostrarEsconder(){
    const [mostrar, setMostrar] = useState(true);
    return(
        <div>
          {mostrar && <p>Este texto pode ser mostrado ou escondido</p>}
            <button onClick ={() => setMostrar(!mostrar)}>
                {mostrar ? 'Esconder' : 'Mostrar'}
            </button>
        </div>
    );
};

export default function App() {
    return (
        <div>
            <MostrarEsconder />
        </div>
    );
}
