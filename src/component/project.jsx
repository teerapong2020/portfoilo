import React from "react";
import vdo from "../assets/vdopromote.mp4";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Car E-commerce web application",
    tags: ["React.js", "MongoDB", "Express.js", "Tailwind CSS"],
  },
];

const Project = () => {
  const [show, setShow] = useState(true);
  return (
    <section className=" text-white flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl mb-4 text-center">Project</h2>
        {/* container show  */}
        <div
        className=" relative"
          onMouseEnter={() => setShow(false)}
          onMouseLeave={() => setShow(true)}
        >

          {projects.map((project, index) => (
            <div>
              <div key={index} className="bg-gray-800 p-4 rounded">
                <h3 className="text-xl mb-4">{project.title}</h3>
                <video
                  src={vdo}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto mb-4 rounded"
                ></video>
                <div className="mt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-600 rounded-full px-2 py-1 text-xs font-semibold text-white mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
             {show ? null : <div 
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
           <div className="flex gap-8 ">
           <Link to={"https://github.com/Eggplant-Samurai"}>
           <FaGithub size={50} className=" opacity-50 hover:opacity-100"/>
           </Link>
           <Link to={"https://roodeeth.vercel.app/"}>
           <TbWorld size={50} className=" opacity-50 hover:opacity-100"/>
           </Link>
           
            </div>
            </div>}
        </div>
      </div>
    </section>
  );
};

export default Project;
