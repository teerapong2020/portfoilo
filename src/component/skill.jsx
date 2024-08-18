import React from 'react';
import { FaHtml5, FaCss3Alt, FaNode } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const skills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
  { name: 'React.js', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
  { name: 'Node.js', icon: FaNode },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
  { name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png' },
  { name: 'Tailwind', icon: RiTailwindCssFill },
];

const Skills = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg  ">
      <h2 className="text-3xl text-white mb-6 flex justify-center ">Skills</h2>
      <div className="grid grid-cols-3 gap-6 w-1/2 mx-auto 	">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex items-center justify-center hover:bg-slate-500"
          >
            {typeof skill.icon === 'string' ? (
              <img src={skill.icon}  className="h-12 w-12" />
            ) : (
              <skill.icon className="h-12 w-12 text-white" />
            )}
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
