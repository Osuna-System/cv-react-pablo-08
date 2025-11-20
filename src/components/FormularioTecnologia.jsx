import { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {
  const [valor, setValor] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    agregarTecnologia(valor);
    setValor("");
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Agregar tecnología"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTecnologia;
