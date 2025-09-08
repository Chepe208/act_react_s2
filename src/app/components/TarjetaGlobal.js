export default function TarjetaGlobal({ titulo, contenido, color }) {
  return (
    <div className="tarjeta-global" style={{ borderColor: color }}>
      <h3 className="titulo-global">{titulo}</h3>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
}