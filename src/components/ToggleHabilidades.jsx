function ToggleHabilidades({ visible, setVisible }) {
  return (
    <button onClick={() => setVisible(!visible)}>
      {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
    </button>
  );
}

export default ToggleHabilidades;
