import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { API } from '../utils/APIUrl'

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await fetch(API);
      
      if (!response.ok) {
        throw new Error('Error al obtener las recetas');
      }
      
      const data = await response.json();
      setRecipes(data);
      return data;
    } catch (err) {
      setError(err.message);
      toast.error(`Error: ${err.message}`);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Error al eliminar la receta');
      }
      
      setRecipes(recipes.filter(recipe => recipe.id !== id));
      toast.success('Receta eliminada correctamente');
      return true;
    } catch (err) {
      toast.error(`Error: ${err.message}`);
      return false;
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return {
    recipes,
    loading,
    error,
    fetchRecipes,
    deleteRecipe,
    setRecipes
  };
};

export default useRecipes;