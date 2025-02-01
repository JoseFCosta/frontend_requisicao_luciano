import React, { useState } from "react";
import axios from "axios";

function App() {
  const [nomeEmpresa, setNomeEmpresa] = useState("");

  const buscarEmpresa = async () => {
    try {
      const response = await axios.get("https://backend-requisicao-luciano.onrender.com/empresa/10");
      if (response.data.length > 0) {
        setNomeEmpresa(response.data[0].Nome);
      } else {
        setNomeEmpresa("Nenhuma empresa encontrada.");
      }
    } catch (error) {
      console.error("Erro ao buscar a empresa:", error);
      setNomeEmpresa("Erro ao buscar os dados.");
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Consulta de Empresa</h1>
        <button onClick={buscarEmpresa}>Buscar Empresa</button>
        <h2>{nomeEmpresa}</h2>
      </div>
    </div>
  );
}

export default App;
