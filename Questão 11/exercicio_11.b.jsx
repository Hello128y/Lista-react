import { useState, useEffect } from 'react';

const DynamicForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (data) => {
    const newErrors = {};

    if (data.email && !emailRegex.test(data.email)) {
      newErrors.email = "O e-mail digitado não é válido (falta @ ou domínio).";
    }
    const parsedIdade = parseInt(data.idade, 10);
    if (data.idade && (isNaN(parsedIdade) || parsedIdade <= 18)) {
      newErrors.idade = "A idade deve ser um número maior que 18.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length > 0;
  };

  useEffect(() => {
    validate(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div style={{ padding: "20px", maxWidth: "600px" , fontFamily: "sans-serif" , textAlign: 'center'}}>
      <h1>Formulário </h1>

      {hasErrors && (
        <div
          style={{
            backgroundColor: "#ffe0e0",
            color: "#d32f2f",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #d32f2f",
            borderRadius: "4px",
          }}
        >
          ⚠️ Atenção: Um ou mais campos estão preenchidos incorretamente.
        </div>
      )}
      
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "grid", gap: "15px" }}
      >
        <div>
          <label htmlFor="nome" style={{ display: "block", marginBottom: "5px" }}>Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderColor: errors.email ? "red" : "#ccc",
              borderWidth: "1px",
              borderStyle: "solid"
            }}
          />
          {errors.email && (
            <p style={{ color: "red", margin: "5px 0 0 0", fontSize: "0.9em" }}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="idade" style={{ display: "block", marginBottom: "5px" }}>Idade:</label>
          <input
            type="number"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderColor: errors.idade ? "red" : "#ccc",
              borderWidth: "1px",
              borderStyle: "solid"
            }}
          />
          {errors.idade && (
            <p style={{ color: "red", margin: "5px 0 0 0", fontSize: "0.9em" }}>
              {errors.idade}
            </p>
          )}
        </div>
      </form>

      <hr style={{ margin: "30px 0" }} />
      
      <h2>Dados Preenchidos </h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          backgroundColor: "#f9f9f9",
          borderRadius: "4px",
        }}
      >
        <p>
          <strong>Nome:</strong> {formData.nome}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Idade:</strong> {formData.idade}
        </p>
      </div>
    </div>
  );
};

export default function App() {
    return <DynamicForm />;
}