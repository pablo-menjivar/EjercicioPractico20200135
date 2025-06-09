import { useState, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'
import { PlusCircle, LogOut, BookOpen } from 'lucide-react'
import toast from 'react-hot-toast'
import Button from '../components/Button'
import Card from '../components/Card'
import Modal from '../components/Modal'
import RecipeTable from '../components/Table'
import useRecipes from '../hooks/useRecipes'
import useRecipeForm from '../hooks/useRecipeForm'
import RecipeForm from '../components/Form'

const Dashboard = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentRecipe, setCurrentRecipe] = useState(null)
  // Obtener funciones y estado de recetas
  const { 
    recipes, 
    loading, 
    fetchRecipes,
    deleteRecipe,
    setRecipes
  } = useRecipes()
  // Cargar recetas al montar el componente
  useEffect(() => {
    fetchRecipes()
  }, [fetchRecipes]) // Se ejecuta al montar y si fetchRecipes cambia
  // Configurar formulario con callback para 'success'
  const form = useRecipeForm(currentRecipe, async (newRecipe) => {
    if (currentRecipe) {
      // Actualizar receta existente en estado local
      setRecipes(recipes.map(recipe => 
        recipe.id === currentRecipe.id ? newRecipe : recipe
      ))
    } else {
      // Agregar nueva receta al estado local
      setRecipes([...recipes, newRecipe])
    }
    // Recargar datos desde el servidor para asegurar consistencia
    await fetchRecipes() // Recargar después de cualquier operación
    setIsModalOpen(false)
  })
  // Manejar eliminacion de receta
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta receta?')) {
      await deleteRecipe(id)
      await fetchRecipes() // Recargar despues de eliminar
    }
  }
  // Cerrar sesion
  const handleLogout = () => {
    toast.success('Sesión cerrada')
    setTimeout(() => navigate('/'), 1000)
  }
  // Abrir modal para agregar receta
  const openAddModal = () => {
    setCurrentRecipe(null);
    setIsModalOpen(true);
  }
  // Abrir modal para editar receta
  const openEditModal = (recipe) => {
    setCurrentRecipe(recipe)
    setIsModalOpen(true)
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={20} />
            </div>
            <span className="ml-2 text-lg font-bold text-gray-800">RecetasApp</span>
          </div>
          <Button onClick={handleLogout} variant="secondary" icon={LogOut}>
            Cerrar Sesión
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Administrar Recetas
          </h1>
          <Button onClick={openAddModal} icon={PlusCircle} className="shadow-md hover:shadow-lg transition-shadow">
            Agregar Receta
          </Button>
        </div>
        <Card className="p-0 overflow-hidden">
          <RecipeTable recipes={recipes} loading={loading} onEdit={openEditModal} onDelete={handleDelete}/>
        </Card>
      </main>
      {/* Modal para formulario */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={currentRecipe ? "Editar Receta" : "Nueva Receta"}>
        <RecipeForm form={form} onSubmit={form.onSubmit} onCancel={() => setIsModalOpen(false)} isSubmitting={form.isSubmitting}/>
      </Modal>
    </div>
  )
}
export default Dashboard