import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MostrarEsconder(){
    const [mostrar, setMostrar] = useState(true);
    return(
        <div>
            {mostrar && <p><img src="https://s2-oglobo.glbimg.com/vJWZU23z_KAXXs8w-8XwtIRSLPg=/600x0/filters:quality(70)/https://i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/Z/R/HNX0JTSuaKPpQHSA28Rg/00000175-p.jpg" /></p>}
            <button onClick ={() => setMostrar(!mostrar)}>
                {mostrar ? 'Esconder foto' : 'Exibir foto'}
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
