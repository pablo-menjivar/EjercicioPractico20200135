# 📖 Aplicación de Recetas

Una aplicación web moderna para gestionar y organizar tus recetas de cocina favoritas. Permite crear, editar, visualizar y eliminar recetas de manera sencilla e intuitiva.

## ✨ Características

- **Gestión completa de recetas**: Crea, edita y elimina recetas
- **Interfaz moderna**: Diseño limpio y responsivo con Tailwind CSS
- **Formularios intuitivos**: Campos para nombre del platillo, ingredientes, instrucciones y tiempo de preparación
- **Vista de tabla**: Visualiza todas tus recetas organizadas en una tabla
- **Navegación fluida**: Experiencia de usuario optimizada con React Router
- **Notificaciones**: Mensajes de confirmación y error en tiempo real

## 🚀 Cómo ejecutar la aplicación

### Requisitos previos
- Node.js (versión 18 o superior)
- npm

### Pasos para ejecutar

1. **Clona o descarga el proyecto**

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta la aplicación en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y ve a la URL que aparece en la terminal (generalmente `http://localhost:5173`)

### Otros comandos disponibles

- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 🛠️ Tecnologías utilizadas

- **React 19** - Biblioteca de JavaScript para la interfaz de usuario
- **Vite** - Herramienta de desarrollo y construcción
- **Tailwind CSS** - Framework de CSS para el diseño
- **React Router** - Navegación entre páginas
- **React Hook Form** - Manejo de formularios
- **Lucide React** - Iconos modernos

## 📁 Estructura del proyecto

```
src/
├── components/        # Componentes reutilizables
│   ├── Button.jsx    # Botón personalizable
│   ├── Card.jsx      # Contenedor de tarjetas
│   ├── Form.jsx      # Formulario de recetas
│   ├── Input.jsx     # Campo de entrada
│   ├── Modal.jsx     # Ventana modal
│   ├── Table.jsx     # Tabla de recetas
│   └── Textarea.jsx  # Área de texto
├── hooks/            # Hooks personalizados
│   ├── useRecipes.jsx    # Gestión de recetas
│   └── useRecipeForm.jsx # Manejo de formularios
├── pages/            # Páginas principales
│   ├── WelcomePage.jsx   # Página de bienvenida
│   └── Dashboard.jsx     # Panel principal
├── utils/            # Utilidades
│   └── APIUrl.jsx    # Configuración de API
└── App.jsx           # Componente principal
```

## ❓ Sobre la ausencia de imports de React

En este proyecto notarás que los archivos `.jsx` no contienen la importación explícita de React (`import React from 'react'`). Esto es posible gracias a:

### React 17+ con JSX Transform
A partir de React 17, se introdujo el **nuevo JSX Transform** que permite escribir JSX sin importar React explícitamente. Vite y el plugin de React (`@vitejs/plugin-react`) configuran automáticamente esta característica, por lo que garantiza que tu código sea más limpio y eficiente.
  
## 🎯 Funcionalidades principales

1. **Página de Bienvenida**: Introducción con redirección automática al dashboard
2. **Dashboard Principal**: Vista general con tabla de recetas y opciones de gestión
3. **Agregar Recetas**: Formulario modal para crear nuevas recetas
4. **Editar Recetas**: Modificación de recetas existentes
5. **Eliminar Recetas**: Eliminación con confirmación
6. **Validación**: Formularios con validación en tiempo real
7. **Persistencia**: Los datos se guardan en una API externa

¡Disfruta organizando tus recetas favoritas! 👨‍🍳👩‍🍳

---

# EXTRA: ENLACE A VIDEO DE DEMOSTRACIÓN DE FUNCIONAMIENTO DE LA APLICACIÓN

[Aquí](https://youtu.be/NPoWxT-KSTQ)
