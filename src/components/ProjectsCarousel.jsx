import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectsCarousel = ({ proyectos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Slider {...settings}>
        {proyectos.map((proyecto, index) => (
          <div key={index} className="px-2">
            <ProjectCard
              title={proyecto.title}
              description={proyecto.description}
              githubUrl={proyecto.githubUrl}
              liveUrl={proyecto.liveUrl}
              imageUrl={proyecto.imageUrl}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
