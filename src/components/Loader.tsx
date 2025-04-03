"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Animation variants for the loader particles
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const particleVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Create particles with different colors
  const particles = [
    { color: "#8B5CF6", delay: 0 },    // Purple
    { color: "#06B6D4", delay: 0.2 },  // Cyan
    { color: "#EC4899", delay: 0.4 },  // Pink
    { color: "#10B981", delay: 0.6 },  // Emerald
    { color: "#F59E0B", delay: 0.8 },  // Amber
    { color: "#EF4444", delay: 1 },    // Red
  ];

  return (
    <>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          animate={loading ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative">
            {/* Main animated circle */}
            <div className="relative">
              <svg className="w-24 h-24" viewBox="0 0 100 100">
                
                <circle
                  className="text-gray-800"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                />
                <motion.circle
                  initial={{ strokeDashoffset: 264 }}
                  animate={{ 
                    strokeDashoffset: 0,
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  strokeWidth="6"
                  strokeLinecap="round"
                  stroke="url(#gradient)"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                  strokeDasharray="264"
                  transformOrigin="center"
                />
                
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Particles around the main circle */}
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full"
                  style={{ 
                    backgroundColor: particle.color,
                    top: "calc(50% - 8px)",
                    left: "calc(50% - 8px)",
                    transformOrigin: "center",
                  }}
                  variants={particleVariants}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: particle.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "120px",
                height: "120px",
                top: "-25%",
                left: "-25%",
              }}
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Loader;