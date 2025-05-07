

import { useState } from "react";
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

function MeAndTech() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative py-20 px-6 bg-black text-white">
      {/* Fondo en caso de que el video tarde en cargar */}
      {!videoReady && (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0" />
      )}

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        src="/dnaBackground.webm"
      />
      {/* Capa de blur encima del video */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-0" />

      {/* CONTENIDO: SOBRE MÍ */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 pb-24">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:w-2/3 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block after:content-[''] after:block after:h-1 after:bg-red-500 after:w-16 after:mt-2">
            ¿Quién es Gise?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            De naturaleza inquieta pero dedicada. Desde 2021 sumergida en el 
            mundo del Desarrollo Web, explorando tecnologías y lenguajes
            con una mezcla de curiosidad y pasión por entender cómo funciona todo.
            <br /><br />
            Me apasiona crear interfaces que no solo se vean bien, sino que
            comuniquen, conecten y -si pueden- sorprendan un poquito.
          </p>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative text-red-500 italic mt-8 text-lg"
          >
            <span className="absolute text-5xl text-white/10 -left-6 -top-4 select-none">“</span>
            Más que programar, se trata de comprender, resolver e influir.
            <span className="absolute text-5xl text-white/10 -right-6 -bottom-4 select-none">”</span>
          </motion.blockquote>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center gap-8">
          <motion.div
            className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg shadow-red-500/30 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            viewport={{ once: true }}
          >
            <img
              src="/gise.jpg"
              alt="Retrato profesional de Gise Spina"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 
              group-hover:opacity-100 transition-opacity duration-500 animate-shine rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-xl shadow-red-400/40 mb-4">
              <img
                src="/flia.jpg"
                alt="Gise compartiendo un momento con su familia desenfocado"
                className="absolute inset-0 w-full h-full object-cover object-[30%_30%] blur-sm scale-110"
              />
              <img
                src="/flia.jpg"
                alt="Gise compartiendo un momento con su familia"
                className="relative w-full h-full object-cover object-[30%_30%] 
                group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-xs text-sm italic text-white/80"
            >
              “Mamá, curiosa incansable y apasionada por la tecnología. Todo eso convive en mí y lo abrazo con orgullo.”
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* CONTENIDO: TECNOLOGÍAS */}
      <div id="tech" className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Tecnologías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
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
  );
}

export default MeAndTech;
