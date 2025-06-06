import { Clock, List, BookOpen } from 'lucide-react';
import Input from './Input';
import Textarea from './Textarea';

const RecipeForm = ({ form, onSubmit, onCancel, isSubmitting }) => {
  const { register, errors } = form;
  
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        label="Nombre del Platillo"
        name="platillo"
        register={register}
        validation={{ 
          required: 'El nombre del platillo es obligatorio',
          minLength: { value: 3, message: 'Mínimo 3 caracteres' }
        }}
        error={errors.platillo}
        placeholder="Ej: Paella"
        required
      />
      
      <Textarea
        label="Ingredientes"
        name="ingredientes"
        register={register}
        validation={{ 
          required: 'Los ingredientes son obligatorios',
          minLength: { value: 10, message: 'Mínimo 10 caracteres' }
        }}
        error={errors.ingredientes}
        placeholder="Lista de ingredientes separados por comas"
        icon={List}
        required
      />
      
      <Textarea
        label="Instrucciones"
        name="instrucciones"
        register={register}
        validation={{ 
          required: 'Las instrucciones son obligatorias',
          minLength: { value: 20, message: 'Mínimo 20 caracteres' }
        }}
        error={errors.instrucciones}
        placeholder="Pasos de preparación..."
        icon={BookOpen}
        required
      />
      
      <Input
        label="Tiempo de Preparación (minutos)"
        name="tiempoPreparacion"
        type="number"
        register={register}
        validation={{ 
          required: 'El tiempo es obligatorio',
          min: { value: 1, message: 'El tiempo debe ser al menos 1 minuto' },
          max: { value: 600, message: 'El tiempo máximo es 600 minutos' }
        }}
        error={errors.tiempoPreparacion}
        placeholder="Ej: 45"
        icon={Clock}
        required
      />
      
      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          disabled={isSubmitting}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Guardando...' : 'Guardar Receta'}
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;