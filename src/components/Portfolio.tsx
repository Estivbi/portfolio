import React, { useState } from 'react';
import ExpandableCard from './ExpandableCard';
import ThreeDImage from './ThreeDImage';
import { FaArrowRight } from 'react-icons/fa';
import Card from './Card';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isCardExpanded, setIsCardExpanded] = useState(false); 

  const projects = [
    { 
      title: 'Cuenta atrás', 
      date: '2024',
      content: `
      Este proyecto es una página web para practicar con Astro y React desarrollada por Carolina Rodríguez. La página muestra un contador que, cuando finaliza, enseña el regalo que contiene. También tiene un calendario que, cuando se selecciona una fecha, se guarda en la base de datos.
      `,
      image: 'public/web-cuentaatras.webp',
      link: 'https://cuenta-atras-cumple.netlify.app/',
      technologies: [
        'TypeScript',
        'React',
        'Node.js',
        'PostgreSQL',
        'Astro.js',
        'Tailwind CSS',
        'Axios',
        'Express.js',
        'Cors',
      ]
    },
    { 
      title: 'Portfolio', 
      date: '2024',
      content: `
      Este proyecto es un portfolio personal desarrollado utilizando Astro, un moderno generador de sitios estáticos.
      `,
      image: 'public/portfolio.jpg',
      link: 'https://carolinarodriguez.netlify.app/',
      technologies: [
        'TypeScript',
        'React',
        'Astro.js',
        'Tailwind CSS',
      ]
    },
    {
      title: 'Me Asesoran Rentas', 
      date: '2023',
      content: `
      Este proyecto es un portfolio personal desarrollado utilizando Astro, un moderno generador de sitios estáticos.
      `,
      image: 'public/project-measesoran-rentas.ng1TKtpA_Z1xqR3.webp',
      link: 'https://rentas.measesoran.com/login',
      technologies: [
        'TypeScript',
        'React',
        'Node.js',
        'PostgreSQL',
        'Docker',
        'Git',
        'API REST',
      ]
    }
  ];

  const experiences = [
    {
      title: 'FullStack Developer en Me Asesoran',
      date: '2023',
      content: `
        > Actualmente desarrollo diversas funcionalidades para la plataforma principal, abarcando tanto tecnologías backend como frontend, que dan servicio a miles de usuarios.
        
        > Trabajo en conjunto con el equipo de producto para comprender los requisitos y necesidades de los usuarios, asegurándome de que las nuevas funcionalidades cumplan con sus expectativas y mejoren la experiencia del usuario.
        
        > Además, me encargo actualmente de realizar todo el testeo de la aplicación, asegurando su correcto funcionamiento antes de cada lanzamiento.
        
        > En los próximos meses, asumiré la responsabilidad de diseñar parte del frontend y también trabajaré en el desarrollo de la versión móvil, lo que mejorará aún más la accesibilidad y funcionalidad para los usuarios.
        
        > Me Asesoran Rentas, es un producto innovador que facilita la presentación de declaraciones fiscales a través de la integración con la API del gobierno español, asegurando la autenticación y validación de datos por asesores fiscales.
      `,
      image: '/measesoran.png',
      link: 'https://rentas.measesoran.com/login',
      technologies: [
        'TypeScript',
        'React',
        'Node.js',
        'PostgreSQL',
        'Docker',
        'Git',
        'API REST',
      ]
    },
    /* agregar mas experiencias */
  ];

  const handleSectionClick = (section: string) => {
    if (section === 'about') {
      setIsCardExpanded(!isCardExpanded); // Alternar el estado de expansión de la tarjeta
      setActiveSection(isCardExpanded ? '' : section); // Alternar la sección activa
    } else {
      setActiveSection(section);
      setIsCardExpanded(false); // Cerrar la tarjeta si se selecciona otra sección
    }
  };

  return (
    <div className="relative z-10 p-8 max-w-6xl mx-auto">
      <section className="about-me mb-12 text-center">
        <div className="flex flex-col items-center">
          <ThreeDImage src="/me.jpg" alt="foto de mi perfil"/>
        </div>
      </section>

      <nav className="mb-8 flex justify-center space-x-4">
        <button
          onClick={() => handleSectionClick('about')}
          className={`px-4 py-2 rounded-full border-2 border-gradient transition-transform duration-300 ${
            activeSection === 'about'
              ? 'transform scale-105 shadow-2xl'
              : 'hover:transform hover:scale-105 hover:shadow-2xl'
          }`}
        >
          <span className="title transition-transform duration-300 hover:scale-110">Sobre mí</span>
        </button>
        <button
          onClick={() => setActiveSection('experience')}
          className={`px-4 py-2 rounded-full border-2 border-gradient transition-transform duration-300 ${
            activeSection === 'experience'
              ? 'transform scale-105 shadow-2xl'
              : 'hover:transform hover:scale-105 hover:shadow-2xl'
          }`}
        >
          <span className="title transition-transform duration-300 hover:scale-110">Experiencia</span>
        </button>
        <button
          onClick={() => setActiveSection('projects')}
          className={`px-4 py-2 rounded-full border-2 border-gradient transition-transform duration-300 ${
            activeSection === 'projects'
              ? 'transform scale-105 shadow-2xl'
              : 'hover:transform hover:scale-105 hover:shadow-2xl'
          }`}
        >
          <span className="title transition-transform duration-300 hover:scale-110">Proyectos</span>
        </button>
      </nav>

      {activeSection === 'about' && (
        <div className="p-8">
          <Card>
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
                    ML/AI
                  </li>
                </ul>
                <p>
                  Creo firmemente que la tecnología, y en especial el software, tiene el poder de mejorar el mundo. Por eso, siempre estoy buscando proyectos que marquen una diferencia y que me permitan poner toda mi dedicación, esfuerzo y pasión.
                </p>
              </div>
            </section>
          </Card>
        </div>
      )}

      {(activeSection === 'projects' || activeSection === 'experience') && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {(activeSection === 'projects' ? projects : experiences).map((item, index) => (
            <div key={index} className="relative">
              <ExpandableCard
                title={item.title}
                date={item.date}
                content={item.content}
                image={item.image}
                link={item.link}
                technologies={item.technologies || []}
                children={undefined}
                onClick={() => { } } isExpanded={false}    
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Portfolio;