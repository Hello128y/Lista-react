import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AlterarCorFundo() {
  const [emo, setEmo] = useState()

  const Risada = {
    text: 'TA ANIMADINHOOO',
    emoji: '😂',
    color: ' #f8f8b6ff'
  }

  const Choro = {
    text: 'Ta tristinho??',
    emoji: '😢',
    color: ' #83adecff'
  }

  const Raiva = {
    text: 'IIIIHHHHHH LÁ VEM',
    emoji: '😡',
    color: ' #f55656ff'
  }

  const Nojo = {
    text: 'EEECAAAT',
    emoji: '🤢',
    color: ' #40a84eff'
  }

  const mudarEmo = (novaEmo) => {
    setEmo(novaEmo)
    document.body.style.backgroundColor = novaEmo.color
    document.getElementById('emoji').innerText = novaEmo.emoji
    document.getElementById('text').innerText = novaEmo.text
  }

  return (
    <div>
      <h2>Seu Sentimento</h2>
      <button onClick={() => mudarEmo(Risada)}>Felicidade</button>
      <button onClick={() => mudarEmo(Choro)}>Tristeza</button>
      <button onClick={() => mudarEmo(Raiva)}>Raiva</button>
      <button onClick={() => mudarEmo(Nojo)}>Nojo</button>
      <h2 id='text'></h2>
      <h2 id='emoji'></h2>
    </div>
  );
}

export default AlterarCorFundo;