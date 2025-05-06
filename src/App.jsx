
import Header from './components/Header' ;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Footer from './components/Footer';

import ProjectsSection from './components/ProjectsSection' ;
import ContactForm from './components/ContactForm' ;
import MeAndTech from './components/MeAndTech' ;




function App() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden px-4 py-8">

      <Header />
      <MeAndTech />
      <ProjectsSection />
      <ContactForm />
      <Footer/>
      
    </div>
  )
}

export default App