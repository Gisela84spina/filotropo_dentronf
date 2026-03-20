import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';

const ProjectsSection = () => {
  const proyectos = [
    {
      title: "G-commerce",
      description: "E-commerce desarrollado con React, Vite y Tailwind. Implementa carrito de compras, renderizado dinámico de productos y manejo de estado global. Integración con Firebase para persistencia de datos y despliegue en Vercel.",
      githubUrl: "https://github.com/Gisela84spina/G-commerce",
      liveUrl: "https://g-commerce-five.vercel.app",
      imageUrl: "/G-commerce.png",
    },
    { 
      title: "Radar-Policial",
      description: "Aplicación web con geolocalización en tiempo real para visualizar operativos policiales. Desarrollada con React y Leaflet, implementa renderizado dinámico de mapas, manejo de estado y simulación de detección mediante lógica de IA. Enfocada en interacción en tiempo real y experiencia de usuario.",
      githubUrl: "https://github.com/Gisela84spina/radar-policial",
      liveUrl: "https://radar-policial.vercel.app",
      imageUrl: "/Radar-Policial.png",
    }
  ];
 return (
    <section
    
    id="projects"
    className="py-16 px-4 bg-gradient-to-b from-[#0f172a] via-[#0f766e] to-black"

    >
  
    <h2 className="text-4xl font-bold text-center text-white mb-12">
       Mis Proyectos
    </h2>
    <ProjectsCarousel proyectos={proyectos} />
    </section>
  );
};

export default ProjectsSection;
