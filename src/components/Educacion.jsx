import React from 'react';

const Educacion = () => {
  const estudios = [
    { curso: "Administración de Empresas", institucion: "Universidad ABC", año: "2020" },
    { curso: "Curso de Excel Avanzado", institucion: "Plataforma XYZ", año: "2021" },
    { curso: "Taller de Finanzas Personales", institucion: "Instituto LMN", año: "2022" },
  ];

  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {estudios.map((edu, index) => (
          <li key={index}>{edu.curso} - {edu.institucion} ({edu.año})</li>
        ))}
      </ul>
    </section>
  );
};

export default Educacion;
