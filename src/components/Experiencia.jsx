export default function Experiencia({ experiencias = [] }) {
  return (
    <section className="experiencia">
      <h2>Experiencia</h2>
      <ul>
        {experiencias.map(({ id, cargo, empresa, periodo, descripcion }) => (
          <li key={id}>
            <h3>
              {cargo} — <small>{empresa}</small>
            </h3>
            <p>
              <em>{periodo}</em>
            </p>
            <p>{descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
