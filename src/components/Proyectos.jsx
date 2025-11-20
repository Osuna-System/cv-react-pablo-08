function Proyectos({ lista }) {
  return (
    <section>
      <h2>Proyectos</h2>
      <ul>
        {lista.map((proy, index) => (
          <li key={index}>
            <strong>{proy.nombre}</strong>
            <p>{proy.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Proyectos;
