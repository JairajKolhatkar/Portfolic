'use client';

import { motion } from 'framer-motion';

// Skeleton loader for cards
export const SkeletonCard = ({ className = "" }) => {
  return (
    <div className={`bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 ${className}`}>
      <div className="animate-pulse">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-700 rounded w-full"></div>
          <div className="h-3 bg-gray-700 rounded w-5/6"></div>
          <div className="h-3 bg-gray-700 rounded w-4/6"></div>
        </div>
        <div className="mt-4 flex space-x-2">
          <div className="h-6 bg-gray-700 rounded w-16"></div>
          <div className="h-6 bg-gray-700 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

// Skeleton loader for text content
export const SkeletonText = ({ lines = 3, className = "" }) => {
  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 bg-gray-700 rounded ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
};

// Animated dots loader
export const DotsLoader = ({ size = "md", color = "primary" }) => {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  };

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    white: "bg-white",
    gray: "bg-gray-400"
  };

  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
};

// Spinning loader
export const SpinLoader = ({ size = "md", color = "primary" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const colorClasses = {
    primary: "border-primary",
    secondary: "border-secondary",
    white: "border-white",
    gray: "border-gray-400"
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Pulse loader
export const PulseLoader = ({ size = "md", color = "primary" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    white: "bg-white",
    gray: "bg-gray-400"
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Wave loader
export const WaveLoader = ({ color = "primary" }) => {
  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    white: "bg-white",
    gray: "bg-gray-400"
  };

  return (
    <div className="flex space-x-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className={`w-1 h-8 ${colorClasses[color]}`}
          animate={{
            scaleY: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );
};

// Loading overlay
export const LoadingOverlay = ({ message = "Loading...", children }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-dark/90 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-2xl text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <div className="mb-4">
          {children || <SpinLoader size="lg" color="primary" />}
        </div>
        <p className="text-gray-300 text-sm">{message}</p>
      </motion.div>
    </motion.div>
  );
};

// Page transition loader
export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Stagger animation container
export const StaggerContainer = ({ children, delay = 0.1 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

// Stagger animation item
export const StaggerItem = ({ children, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 