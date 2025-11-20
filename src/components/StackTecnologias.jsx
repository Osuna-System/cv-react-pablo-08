function StackTecnologias({ tecnologias }) {
  return (
    <ul>
      {tecnologias.map((tec, index) => (
        <li key={index}>{tec}</li>
      ))}
    </ul>
  );
}

export default StackTecnologias;
