import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Previsao({ temperatura, clima, cidade, umidade }) {
  const getIcone = (clima) => {
    const climas = {
      ensolarado: "☀️",
      nublado: "⛅",
      chuvoso: "🌧️",
      tempestuoso: "⛈️",
      nevando: "🌨️",
    };
    return climas[clima.toLowerCase()] || ('🌡️')
  };
  const getCorTemperatura = (temp) =>{
    if (temp < 15 ) return '#4a90e2';
    if (temp < 25) return'#f5a623';
    return '#d0021b';
  };

  return(
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '15px',
      padding:'25px',
      textAlign: 'center',
      backgroundImage: 'linear-gradient(135deg, #7361b6ff, #5b90b8ff)',
      color: 'white',
      maxWidth:'300px',
      }}>

        <h2 style={{margin: '0 0 15px 0'}}>{cidade}</h2>
        <div style={{fontSize:'60px', margin: '10px 0'}}>
          {getIcone(clima)}
        </div>
        <div style={{
          fontSize:'48px',
          fontWeight: 'bold',
          color: getCorTemperatura(temperatura),
          textShadow:'2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          {temperatura}°C
          </div>
          <p style={{fontSize:'18px', margin:'10px 0'}}> {clima}</p>
          <p style={{fontSize:'14px', opacity:0.9}}> Umidade:{umidade}%</p>
          </div>
      );
  }
  function Tempo(){
    const containerStyle ={
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      gap:'20px',
      marginTop:'50px',
      flexWrap:'wrap',
      width:'100%'
    }
      return( 
        <div style={containerStyle}>
          <Previsao temperatura={31} clima = "Ensolarado" cidade = " Rio de Janeiro" umidade={55}/>
          <Previsao temperatura={20} clima = "Nublado" cidade =" São Paulo" umidade={0}/>
          <Previsao temperatura={-12} clima = "evando" cidade= " Maricá" umidade={80}/>
          </div>
          );
}
export default function App() {
  return (
    <div>
      <Tempo />
    </div>
  );
}


