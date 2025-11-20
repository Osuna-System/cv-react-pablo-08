function Experiencia({ lista }) {
  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {lista.map((exp, index) => (
          <li key={index}>
            <strong>{exp.cargo}</strong> - {exp.empresa}
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experiencia;
