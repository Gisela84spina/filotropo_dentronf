
import Header from './components/Header' ;
import About from './components/About' ;
import ProjectsSection from './components/ProjectsSection' ;
import ContactForm from './components/ContactForm' ;
import SkillsSection from './components/SkillsSection' ;
import TechStack from './components/TechStack';



function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      <About />
      <SkillsSection /> 
      <ProjectsSection />
      <ContactForm />
      <TechStack />
      

      <footer className="text-center text-gray-500 mt-12">
        © 2025 Gise Spina. Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default App