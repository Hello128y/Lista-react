import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function FormularioComplementar() {
  const [dados, setDados] = useState({
    cidade: '',
    estado: '',
    cep: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados(prevDados => ({
      ...prevDados,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Formulário</h2>
      <form>
        <div>
          <label>Cidade:</label>
          <input type="text" name="cidade" value={dados.cidade} onChange={handleChange} />
        </div>
        <div>
          <label>Estado:</label>
          <input type="text" name="estado" value={dados.estado} onChange={handleChange} />
        </div>
        <div>
          <label>Cep:</label>
          <input type="number" name="cep" value={dados.cep} onChange={handleChange} />
        </div>
      </form>

      <h3>Dados preenchidos</h3>
      <p><strong>Cidade:</strong> {dados.cidade}</p>
      <p><strong>Estado:</strong> {dados.estado}</p>
      <p><strong>Cep:</strong> {dados.cep}</p>
    </div>
  );
}

export default FormularioComplementar;