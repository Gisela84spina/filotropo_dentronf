import { useState } from "react";

function Header() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <header className="relative h-screen overflow-hidden bg-black">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoReady(true)}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/dnaBackground.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Loader con láser */}
      {!videoReady && (
        <div className="absolute top-0 left-0 w-full h-full bg-black z-20 
        flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="laser-line w-full h-1 bg-red-600 shadow-red 
            animate-laser" />
          </div>
        </div>
      )}

      {/* Contenido principal */}
      {videoReady && (
        <div className="relative z-10 flex flex-col items-center justify-center 
        h-full text-white bg-black/50 px-4 text-center">
          <h1
            className="relative text-3xl sm:text-4xl md:text-5xl font-bold 
            glitch-text px-2"
            data-text="Hola, soy Gise Spina"
          >
            Hola, soy Gise Spina
          </h1>

          <p className="text-base sm:text-lg md:text-xl mt-4">
            Desarrolladora Front-End
          </p>

          <a href="#about">
            <button className="mt-6 px-6 py-3 sm:px-8 sm:py-3 bg-red-600
             text-white font-semibold rounded-full hover:bg-red-700 
             transition text-sm sm:text-base">
              Conoceme
            </button>
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
