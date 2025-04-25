const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Design"
  ]
  
  const SkillsSection = () => {
    return (
      <section id="skills" className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Tecnologías</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-300 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }
  
  export default SkillsSection
  