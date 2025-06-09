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
  // Navegacion con react-router-dom
  const navigate = useNavigate()
  // Estado para manejar modal de recetas
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Estado para manejar receta actual
  const [currentRecipe, setCurrentRecipe] = useState(null)
  // Hooks para manejar recetas y formulario
  const { 
    recipes, 
    loading, 
    fetchRecipes, 
    deleteRecipe,
    setRecipes
  } = useRecipes()
  // Efecto para manejar la carga de recetas al montar el componente
  useEffect(() => {
    fetchRecipes()
  }, [])
  const form = useRecipeForm(currentRecipe, (newRecipe) => {
    if (currentRecipe) {
      // Actualizar receta existente
      setRecipes(recipes.map(recipe => 
        recipe.id === currentRecipe.id ? newRecipe : recipe
      ));
    } else {
      // Agregar nueva receta
      setRecipes([...recipes, newRecipe]);
    }
    setIsModalOpen(false)
  })
  const handleDelete = async (id) => {
    // Confirmar y eliminar receta
    if (window.confirm('¿Estás seguro de que quieres eliminar esta receta?')) {
      await deleteRecipe(id)
    }
  }
  const handleLogout = () => {
    // Confirmar y cerrar sesion
    if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      toast.success('Has cerrado sesión');
      setTimeout(() => navigate('/'), 1000);
    }
  }
  const openAddModal = () => {
    // Abrir modal para añadir nuevas recetas
    setCurrentRecipe(null)
    setIsModalOpen(true)
  }
  const openEditModal = (recipe) => {
    // Abrir modal para editar recetas
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
            <span className="ml-2 text-lg font-bold text-gray-800">Recetas</span>
          </div>
          <Button onClick={handleLogout} variant="secondary" icon={LogOut}>
            Cerrar Sesión
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Administración de Recetas</h1>
          <Button onClick={openAddModal} icon={PlusCircle}>
            Agregar Receta
          </Button>
        </div>
        <Card className="p-0">
          <RecipeTable recipes={recipes} loading={loading} onEdit={openEditModal}onDelete={handleDelete}/>
        </Card>
      </main>
      {/* Modal para agregar/editar recetas */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={currentRecipe ? "Editar Receta" : "Agregar Receta"}>
        <RecipeForm form={form} onSubmit={form.onSubmit} onCancel={() => setIsModalOpen(false)} isSubmitting={form.isSubmitting}/>
      </Modal>
    </div>
  )
}
export default Dashboard