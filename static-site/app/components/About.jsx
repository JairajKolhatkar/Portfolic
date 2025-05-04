'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiLayers, FiDatabase, FiAward } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skills = [
    {
      icon: <FiCode size={30} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with HTML, CSS, JavaScript, and modern frameworks',
    },
    {
      icon: <FiDatabase size={30} />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs using Python, Java, Node.js, and SQL',
    },
    {
      icon: <FiLayers size={30} />,
      title: 'Data Science',
      description: 'Implementing machine learning algorithms for classification, regression, and NLP using Python libraries',
    },
    {
      icon: <FiUsers size={30} />,
      title: 'Database Management',
      description: 'Working with SQL and NoSQL databases including MySQL, MongoDB, and SQL Lite',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark to-dark/90">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={variants} 
            className="text-3xl md:text-4xl font-bold text-light mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={variants}
            className="w-20 h-1 bg-primary mx-auto mb-8"
          />
          <motion.p 
            variants={variants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            I'm a passionate Software Engineer focused on creating elegant solutions to complex problems. 
            With a strong foundation in programming languages such as Java, Python, and JavaScript, I strive 
            to build applications that are not only functional but also delightful to use.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-light mb-4">My Journey</h3>
            <p className="text-gray-300 mb-6">
              I graduated with a degree in Computer Science and Engineering from Prof Ram Meghe College of Engineering & Management, 
              Amravati, India in June 2023. My passion for programming began during my college years, where I discovered the power of 
              creating software that solves real-world problems.
            </p>
            <p className="text-gray-300">
              I enjoy the challenge of building clean, efficient, and scalable applications. Whether it's 
              crafting user interfaces, designing database schemas, or implementing machine learning models, 
              I approach each aspect with equal enthusiasm and attention to detail.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                className="bg-dark/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-colors duration-300"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(14, 165, 233, 0.05)' }}
              >
                <div className="text-primary mb-3">{skill.icon}</div>
                <h4 className="text-lg font-semibold text-light mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-dark/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl"
        >
          <div className="flex items-center mb-6">
            <FiAward size={28} className="text-primary mr-3" />
            <h3 className="text-2xl font-semibold text-light">Achievements</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20 flex-1"
            >
              <h4 className="text-xl font-bold text-light mb-3">Smart India Hackathon (SIH) 2022 Winner</h4>
              <p className="text-gray-300 mb-3">
                Organized by AICTE and MoE's Innovation Cell (Government of India) for students to solve daily
                life problems, inculcating a culture of product innovation and problem-solving mindset.
              </p>
              <div className="flex items-center">
                <span className="text-primary font-medium text-sm mr-2">Achievement:</span>
                <span className="text-gray-300 text-sm">Created innovative solutions to real-world challenges</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary to-secondary">
            <button className="bg-dark hover:bg-dark/80 text-light font-medium px-8 py-3 rounded-full transition-colors">
              Download Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 