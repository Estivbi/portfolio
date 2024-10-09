import React, { useState } from 'react';
import ExpandableCard from './ExpandableCard';
import HoloCard from './HoloCard';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const projects = [
    { 
      title: 'Proyecto 1', 
      date: '2022 - present',
      content: 'Este proyecto es una aplicación web fullstack que utiliza React para el frontend, Node.js para el backend y MongoDB como base de datos. Implementa autenticación de usuarios, un panel de administración y funcionalidades CRUD.'
    },
    { 
      title: 'Proyecto 2', 
      date: '2021 - 2022',
      content: 'Desarrollé una aplicación móvil multiplataforma utilizando React Native y Firebase. La app incluye notificaciones push, almacenamiento en la nube y sincronización en tiempo real entre dispositivos.'
    },
    { 
      title: 'Proyecto 3', 
      date: '2020 - 2021',
      content: 'Creé un sitio web estático de alto rendimiento utilizando Next.js y Tailwind CSS. El sitio incluye generación de páginas estáticas, optimización de imágenes y está desplegado en Vercel para un rendimiento óptimo.'
    },
  ];

  const experiences = [
    {
      title: 'Desarrollador Senior',
      date: '2022 - present',
      content: 'Lideré un equipo de desarrollo en la creación de aplicaciones web escalables. Implementé arquitecturas serverless y optimicé el rendimiento de aplicaciones existentes.'
    },
    {
      title: 'Desarrollador Full Stack',
      date: '2020 - 2022',
      content: 'Desarrollé y mantuve múltiples aplicaciones web utilizando Vue.js en el frontend y Express con PostgreSQL en el backend. Implementé CI/CD y mejoré los tiempos de carga en un 40%.'
    },
    {
      title: 'Desarrollador Frontend',
      date: '2018 - 2020',
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

      <ul className="grid justify-center grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-24 w-fit self-center">
        {(activeSection === 'projects' ? projects : experiences).map((item, index) => (
          <HoloCard key={index} title={item.title} date={item.date} content={item.content}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </HoloCard>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;