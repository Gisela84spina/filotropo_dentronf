import React from 'react';
import Slider from 'react-slick';  
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from './ProjectCard';



const projectsData = [
  
  {
    title: 'E-commerce (Tienda Online)',
    description: 'Un proyecto de tienda online donde los usuarios pueden comprar productos.',
    link: '#',
    imageUrl: 'https://via.placeholder.com/400x200?text=E-commerce' // Imagen de ejemplo
  },
  {
    title: 'Próximo Proyecto',
    description: 'Descripción del próximo proyecto que quiero crear.',
    link: '#',
    imageUrl: 'https://via.placeholder.com/400x200?text=Próximo+Proyecto' // Imagen de ejemplo
  },
];

const ProjectsCarousel = () => {
  // Aquí es donde va la configuración de Slick
  const settings = {
    dots: true,          // Muestra los puntos de navegación
    infinite: true,      // Habilita el deslizamiento infinito
    speed: 500,          // Velocidad de la transición (en milisegundos)
    slidesToShow: 1,     // Número de proyectos a mostrar al mismo tiempo
    slidesToScroll: 1,   // Número de proyectos que se desplazan con cada transición
    autoplay: true,      // Hace que el carrusel avance automáticamente
    autoplaySpeed: 3000, // Velocidad de la transición automática (en milisegundos)
  };

  return (
    <div className="projects-carousel container mx-auto px-6 py-10">
      <h2 className="text-center text-4xl font-bold mb-12">Mis Proyectos</h2>
      {/* Aquí es donde le pasamos la configuración a Slider */}
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              imageUrl={project.imageUrl}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
