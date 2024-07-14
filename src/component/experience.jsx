import React from 'react';

const experiences = [
  {
    period: '2024 - Present',
    company: 'RoBenDevs',
    role: 'Software Engineer IV',
    description: '',
  },
  {
    period: '2023 - 2024',
    company: 'Miaki',
    role: 'Senior Software Engineer',
    description: 'I worked for Grameenphone as an augmented resource of Miaki. Within Grameenphone, I was a crucial part of the core Notification system and InApp team where I was actively involved in a significant sub-leadership capacity, contributing my skills to serve a customer base of millions. My role encompassed several crucial responsibilities, including system performance optimization, user experience enhancement, and close collaboration with a dynamic team to effectively address the ever-evolving communication requirements of the telecommunications industry. I also worked closely with the DevOps teams to facilitate seamless system deployment and management, ensuring the robustness and reliability of the Notification system.',
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg mt-8">
      <h2 className="text-3xl text-white mb-6">Experience And Education</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="text-gray-400 mr-4">{experience.period}</span>
              <h3 className="text-xl text-white">{experience.company}</h3>
            </div>
            <h4 className="text-lg text-gray-300">{experience.role}</h4>
            <p className="text-gray-400 mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;