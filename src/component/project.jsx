import React from 'react';
import vdo from "../assets/vdopromote.mp4"

const projects = [
  {
    title: 'Car E-commerce web application',
    tags: ['React.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
  },
];

const Project = () => {
  return (
    <section className=" text-white flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl mb-4 text-center">Project</h2>
        <div >
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <h3 className="text-xl mb-4">{project.title}</h3>
              <video src={vdo} autoPlay loop muted className="w-full h-auto mb-4 rounded"></video>
              <div className="mt-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="inline-block bg-gray-600 rounded-full px-2 py-1 text-xs font-semibold text-white mr-2">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
