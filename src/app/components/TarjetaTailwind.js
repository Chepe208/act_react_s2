export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col w-64 p-4 m-2 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      {imagen && (
        <img 
          src={imagen} 
          alt={titulo}
          className="w-full h-32 object-cover rounded-t-lg mb-4"
        />
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{descripcion}</p>
        {etiqueta && (
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded self-start">
            {etiqueta}
          </span>
        )}
      </div>
    </div>
  );
}