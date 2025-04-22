
import './App.css';
import Header from './components/Header' ;
import About from './components/About' ;
import ContactForm from './components/ContactForm' ;
import ProjectCard from './components/ProjectCard' ;

function App() {
  const proyectos = [
    {
      title: "Proyecto 1",
      description: "Descripción breve del proyecto.",
      link: "https://github.com/tuusuario/proyecto1"
    },
    {
      title: "Proyecto 2",
      description: "Otro proyecto interesante que hiciste.",
      link: "https://github.com/tuusuario/proyecto2"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />

      <section className="my-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <ProjectCard
              key={index}
              title={proyecto.title}
              description={proyecto.description}
              link={proyecto.link}
            />
          ))}
        </div>
      </section>

      <About />
      <ContactForm />

      <footer className="text-center text-gray-500 mt-12">
        © 2025 [Tu Nombre]. Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default App