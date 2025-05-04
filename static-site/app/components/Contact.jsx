'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormFeedback({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear feedback after 5 seconds
      setTimeout(() => {
        setFormFeedback({ type: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMail size={22} />,
      title: 'Email',
      content: 'jairajkolhatkar@gmail.com',
      link: 'mailto:jairajkolhatkar@gmail.com',
    },
    {
      icon: <FiPhone size={22} />,
      title: 'Phone',
      content: '+91-9423914011',
      link: 'tel:+919423914011',
    },
    {
      icon: <FiMapPin size={22} />,
      title: 'Location',
      content: 'Bangalore 560077, India',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FiGithub size={24} />, url: 'https://github.com/JairajKolhatkar', name: 'GitHub' },
    { icon: <FiLinkedin size={24} />, url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <FiTwitter size={24} />, url: 'https://twitter.com', name: 'Twitter' },
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark to-dark/70">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-light mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out using any of the methods below. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-light font-medium mb-1">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-light mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: "#6366f1" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                    className="bg-dark/50 p-3 rounded-lg text-gray-400 hover:text-primary border border-gray-800 hover:border-primary/50 transition-all"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl">
              <h3 className="text-xl font-semibold text-light mb-6">Send Me a Message</h3>
              
              {formFeedback.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg mb-6 ${
                    formFeedback.type === 'success' 
                      ? 'bg-green-500/10 text-green-500 border border-green-500/30' 
                      : 'bg-red-500/10 text-red-500 border border-red-500/30'
                  }`}
                >
                  {formFeedback.message}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={inputVariants} className="space-y-2">
                    <label htmlFor="name" className="text-light font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 text-light"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  
                  <motion.div variants={inputVariants} className="space-y-2">
                    <label htmlFor="email" className="text-light font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 text-light"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={inputVariants} className="space-y-2">
                  <label htmlFor="subject" className="text-light font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 text-light"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                
                <motion.div variants={inputVariants} className="space-y-2">
                  <label htmlFor="message" className="text-light font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-gray-800 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 text-light resize-none"
                    placeholder="Hello! I'd like to talk about..."
                  />
                </motion.div>
                
                <motion.div
                  variants={inputVariants}
                  className="pt-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>Send Message</span>
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <FiSend size={18} />
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 