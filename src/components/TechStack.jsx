import { useState } from "react"; // 🔥 AGREGAMOS ESTO
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const techs = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

function TechStack() {
  const [videoReady, setVideoReady] = useState(false); // 🔥 NUEVO: para saber si el video cargó

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      
      {/* Fallback: fondo de color mientras carga el video */}
      {!videoReady && (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black z-0" />
      )}

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoReady(true)} // 🔥 cuando el video esté listo, desaparece el fallback
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/dnaBackground.webm" type="video/webm" />
        Tu navegador no soporta el video.
      </video>

      {/* Contenido */}
      <section id="tech" className="py-20 px-6 bg-black/60 text-white relative z-10 backdrop-blur-md">

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Tecnologías </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-3 bg-white/10 p-6 rounded-xl shadow hover:scale-105 transition transform backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl">{tech.icon}</div>
                <p className="text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default TechStack;
