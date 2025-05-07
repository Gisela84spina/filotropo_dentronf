import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';

const ProjectsSection = () => {
  const proyectos = [
    {
      title: "E-commerce",
      description: "E-commerce hecho con React, Vite, Tailwind y deploy en Vercel.",
      githubUrl: "https://github.com/Gisela84spina/filotropo_dentronf",
      liveUrl: "https://filotropo-dentronf.vercel.app",
      imageUrl: "/images/portfolio-preview.png"
    },
    {
      title: "Proyecto 2",
      description: "Otro proyecto interesante que hice.",
      githubUrl: "https://github.com/tuusuario/proyecto2",
      liveUrl: "https://proyecto2.vercel.app",
      imageUrl: "/images/proyecto2-preview.png"
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
