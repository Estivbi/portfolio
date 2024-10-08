import React, { useState } from 'react';
import ExpandableCard from './ExpandableCard';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const projects = [
    { 
      title: 'Proyecto 1', 
      description: 'Una aplicación web fullstack', 
      tags: ['React', 'Node.js', 'MongoDB'],
      content: 'Este proyecto es una aplicación web fullstack que utiliza React para el frontend, Node.js para el backend y MongoDB como base de datos. Implementa autenticación de usuarios, un panel de administración y funcionalidades CRUD.'
    },
    { 
      title: 'Proyecto 2', 
      description: 'Una app móvil multiplataforma', 
      tags: ['React Native', 'Firebase'],
      content: 'Desarrollé una aplicación móvil multiplataforma utilizando React Native y Firebase. La app incluye notificaciones push, almacenamiento en la nube y sincronización en tiempo real entre dispositivos.'
    },
    { 
      title: 'Proyecto 3', 
      description: 'Un sitio web estático', 
      tags: ['Next.js', 'Tailwind CSS'],
      content: 'Creé un sitio web estático de alto rendimiento utilizando Next.js y Tailwind CSS. El sitio incluye generación de páginas estáticas, optimización de imágenes y está desplegado en Vercel para un rendimiento óptimo.'
    },
  ];

  const experiences = [
    {
      title: 'Desarrollador Senior',
      description: 'TechCorp Inc.',
      tags: ['React', 'Node.js', 'AWS'],
      content: 'Lideré un equipo de desarrollo en la creación de aplicaciones web escalables. Implementé arquitecturas serverless y optimicé el rendimiento de aplicaciones existentes.'
    },
    {
      title: 'Desarrollador Full Stack',
      description: 'StartUp Innovations',
      tags: ['Vue.js', 'Express', 'PostgreSQL'],
      content: 'Desarrollé y mantuve múltiples aplicaciones web utilizando Vue.js en el frontend y Express con PostgreSQL en el backend. Implementé CI/CD y mejoré los tiempos de carga en un 40%.'
    },
    {
      title: 'Desarrollador Frontend',
      description: 'DesignTech Solutions',
      tags: ['React', 'Redux', 'Sass'],
      content: 'Creé interfaces de usuario responsivas y accesibles utilizando React y Redux. Colaboré estrechamente con diseñadores UX/UI para implementar diseños pixel-perfect.'
    }
  ];

  return (
    <div className="relative z-10 p-8">
      <nav className="mb-8">
        <button
          onClick={() => setActiveSection('projects')}
          className={`mr-4 px-4 py-2 rounded ${activeSection === 'projects' ? 'bg-gray-700' : 'bg-transparent'}`}
        >
          Proyectos
        </button>
        <button
          onClick={() => setActiveSection('experience')}
          className={`px-4 py-2 rounded ${activeSection === 'experience' ? 'bg-gray-700' : 'bg-transparent'}`}
        >
          Experiencia
        </button>
      </nav>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSection === 'projects'
            ? projects.map((project, index) => (
                <ExpandableCard key={index} {...project} />
              ))
            : experiences.map((experience, index) => (
                <ExpandableCard key={index} {...experience} />
              ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;