
import Header from './components/Header' ;
import About from './components/About' ;
import ProjectsSection from './components/ProjectsSection' ;
import ContactForm from './components/ContactForm' ;
import TechStack from './components/TechStack' ;




function App() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden px-4 py-8">

      <Header />
      <About />
      <TechStack /> 
      <ProjectsSection />
      <ContactForm />
      
      

      <footer className="text-center text-gray-500 mt-12">
        © 2025 Gise Spina. Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default App