import React from "react";

const experiences = [
  {
    period: "Jan 2024 - Present",
    company: "Generation Thailand",
    role: "leaner Juinor Software Develor(Bootcamp)",
    description: "",
  },
  {
    period: "Dec 2023 - Jul 2024",
    company: "Bangkok Bank",
    role: "Relationship Ofticer (SME)",
    description:
      "-Coordinated with various internal and external departments to ensure customer requests were processed. Drafted loan agreements in accordance with company guidelines. And built and maintained good relationships with both new and existing customers.",
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg mt-8">
      <h2 className="text-3xl text-white mb-6 flex justify-center">Experience</h2>
      <div className="space-y-6 w-1/2 mx-auto">
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
