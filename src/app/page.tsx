import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Demostración de Métodos de Estilizado
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. CSS Global</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TarjetaGlobal
            titulo="Tarjeta con CSS Global"
            contenido="Esta tarjeta usa estilos globales definidos en globals.css"
            color="#3b82f6"
          />
          <TarjetaGlobal
            titulo="Otra Tarjeta Global"
            contenido="Mismo estilo, diferentes contenidos"
            color="#10b981"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Módulos CSS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TarjetaModulo
            nombre="Tarjeta Primaria"
            descripcion="Variante primaria con módulos CSS"
            categoria="CSS Modules"
            variante="tarjetaPrimaria"
          />
          <TarjetaModulo
            nombre="Tarjeta Secundaria"
            descripcion="Variante secundaria con módulos CSS"
            categoria="CSS Modules"
            variante="tarjetaSecundaria"
          />
          <TarjetaModulo
            nombre="Tarjeta Éxito"
            descripcion="Variante éxito con módulos CSS"
            categoria="CSS Modules"
            variante="tarjetaExito"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Estilos en Línea</h2>
        <div className="flex flex-wrap gap-4">
          <TarjetaDinamica
            titulo="Tarjeta Dinámica"
            contenido="Estilos completamente dinámicos mediante props"
            colorFondo="#fef3c7"
            colorTexto="#92400e"
            ancho="300px"
          />
          <TarjetaDinamica
            titulo="Tarjeta Activa"
            contenido="Esta tarjeta está en estado activo"
            colorFondo="#f3f4f6"
            colorTexto="#374151"
            ancho="300px"
            activo={true}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Tailwind CSS</h2>
        <div className="flex flex-wrap gap-4">
          <TarjetaTailwind
            titulo="Tarjeta con Tailwind"
            descripcion="Estilizado completamente con clases de Tailwind CSS"
            etiqueta="Moderno"
            imagen={null}
          />
          <TarjetaTailwind
            titulo="Tarjeta con Imagen"
            descripcion="Incluye imagen y diseño responsive"
            imagen="/placeholder-image.jpg"
            etiqueta="Con imagen"
          />
        </div>
      </section>
    </main>
  );
}