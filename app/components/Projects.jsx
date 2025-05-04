'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Dynamic Portfolio Website',
      description: 'A modern, interactive portfolio website built with Next.js and React, featuring smooth animations, a PDF resume viewer, and a responsive design.',
      image: 'https://via.placeholder.com/500x300/1a365d/ffffff?text=Portfolio+Website',
      technologies: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/JairajKolhatkar',
      liveDemo: '#',
    },
    {
      id: 2,
      title: 'Air Quality Prediction',
      description: 'A Python-based machine learning model predicting pollution levels with 92% accuracy using Linear Regression, featuring comprehensive data analysis.',
      image: 'https://via.placeholder.com/500x300/1a365d/ffffff?text=Air+Quality+Prediction',
      technologies: ['Python', 'ML', 'Linear Regression', 'Data Analysis'],
      github: 'https://github.com/JairajKolhatkar',
      liveDemo: '#',
    },
    {
      id: 3,
      title: 'Engineering Job Prediction',
      description: 'Predicted job outcomes and college acceptance using advanced statistical methods and ML algorithms like XG Boost and TensorFlow/Keras.',
      image: 'https://via.placeholder.com/500x300/1a365d/ffffff?text=Job+Prediction',
      technologies: ['Python', 'TensorFlow', 'XG Boost', 'Data Visualization'],
      github: 'https://github.com/JairajKolhatkar',
      liveDemo: '#',
    },
    {
      id: 4,
      title: 'Online Resume Builder',
      description: 'Developed a Java-based resume builder with customizable templates, intuitive GUI, and one-click publishing to PDF and DOC formats using Jasper Reports.',
      image: 'https://via.placeholder.com/500x300/1a365d/ffffff?text=Resume+Builder',
      technologies: ['Java', 'JavaScript', 'CSS', 'Jasper Reports'],
      github: 'https://github.com/JairajKolhatkar',
      liveDemo: '#',
    },
    {
      id: 5,
      title: 'Interactive Blog Platform',
      description: 'A modern blog platform with dynamic content, user authentication, responsive design, and interactive features built with Next.js.',
      image: 'https://via.placeholder.com/500x300/1a365d/ffffff?text=Blog+Platform',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Authentication'],
      github: 'https://github.com/JairajKolhatkar',
      liveDemo: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleProjectHover = (id) => {
    setHoveredProject(id);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark/90 to-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents different challenges
            and learning experiences that have helped me grow as a developer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={handleProjectLeave}
              className="relative overflow-hidden rounded-xl shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
              </div>

              <div className="p-6 relative z-10 bg-dark/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-light mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      x: hoveredProject === project.id ? 0 : -10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium flex items-center group"
                    >
                      View Project 
                      <motion.span 
                        animate={{ x: hoveredProject === project.id ? [0, 5, 0] : 0 }}
                        transition={{ repeat: Infinity, duration: 1, repeatDelay: 0.5 }}
                        className="ml-2"
                      >
                        <FiArrowRight size={16} />
                      </motion.span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-300 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">View more projects on GitHub</span>
            <FiArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 