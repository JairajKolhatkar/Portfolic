'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={18} />, url: 'https://github.com/JairajKolhatkar', name: 'GitHub' },
    { icon: <FiLinkedin size={18} />, url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <FiTwitter size={18} />, url: 'https://twitter.com', name: 'Twitter' },
  ];

  return (
    <footer className="bg-dark pt-16 pb-6 relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/20"
      >
        <FiArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-primary"
            >
              <Link href="/">JK</Link>
            </motion.div>
            <p className="text-gray-400">
              Software Engineer with a passion for building creative digital experiences with clean, efficient code. Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#6366f1" }}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-light mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 text-xs">›</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-light mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on my latest projects and tech articles.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-lg bg-dark/50 border border-gray-800 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 text-light"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Jairaj Kolhatkar. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with <span className="text-red-500">❤</span> using Next.js & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 