import React from 'react';

const projects = [
  {
    title: 'GitProfile',
    description: 'Create and deploy a dynamic portfolio by just providing your GitHub username.',
    tags: ['React.js', 'JavaScript'],
   
  },
  
];

const Project = () => {
  return (
    <section className="bg-gray-800 text-white p-8">
      <h2 className="text-2xl mb-4">Open Source Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded">
            <h3 className="text-xl">{project.title}</h3>
            <p>{project.description}</p>
            <div className="mt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="inline-block bg-gray-600 rounded-full px-2 py-1 text-xs font-semibold text-white mr-2">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
