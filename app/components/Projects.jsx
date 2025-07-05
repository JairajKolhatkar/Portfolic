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
      title: 'TripPal - Interactive Travel Planner',
      description: '🌍 Interactive travel itinerary planner with drag-and-drop day blocks, time zone syncing, budget tracking, moodboards, and more. Plan trips with ease, style, and fun.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['JavaScript', 'Drag & Drop', 'API Integration', 'Responsive Design'],
      github: 'https://github.com/JairajKolhatkar/TripPal',
      liveDemo: 'https://github.com/JairajKolhatkar/TripPal',
    },
    {
      id: 2,
      title: 'Full-Stack Learning Platform',
      description: 'A comprehensive online learning platform built with MERN stack. Features course management, user authentication, progress tracking, and interactive learning modules.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
      github: 'https://github.com/JairajKolhatkar/learning-platform',
      liveDemo: 'https://github.com/JairajKolhatkar/learning-platform',
    },
    {
      id: 3,
      title: 'ML Placement Prediction System',
      description: 'Machine learning application predicting student admission and placement outcomes based on demographic attributes. Features custom model training and comprehensive data analysis.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'User Authentication'],
      github: 'https://github.com/JairajKolhatkar/Prediction-of-Placement-and-Admission-based-on-Demographic-Attributes',
      liveDemo: 'https://github.com/JairajKolhatkar/Prediction-of-Placement-and-Admission-based-on-Demographic-Attributes',
    },
    {
      id: 4,
      title: 'Airline Reservation System',
      description: 'Comprehensive airline reservation system with user authentication, flight search/booking, passenger management, and admin dashboard. Built with Java enterprise technologies.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Java Servlets', 'JSP', 'MySQL', 'Authentication'],
      github: 'https://github.com/JairajKolhatkar/Airline-Reservation-System',
      liveDemo: 'https://github.com/JairajKolhatkar/Airline-Reservation-System',
    },
    {
      id: 5,
      title: 'Modern Expense Tracker',
      description: 'Interactive expense tracking web application with Flask backend. Features expense management, payment method tracking, Indian currency support, and interactive charts.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Python Flask', 'SQLite', 'Charts.js', 'Responsive Design'],
      github: 'https://github.com/JairajKolhatkar/Expense_Tracker_Web',
      liveDemo: 'https://github.com/JairajKolhatkar/Expense_Tracker_Web',
    },
    {
      id: 6,
      title: 'Online Resume Builder',
      description: 'Modern web app for creating professional resumes with customizable templates, real-time preview, auto-save, and PDF export functionality.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['HTML', 'JavaScript', 'CSS', 'PDF Export'],
      github: 'https://github.com/JairajKolhatkar/Online-Resume-Builder',
      liveDemo: 'https://github.com/JairajKolhatkar/Online-Resume-Builder',
    },
    {
      id: 7,
      title: 'News Aggregator CLI App',
      description: 'CLI-based Indian News Aggregator that fetches headlines from multiple sources using NewsAPI. Features category filtering, source selection, and user-friendly menu interface.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Python', 'NewsAPI', 'CLI', 'Web Scraping'],
      github: 'https://github.com/JairajKolhatkar/News-Aggregator-CLI-App',
      liveDemo: 'https://github.com/JairajKolhatkar/News-Aggregator-CLI-App',
    },
    {
      id: 8,
      title: 'Full-Stack Blog Application',
      description: 'A modern blog application with Flask backend and React frontend. Features article management, user authentication, commenting system, and responsive design.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['React', 'Flask', 'JavaScript', 'RESTful API'],
      github: 'https://github.com/JairajKolhatkar/blog-app',
      liveDemo: 'https://github.com/JairajKolhatkar/blog-app',
    },
    {
      id: 9,
      title: 'Library Management System',
      description: 'Comprehensive library management system built with Java. Features book catalog management, member registration, lending/return operations, and administrative controls.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Java', 'Database Management', 'GUI', 'File Handling'],
      github: 'https://github.com/JairajKolhatkar/Library-Management-System',
      liveDemo: 'https://github.com/JairajKolhatkar/Library-Management-System',
    },
    {
      id: 10,
      title: 'College Website',
      description: 'Modern college website built with TypeScript featuring responsive design, course information, faculty details, and student portal integration.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['TypeScript', 'Responsive Design', 'Web Development', 'Modern UI'],
      github: 'https://github.com/JairajKolhatkar/Collage_Website',
      liveDemo: 'https://github.com/JairajKolhatkar/Collage_Website',
    },
    {
      id: 11,
      title: 'Python Practice Collection',
      description: 'A comprehensive collection of Python practice programs covering basic to intermediate concepts, including control structures, data structures, functions, OOP, and file handling.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
      github: 'https://github.com/JairajKolhatkar/Python_Practice',
      liveDemo: 'https://github.com/JairajKolhatkar/Python_Practice',
    },
    {
      id: 12,
      title: 'Current Portfolio Website',
      description: 'This modern, interactive portfolio website built with Next.js and React, featuring smooth animations, particle effects, PDF resume viewer, and responsive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/JairajKolhatkar/Portfolic',
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
              className="relative overflow-hidden rounded-xl shadow-xl group perspective-1000"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: "preserve-3d"
              }}
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