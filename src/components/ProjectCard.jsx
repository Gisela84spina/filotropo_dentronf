import React from 'react';

const ProjectCard = ({ title, description, githubUrl, liveUrl, imageUrl }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/10 text-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="mb-4 text-sm text-gray-300">{description}</p>
        <div className="flex justify-between items-center text-sm font-medium">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Ver online
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
