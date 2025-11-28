import React, { useState } from "react";

const OPCOES = {
  cabelo: ["Preto", "Castanho", "Loiro", "Ruivo"],
  olhos: ["Azuis", "Verdes", "Castanhos"],
  acessorios: ["Óculos", "Chapéu", "Colar", "Cachecol"],
};

const getAvatarEmoji = (cabelo, olhos, acessorios) => {
  const emojiBase = olhos === "Azuis" || olhos === "Verdes" ? "👤" : "🧝🏼‍♀️";

  return emojiBase;
};

const AvatarCreator = () => {
  const [avatar, setAvatar] = useState({
    cabelo: OPCOES.cabelo[0],
    olhos: OPCOES.olhos[0],
    acessorios: [],
  });
  const handleCabeloChange = (e) => {
    setAvatar((prevAvatar) => ({
      ...prevAvatar,
      cabelo: e.target.value,
    }));
  };
  const handleOlhosChange = (e) => {
    setAvatar((prevAvatar) => ({
      ...prevAvatar,
      olhos: e.target.value,
    }));
  };

  const handleAcessoriosChange = (e) => {
    const { value, checked } = e.target;

    setAvatar((prevAvatar) => {
      let novosAcessorios = [...prevAvatar.acessorios];

      if (checked) {
        novosAcessorios.push(value);
      } else {
        novosAcessorios = novosAcessorios.filter((acc) => acc !== value);
      }

      return {
        ...prevAvatar,
        acessorios: novosAcessorios,
      };
    });
  };
  const avatarTextual = `${getAvatarEmoji(
    avatar.cabelo,
    avatar.olhos,
    avatar.acessorios
  )} | Cabelo: ${avatar.cabelo} | Olhos: ${avatar.olhos} | Acessórios: ${
    avatar.acessorios.length > 0 ? avatar.acessorios.join(", ") : "Nenhum"
  }`;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Criador de Avatar 👤</h1>

      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h2>Personalizar</h2>
          <div style={{ marginBottom: "20px" }}>
            <h3>Cor do Cabelo (Dropdown)</h3>
            <select
              value={avatar.cabelo}
              onChange={handleCabeloChange}
              style={{ padding: "8px", width: "100%", borderRadius: "4px" }}
            >
              {OPCOES.cabelo.map((cor) => (
                <option key={cor} value={cor}>
                  {cor}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h3>Cor dos Olhos (Radio Buttons)</h3>
            <div style={{ display: "flex", gap: "15px" }}>
              {OPCOES.olhos.map((cor) => (
                <label key={cor} style={{ cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="olhos"
                    value={cor}
                    checked={avatar.olhos === cor}
                    onChange={handleOlhosChange}
                    style={{ marginRight: "5px" }}
                  />
                  {cor}
                </label>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h3>Acessórios (Checkboxes)</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              {OPCOES.acessorios.map((acessorio) => (
                <label key={acessorio} style={{ cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    value={acessorio}
                    checked={avatar.acessorios.includes(acessorio)}
                    onChange={handleAcessoriosChange}
                    style={{ marginRight: "5px" }}
                  />
                  {acessorio}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#e8f0fe",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2>Seu Avatar</h2>
          <div
            style={{
              marginTop: "15px",
              padding: "20px",
              backgroundColor: "#ffffff",
              border: "2px solid #3f51b5",
              borderRadius: "4px",
              fontSize: "1.1em",
              wordWrap: "break-word",
            }}
          >
            <p>{avatarTextual}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCreator; 
