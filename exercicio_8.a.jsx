import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function adicionarLista() {
  const[item, setItem] = useState('');
  const[lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (item.trim()) {
      setLista([...lista, item]);
      setItem('');
    }
  };

  return(
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item"
      />
      <ul>
        {lista.map((itemLista, index) =>(
          <li key={index}>{itemLista}</li>
        ))}
      </ul>
      <br></br>
      <button onClick={adicionarItem}>Adicionar</button>
    </div>
  )
}

export default adicionarLista;
