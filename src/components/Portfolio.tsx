import React, { useState } from 'react';
import HoloCard from './HoloCard';
import ExpandableCard from './ExpandableCard';
import ThreeDImage from './ThreeDImage';
import { FaArrowRight } from 'react-icons/fa';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    { 
      title: 'Proyecto 1', 
      date: '2022 - present',
      content: 'Este proyecto es una aplicación web fullstack que utiliza React para el frontend, Node.js para el backend y MongoDB como base de datos. Implementa autenticación de usuarios, un panel de administración y funcionalidades CRUD.',
      image: '/placeholder.svg?height=200&width=300'
    },
    { 
      title: 'Proyecto 2', 
      date: '2021 - 2022',
      content: 'Desarrollé una aplicación móvil multiplataforma utilizando React Native y Firebase. La app incluye notificaciones push, almacenamiento en la nube y sincronización en tiempo real entre dispositivos.',
      image: 'public/car.png'
    },
    { 
      title: 'Proyecto 3', 
      date: '2020 - 2021',
      content: 'Creé un sitio web estático de alto rendimiento utilizando Next.js y Tailwind CSS. El sitio incluye generación de páginas estáticas, optimización de imágenes y está desplegado en Vercel para un rendimiento óptimo.',
      image: '/placeholder.svg?height=200&width=300'
    },
  ];

  const experiences = [
    {
      title: 'Desarrollador Senior',
      date: '2022 - present',
      content: 'Lideré un equipo de desarrollo en la creación de aplicaciones web escalables. Implementé arquitecturas serverless y optimicé el rendimiento de aplicaciones existentes.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      title: 'Desarrollador Full Stack',
      date: '2020 - 2022',
      content: 'Desarrollé y mantuve múltiples aplicaciones web utilizando Vue.js en el frontend y Express con PostgreSQL en el backend. Implementé CI/CD y mejoré los tiempos de carga en un 40%.',
      image: '/placeholder.svg?height=200&width=300'
    },
    {
      title: 'Desarrollador Frontend',
      date: '2018 - 2020',
      content: 'Creé interfaces de usuario responsivas y accesibles utilizando React y Redux. Colaboré estrechamente con diseñadores UX/UI para implementar diseños pixel-perfect.',
      image: '/placeholder.svg?height=200&width=300'
    }
  ];

  return (
    <div className="relative z-10 p-8 max-w-6xl mx-auto">
      <section className="about-me mb-12 text-center">
        <div className="flex flex-col items-center">
          <ThreeDImage src="/car.png" alt="Car Image"/>
        </div>
      </section>

      <nav className="mb-8 flex justify-center">
        <button
          onClick={() => setActiveSection('about')}
          className={`mr-4 px-4 py-2 rounded ${activeSection === 'about' ? 'bg-gray-700' : 'bg-transparent'}`}
        >
          Sobre mí
        </button>
        <button
          onClick={() => setActiveSection('experience')}
          className={`px-4 py-2 rounded ${activeSection === 'experience' ? 'bg-gray-700' : 'bg-transparent'}`}
        >
          Experiencia
        </button>
        <button
          onClick={() => setActiveSection('projects')}
          className={`mr-4 px-4 py-2 rounded ${activeSection === 'projects' ? 'bg-gray-700' : 'bg-transparent'}`}
        >
          Proyectos
        </button>
      </nav>

      {activeSection === 'about' && (
        <section className="about-content mt-8">
        <div className="text-justify max-w-2xl mx-auto space-y-4">
          <p>
            ¡Hola! Mi nombre es Carolina y soy desarrolladora. Siempre he tenido una gran curiosidad por la tecnología. Desde pequeña, los videojuegos fueron una gran pasión para mí, y títulos como The Legend of Zelda despertaron en mí la inquietud por descubrir cómo funcionaban las aplicaciones y los ordenadores.
          </p>
          <p>
            Me especializo en diversas áreas del desarrollo de software, incluyendo:
          </p>
          <ul className="list-none ml-4">
          <li className="flex items-center">
            <FaArrowRight className="mr-2 transition-transform duration-300 transform hover:translate-x-2" />
            Desarrollo web
          </li>
          <li className="flex items-center">
            <FaArrowRight className="mr-2 transition-transform duration-300 transform hover:translate-x-2" />
            Desarrollo backend
          </li>
          <li className="flex items-center">
            <FaArrowRight className="mr-2 transition-transform duration-300 transform hover:translate-x-2" />
            Desarrollo móvil
          </li>
          <li className="flex items-center">
            <FaArrowRight className="mr-2 transition-transform duration-300 transform hover:translate-x-2" />
            Machine Learning / Inteligencia Artificial
          </li>
        </ul>
          <p>
            Creo firmemente que la tecnología, y en especial el software, tiene el poder de mejorar el mundo. Por eso, siempre estoy buscando proyectos que marquen una diferencia y que me permitan poner toda mi dedicación, esfuerzo y pasión.
          </p>
        </div>
      </section>
      )}

      {(activeSection === 'projects' || activeSection === 'experience') && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {(activeSection === 'projects' ? projects : experiences).map((item, index) => (
            <HoloCard
              key={index}
              title={item.title}
              date={item.date}
              content={item.content}
              image={item.image} // Pasamos la prop image
              children={undefined}          
              >
          </HoloCard>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Portfolio;