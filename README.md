# Mi Portfolio

Este proyecto es un portfolio personal desarrollado utilizando Astro, un moderno generador de sitios estáticos. El diseño está inspirado en la estética de v0 by Vercel, con un enfoque minimalista y moderno.

## Características

- Diseño responsivo y moderno
- Secciones para proyectos y experiencia laboral
- Efecto de fondo animado con las iniciales "CRB"
- Efecto de glitch en el nombre del portfolio
- Tarjetas expandibles para mostrar más información
- Integración de React para componentes interactivos
- Estilos con Tailwind CSS

## Tecnologías utilizadas

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Cómo ejecutar el proyecto

1. Clona este repositorio
2. Instala las dependencias: `npm install -D tailwindcss @astrojs/tailwind @astrojs/react react react-dom`
3. Ejecuta el servidor de desarrollo: `npm run dev`
4. Abre `http://localhost:4321/` en tu navegador

## Generar el SVG del favicon

Para generar el archivo SVG del favicon, ejecuta el siguiente comando:
`node src/scripts/renderFavicon.js`

## Estructura del proyecto

- `src/pages/`: Contiene las páginas de Astro
- `src/components/`: Componentes reutilizables (Astro y React)
- `src/layouts/`: Layouts de Astro
- `src/styles/`: Estilos globales
- `src/scripts/`: Scripts para tareas automatizadas

## Personalización

- Modifica el contenido en `src/pages/index.astro`
- Actualiza los proyectos y experiencias en `src/components/Portfolio.jsx`
- Ajusta los estilos en `src/styles/global.css` y en los componentes individuales

## Despliegue

Este proyecto puede ser desplegado en cualquier plataforma que soporte Astro, como Vercel, Netlify, o GitHub Pages.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
