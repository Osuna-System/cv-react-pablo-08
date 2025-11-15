export default function Educacion({ estudios = [] }) {
  return (
    <section className="educacion">
      <h2>Educación</h2>
      <ul>
        {estudios.map(({ id, titulo, entidad, periodo }) => (
          <li key={id}>
            <h3>{titulo}</h3>
            <p>
              {entidad} · <em>{periodo}</em>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
