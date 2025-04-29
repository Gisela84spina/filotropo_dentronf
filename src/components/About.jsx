import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="relative py-20 px-6 bg-gray-950 text-white flex flex-col items-center justify-center">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/public/dnaBackground.mp4"
        />
      </div>

      {/* Fondo difuminado */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0"></div>

      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">

        {/* Contenido de texto */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:w-2/3 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block after:content-[''] after:block after:h-1 after:bg-red-500 after:w-16 after:mt-2">
            ¿Quién es Gise?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed">
            De naturaleza inquieta pero dedicada. Desde 2021 vengo explorando el 
            mundo del Desarrollo Web, estudiando diferentes tecnologías y lenguajes de 
            programación con una mezcla de curiosidad y obsesión por entender cómo funciona todo.
            <br /><br />
            Me apasiona crear experiencias visuales que conecten, comuniquen y, si pueden, sorprendan un poquito.
          </p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative text-red-500 italic mt-8 text-lg"
          >
            <span className="absolute text-5xl text-white/10 -left-6 -top-4 select-none">“</span>
            Más que programar, se trata de conectar, comprender e influir.
            <span className="absolute text-5xl text-white/10 -right-6 -bottom-4 select-none">”</span>
          </motion.blockquote>
        </div>

        {/* Sección de imágenes */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-8">

          {/* Foto profesional */}
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
            {/* Brillo hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 
            group-hover:opacity-100 transition-opacity duration-500 animate-shine rounded-full"></div>
          </motion.div>

          {/* Foto familiar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-xl shadow-red-400/40 mb-4">
              {/* Fondo desenfocado */}
              <img
                src="/flia.jpg"
                alt="Gise compartiendo un momento con su familia desenfocado"
                className="absolute inset-0 w-full h-full object-cover object-[30%_30%] blur-sm scale-110"
              />

              {/* Imagen nítida encima */}
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
    </section>
  );
}

export default About;
