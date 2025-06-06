import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { API } from '../utils/APIUrl'

const useRecipeForm = (recipe, onSuccess) => {
  const isEditing = !!recipe;
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm({
    defaultValues: recipe || {
      platillo: '',
      ingredientes: '',
      instrucciones: '',
      tiempoPreparacion: 30
    }
  });

  useEffect(() => {
    if (recipe) {
      reset(recipe);
    }
  }, [recipe, reset]);

  const onSubmit = async (data) => {
  try {
    const url = isEditing ? `${API}/${recipe.id}` : API;
    const method = isEditing ? 'PUT' : 'POST';

    // Validación adicional
    const bodyData = {
      platillo: String(data.platillo || ""),
      ingredientes: String(data.ingredientes || ""),
      instrucciones: String(data.instrucciones || ""),
      tiempoPreparacion: Number(data.tiempoPreparacion) || 30,
    };

    console.log("Enviando datos:", bodyData); // Depuración

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("Error del servidor:", errorData);
      throw new Error(
        errorData?.message || 
        (isEditing ? "Error al actualizar" : "Error al crear")
      );
    }

    const result = await response.json();
    toast.success(isEditing ? "¡Receta actualizada!" : "¡Receta creada!");
    if (onSuccess) onSuccess(result);
    return result;

  } catch (error) {
    console.error("Error completo:", error);
    toast.error(`Error: ${error.message}`);
    throw error;
  }
};

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit: handleSubmit(onSubmit),
    reset
  };
};

export default useRecipeForm;