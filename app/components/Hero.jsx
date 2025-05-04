'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const calculateRotation = (x, y) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const rotateX = (y - windowHeight / 2) / 50;
    const rotateY = -(x - windowWidth / 2) / 50;
    
    return { x: rotateX, y: rotateY };
  };
  
  const rotation = calculateRotation(mousePosition.x, mousePosition.y);
  
  // Typing animation
  const [text, setText] = useState('');
  const fullText = "I'm a Developer";
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!reverse && index < fullText.length) {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      } else if (!reverse && index === fullText.length) {
        setReverse(true);
        setTimeout(() => {}, 2000); // Pause at full text
      } else if (reverse && text.length > 0) {
        setText(prev => prev.slice(0, -1));
      } else if (reverse && text.length === 0) {
        setReverse(false);
        setIndex(0);
      }
    }, reverse ? 50 : 150);
    
    return () => clearTimeout(timeout);
  }, [index, reverse, text, fullText]);
  
  return (
    <section className="relative h-screen w-full bg-gradient-to-br from-dark to-dark/70 overflow-hidden flex">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            initial={{
              opacity: 0.1 + Math.random() * 0.3,
              scale: 0.1 + Math.random() * 0.9,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: {
                duration: 15 + Math.random() * 30,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            style={{
              width: `${20 + Math.random() * 100}px`,
              height: `${20 + Math.random() * 100}px`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex items-center">
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-primary mb-3">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-light mb-4">Jairaj Kolhatkar</h1>
              <div className="h-8 md:h-12">
                <h3 className="text-xl md:text-3xl font-medium text-gray-300 mb-6 h-8 inline-block after:content-['|'] after:animate-pulse">
                  {text}
                </h3>
              </div>
              <p className="text-gray-400 mb-4 max-w-lg">
                Software Engineer with a strong foundation in programming languages such as Java, Python, and JavaScript. Passionate about building creative solutions and bringing ideas to life through clean, efficient code.
              </p>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-lg inline-block mb-8">
                <span className="text-primary font-medium">🏆 Smart India Hackathon 2022 Winner</span>
              </div>
              
              <div className="flex space-x-4 mb-6">
                <motion.a 
                  href="https://github.com/JairajKolhatkar" 
                  target="_blank"
                  whileHover={{ y: -5, color: "#6366f1" }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiGithub size={24} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/jairaj-kolhatkar-77a81730a/" 
                  target="_blank"
                  whileHover={{ y: -5, color: "#6366f1" }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiLinkedin size={24} />
                </motion.a>
                <motion.a 
                  href="mailto:jairajkolhatkar@gmail.com"
                  whileHover={{ y: -5, color: "#6366f1" }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiMail size={24} />
                </motion.a>
              </div>
              
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Link href="#projects">View Projects</Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Link href="#contact">Contact Me</Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              {/* Profile Image with Animation Effects */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl z-10">
                <Image
                  src="/jairaj pic.jpg" 
                  alt="Jairaj Kolhatkar"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              
              <motion.div
                className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full -z-10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div
                className="absolute -inset-8 bg-gradient-to-bl from-primary/10 to-secondary/10 rounded-full -z-20"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-light"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 