export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  const { email, telefono, linkedin } = contacto || {};

  return (
    <header className="cabecera">
      <h1>{nombre}</h1>
      <p>
        <strong>{cargo}</strong> — {ciudad}
      </p>
      <p>
        {email && <span>Email: {email} · </span>}
        {telefono && <span>Tel: {telefono} · </span>}
        {linkedin && (
          <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </p>
    </header>
  );
}
