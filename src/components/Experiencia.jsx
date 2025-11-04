import React from 'react';

const Experiencia = () => {
  const experiencias = [
    { cargo: "Recaudador", empresa: "Ferry Express", año: "2022-2023", descripcion: "Gestión de cobros y atención al cliente." },
    { cargo: "Vendedor de celulares", empresa: "TechStore", año: "2021-2022", descripcion: "Asesoramiento y ventas de productos tecnológicos." },
    { cargo: "Practicante administrativo", empresa: "Empresa XYZ", año: "2020-2021", descripcion: "Apoyo en procesos contables y administrativos." },
    { cargo: "Auxiliar de logística", empresa: "LogiCorp", año: "2019-2020", descripcion: "Gestión de inventarios y coordinación de transporte." },
  ];

  return (
    <section>
      <h2>Experiencia Laboral</h2>
      {experiencias.map((exp, index) => (
        <div key={index}>
          <h3>{exp.cargo} - {exp.empresa} ({exp.año})</h3>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
};

export default Experiencia;
