import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  const proyectos = [
    {
      title: "Portfolio Web",
      description: "Portfolio hecho con React, Vite, Tailwind y deploy en Vercel.",
      githubUrl: "https://github.com/Gisela84spina/filotropo_dentronf",
      liveUrl: "https://filotropo-dentronf.vercel.app",
      imageUrl: "/images/portfolio-preview.png"
    },
    {
      title: "Proyecto 2",
      description: "Otro proyecto interesante que hiciste.",
      githubUrl: "https://github.com/tuusuario/proyecto2",
      liveUrl: "https://proyecto2.vercel.app",
      imageUrl: "/images/proyecto2-preview.png"
    }
  ]

  return (
    <section id="projects" className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            title={proyecto.title}
            description={proyecto.description}
            githubUrl={proyecto.githubUrl}
            liveUrl={proyecto.liveUrl}
            imageUrl={proyecto.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection