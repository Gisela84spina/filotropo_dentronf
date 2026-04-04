import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';

const ProjectsSection = () => {
  const proyectos = [
    {
      title: "Sucule",
      description: "E-commerce desarrollado para un cliente real, con gestión dinámica de productos mediante Firebase y panel de administración mobile-first. Permite administrar el catálogo y concretar ventas a través de un flujo optimizado que integra carrito de compras y envío directo del pedido por WhatsApp, adaptado a negocios locales.",

      githubUrl: "https://github.com/Gisela84spina/tienda-sucule66",
      liveUrl: "https://tienda-sucule66.vercel.app/",
      imageUrl: "/sucule.png",
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
