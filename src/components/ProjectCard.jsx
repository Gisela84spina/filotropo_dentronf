function ProjectCard({ title, description, link, imageUrl }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="rounded-xl mb-4" />
      )}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 my-2">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
        Ver proyecto →
      </a>
    </div>
  );
}

export default ProjectCard;
