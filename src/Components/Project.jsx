import { motion } from "framer-motion";
import { useState } from "react";
import { PROJECTS } from "../constants";

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        className="my-20 text-center text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center relative"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="w-full lg:w-1/4 flex items-center justify-center relative">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded-full"
                />
                {hoveredProject === index && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white rounded-full">
                    <span className="text-lg">Click me</span>
                  </div>
                )}
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-xl text-purple-500">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.title}
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 mb-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full px-3 py-1 text-sm font-semibold hover:scale-110 transition duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
