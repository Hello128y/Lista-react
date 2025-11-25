import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BotaoFavoritar({ contagemInicial = 0 }) { 
  const [contagemFavoritos, setContagemFavoritos] = useState(contagemInicial);
  const [favoritado, setFavoritado] = useState(false);

  const handleClick = () => {
   
    setFavoritado(prev => !prev);
    
    
    setContagemFavoritos(prev => prev + (favoritado ? -1 : 1)); 
  };

  const Icone = favoritado ? '⭐' : '☆';
  const classeBotao = `botao-favoritar ${favoritado ? 'favoritado' : 'nao-favoritado'}`; 


  return (
    <div className="container-favoritar">
      <button className={classeBotao} onClick={handleClick}>
        {Icone} {favoritado ? 'Desfavoritar' : 'Favoritar'}
      </button>
      <p>Total de Favoritos: {contagemFavoritos}</p>
    </div>
  );
}

export default BotaoFavoritar;