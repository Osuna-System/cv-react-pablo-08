function CabeceraCV({ perfil }) {
  return (
    <header>
      <h1>{perfil.nombre}</h1>
      <h3>{perfil.titulo}</h3>
      <hr />
    </header>
  );
}

export default CabeceraCV;
