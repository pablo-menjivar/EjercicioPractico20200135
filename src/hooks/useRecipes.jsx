import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { API } from '../utils/APIUrl'

// Hook para obtener y manejar la lista de recetas
const useRecipes = () => {
  const [recipes, setRecipes] = useState([]) // Lista de recetas
  const [loading, setLoading] = useState(true) // Estado de carga
  const [error, setError] = useState(null) // Estado de error
  // Obtener recetas desde la API
  const fetchRecipes = async () => {
    try {
      setLoading(true)
      const response = await fetch(API)
      
      if (!response.ok) {
        throw new Error('Error al obtener las recetas')
      }
      const data = await response.json()
      setRecipes(data)
      return data
    } catch (err) {
      setError(err.message);
      toast.error(`Error: ${err.message}`)
      throw err;
    } finally {
      setLoading(false)
    }
  }
  // Eliminar una receta por ID
  const deleteRecipe = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        throw new Error('Error al eliminar la receta')
      }
      setRecipes(recipes.filter(recipe => recipe.id !== id))
      toast.success('Receta eliminada correctamente')
      return true
    } catch (err) {
      toast.error(`Error: ${err.message}`)
      return false
    }
  }
  // Carga inicial de recetas al montar el componente
  useEffect(() => {
    fetchRecipes()
  }, [])
  // Devuelve datos y funciones relacionadas
  return {
    recipes,
    loading,
    error,
    fetchRecipes,
    deleteRecipe,
    setRecipes
  }
}
export default useRecipes