export default function TarjetaDinamica({
  titulo,
  contenido,
  colorFondo = '#ffffff',
  colorTexto = '#000000',
  ancho = '300px',
  activo = false
}) {
  const estilos = {
    contenedor: {
      backgroundColor: activo ? '#dcfce7' : colorFondo,
      color: colorTexto,
      width: ancho,
      padding: '1.5rem',
      margin: '1rem',
      border: '2px solid',
      borderColor: activo ? '#22c55e' : '#e5e7eb',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    titulo: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    contenido: {
      lineHeight: '1.6'
    }
  };

  return (
    <div style={estilos.contenedor}>
      <h3 style={estilos.titulo}>{titulo}</h3>
      <p style={estilos.contenido}>{contenido}</p>
      <small>{activo ? '🟩 Activo' : '⬛ Inactivo'}</small>
    </div>
  );
}