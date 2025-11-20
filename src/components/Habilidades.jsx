function Habilidades({ habilidades }) {
  return (
    <section>
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((hab, index) => (
          <li key={index}>{hab}</li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;
