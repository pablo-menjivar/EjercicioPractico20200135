// Este componente contiene una tabla con los datos de las recetas. Cada receta tiene un nombre, ingredientes, instrucciones, 
// y tiempo de preparacion. Ademas, se incluyen botones para editar y eliminar la receta.
import { Edit, Trash2 } from 'lucide-react'
import Button from './Button'

const RecipeTable = ({ recipes, loading, onEdit, onDelete }) => {
  // Si la tabla está cargando, no renderizamos nada
  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <p>Cargando recetas...</p>
      </div>
    )
  }
  // Si no hay recetas, no renderizamos nada
  if (!recipes || recipes.length === 0) {
    return (
      <div className="flex justify-center py-8">
        <p>No se encontraron recetas</p>
      </div>
    )
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        {/* Encabezado de la tabla */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Platillo
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ingredientes
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Instrucciones
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tiempo (min)
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla */}
        <tbody className="bg-white divide-y divide-gray-200">
          {recipes.map((recipe) => (
            <tr key={recipe.id} className="hover:bg-gray-50">
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {recipe.platillo}
              </td> 
              <td className="px-4 py-4 text-sm text-gray-500">
                <div className="line-clamp-5">{recipe.ingredientes}</div>
              </td>
              <td className="px-4 py-4 text-sm text-gray-500">
                <div className="line-clamp-5">{recipe.instrucciones}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                {recipe.tiempoPreparacion}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end gap-2">
                  { /* Botones reutilizables */ }
                  <Button onClick={() => onEdit(recipe)} variant="secondary" className="p-1" title="Editar">
                    <Edit size={16} />
                  </Button>
                  <Button onClick={() => onDelete(recipe.id)} variant="danger" className="p-1" title="Eliminar">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default RecipeTable