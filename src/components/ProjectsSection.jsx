import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';

const ProjectsSection = () => {
  const proyectos = [
    {
      title: "G-commerce",
      description: "G-commerce hecho con React, Vite, Tailwind y deploy en Vercel.",
      githubUrl: "https://github.com/Gisela84spina/G-commerce",
      liveUrl: "https://g-commerce-five.vercel.app",
      imageUrl: "/public/G-commerce.png",
    },
    {
      title: "Radar-Policial",
      description: "App con geolocalización en tiempo real para detectar operativos policiales en Junín. Hecha con React, Leaflet, Tailwind e IA simulada.",
      githubUrl: "https://github.com/Gisela84spina/radar-policial",
      liveUrl: "https://radar-policial.vercel.app",
      imageUrl: "/public/Radar-Policial.png",
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
