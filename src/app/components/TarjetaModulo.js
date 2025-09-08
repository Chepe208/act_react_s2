import styles from './TarjetaModulo.module.css';

export default function TarjetaModulo({ 
  nombre, 
  descripcion, 
  categoria, 
  variante = 'tarjeta' 
}) {
  const claseTarjeta = `${styles.tarjeta} ${styles[variante] || ''}`;

  return (
    <div className={claseTarjeta}>
      <div className={styles.encabezado}>
        <h3 className={styles.titulo}>{nombre}</h3>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
      <span className={styles.categoria}>{categoria}</span>
    </div>
  );
}