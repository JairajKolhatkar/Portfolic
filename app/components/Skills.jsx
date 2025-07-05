'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeCategory, setActiveCategory] = useState('languages');
  
  const categories = [
    { id: 'languages', label: 'Programming Languages' },
    { id: 'frontend', label: 'Frontend Technologies' },
    { id: 'backend', label: 'Backend & Database' },
    { id: 'tools', label: 'Tools & Technologies' },
  ];
  
  const skills = {
    languages: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
    ],
    frontend: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Framer Motion', level: 75 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Modern UI/UX', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'Flask', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 85 },
      { name: 'SQLite', level: 80 },
    ],
    tools: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'Machine Learning', level: 80 },
      { name: 'Data Analysis', level: 75 },
      { name: 'Authentication Systems', level: 80 },
      { name: 'Web Scraping', level: 75 },
    ],
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark to-dark/90">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've acquired a diverse range of technical skills throughout my journey as a developer. 
            Here's a snapshot of my capabilities across multiple domains.
          </p>
        </motion.div>
        
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-dark/50 text-gray-300 hover:bg-dark/70'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
          
          <div className="bg-dark/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {skills[activeCategory].map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  variants={skillVariants}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-light font-medium">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-dark/70 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Completed', value: '12+' },
            { label: 'Technologies Used', value: '20+' },
            { label: 'GitHub Repositories', value: '16+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
              className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(14, 165, 233, 0.05)' }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 