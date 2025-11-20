import { useState } from "react";
import cvData from "./data/cvData";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

function App() {
  const [tecnologias, setTecnologias] = useState(cvData.tecnologias);
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const agregarTecnologia = (nuevaTec) => {
    if (!nuevaTec.trim()) return;
    setTecnologias([...tecnologias, nuevaTec]);
  };

  return (
    <div className="container">
      <CabeceraCV perfil={cvData.perfil} />
      <Perfil descripcion={cvData.perfil.descripcion} />
      <Educacion lista={cvData.educacion} />
      <Experiencia lista={cvData.experiencia} />

      <h2>Tecnologías</h2>
      <StackTecnologias tecnologias={tecnologias} />
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      <ToggleHabilidades
        visible={mostrarHabilidades}
        setVisible={setMostrarHabilidades}
      />

      {mostrarHabilidades && <Habilidades habilidades={cvData.habilidades} />}

      <Proyectos lista={cvData.proyectos} />
    </div>
  );
}

export default App;
