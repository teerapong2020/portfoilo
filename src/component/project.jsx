import React, { useState } from "react";
import vdocar from "../assets/vdopromote.mp4"
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Car E-commerce web application",
    tags: ["React.js", "MongoDB", "Express.js", "Tailwind CSS"],
    trailer: [vdocar],
    github: "https://github.com/Eggplant-Samurai",
    web: "https://roodeeth.vercel.app/",
  },

];

const Project = () => {
  const [show, setShow] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) =>
        prev === 0 ? projects.length - 1 : prev - 1
      );
    };

  return (
    <>
     <h2 className="text-3xl mb-4 text-center text-white animate-fadeIn">Project</h2>
    <section className="text-white flex items-center justify-center animate-fadeIn">
    <button
          onClick={prevSlide}
          className="relative top-2 md:right-3  transform -translate-y-1/2 text-white text-5xl "
        >
          ❮
        </button>
      <div  className="relative md:w-1/2 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative min-w-full"
              onMouseEnter={() => setShow(index)}
              onMouseLeave={() => setShow(null)}
            >
              <div className="bg-gray-800 p-4 rounded my-4 ">
                <h3 className="text-xl mb-4">{project.title}</h3>
                <video
                  src={project.trailer}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto mb-4 rounded"
                    preload="metadata"
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
                {/* container show */}
                {show === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                    <div className="flex gap-8">
                      <Link to={project.github} target="_blank">
                        <FaGithub size={50} className="opacity-50 hover:opacity-100" />
                      </Link>
                      <Link to={project.web} target="_blank">
                        <TbWorld size={50} className="opacity-50 hover:opacity-100" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
            </div>
    
      
      </div>
   
        <button
          onClick={nextSlide}
          className=" relative top-2 md:left-4 transform -translate-y-1/2 text-white text-5xl  "
        >
          ❯
        </button>
    </section>
    </>
  );
};

export default Project;
