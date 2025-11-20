function Educacion({ lista }) {
  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {lista.map((edu, index) => (
          <li key={index}>
            <strong>{edu.titulo}</strong> - {edu.institucion} ({edu.fecha})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;
