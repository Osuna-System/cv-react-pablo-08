import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

import { personal, perfil, experiencias, educacion } from "./data";

export default function App() {
  return (
    <div className="container">
      <CabeceraCV
        nombre={personal.nombre}
        cargo={personal.cargo}
        ciudad={personal.ciudad}
        contacto={personal.contacto}
      />

      <Perfil resumen={perfil} />

      <Experiencia experiencias={experiencias} />

      <Educacion estudios={educacion} />
    </div>
  );
}
