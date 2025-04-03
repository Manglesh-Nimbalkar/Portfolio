"use client";
import { motion } from 'framer-motion';
// import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Define interface for particles
interface Particle {
  shape: "circle" | "square" | "triangle" | "plus";
  width: number;
  height: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  color: string;
  rotation?: number; // Add rotation property
}

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    setMounted(true);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation particles with different shapes and sizes
  const animatedParticles: Particle[] = [
    // Circles
    { shape: "circle", width: 150, height: 150, x: "-30%", y: "70%", duration: 20, delay: 0, color: "rgba(139, 92, 246, 0.15)" },
    { shape: "circle", width: 200, height: 180, x: "10%", y: "20%", duration: 25, delay: 2, color: "rgba(6, 182, 212, 0.12)" },
    { shape: "circle", width: 120, height: 160, x: "-20%", y: "80%", duration: 22, delay: 4, color: "rgba(139, 92, 246, 0.15)" },
    { shape: "circle", width: 180, height: 180, x: "40%", y: "60%", duration: 28, delay: 1, color: "rgba(6, 182, 212, 0.1)" },
    { shape: "circle", width: 160, height: 140, x: "-10%", y: "30%", duration: 23, delay: 5, color: "rgba(139, 92, 246, 0.12)" },
    // Squares
    { shape: "square", width: 140, height: 140, x: "20%", y: "10%", duration: 19, delay: 3, color: "rgba(6, 182, 212, 0.08)", rotation: 15 },
    { shape: "square", width: 100, height: 100, x: "-30%", y: "40%", duration: 24, delay: 2, color: "rgba(236, 72, 153, 0.1)", rotation: 30 },
    { shape: "square", width: 120, height: 120, x: "15%", y: "50%", duration: 21, delay: 0, color: "rgba(139, 92, 246, 0.1)", rotation: 10 },
    // Triangles (represented as squares with rotation for simplicity)
    { shape: "triangle", width: 130, height: 130, x: "-20%", y: "60%", duration: 27, delay: 4, color: "rgba(6, 182, 212, 0.1)" },
    { shape: "triangle", width: 170, height: 170, x: "25%", y: "90%", duration: 22, delay: 1, color: "rgba(236, 72, 153, 0.08)" },
    { shape: "triangle", width: 110, height: 110, x: "-40%", y: "20%", duration: 26, delay: 3, color: "rgba(139, 92, 246, 0.1)" },
    // Plus shapes (represented as plus icons)
    { shape: "plus", width: 80, height: 80, x: "30%", y: "70%", duration: 23, delay: 5, color: "rgba(6, 182, 212, 0.12)" },
    { shape: "plus", width: 60, height: 60, x: "0%", y: "40%", duration: 18, delay: 2, color: "rgba(139, 92, 246, 0.08)" },
    { shape: "plus", width: 70, height: 70, x: "-35%", y: "75%", duration: 24, delay: 4, color: "rgba(236, 72, 153, 0.1)" },
    // More background elements
    { shape: "circle", width: 200, height: 200, x: "40%", y: "30%", duration: 25, delay: 1, color: "rgba(139, 92, 246, 0.07)" },
    { shape: "square", width: 160, height: 160, x: "-25%", y: "55%", duration: 22, delay: 0, color: "rgba(6, 182, 212, 0.05)", rotation: 25 },
    { shape: "circle", width: 130, height: 130, x: "35%", y: "15%", duration: 26, delay: 3, color: "rgba(139, 92, 246, 0.06)" },
    { shape: "plus", width: 90, height: 90, x: "-5%", y: "85%", duration: 21, delay: 5, color: "rgba(236, 72, 153, 0.06)" },
    { shape: "triangle", width: 180, height: 180, x: "20%", y: "45%", duration: 27, delay: 2, color: "rgba(6, 182, 212, 0.07)" },
    { shape: "circle", width: 140, height: 140, x: "-15%", y: "65%", duration: 23, delay: 4, color: "rgba(139, 92, 246, 0.05)" }
  ];

  // Floating animation for the hero content
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Parallax effect multiplier
  const parallaxFactor = 0.02;

  // Render particle based on shape
  const renderParticle = (particle: Particle, index: number) => {
    // Base styles for all particles
    const baseStyle = {
      position: "absolute" as const,
      backgroundColor: particle.color,
      width: particle.width,
      height: particle.height,
      x: particle.x,
      y: particle.y,
    };
    
    // Shape-specific styles and animations
    switch(particle.shape) {
      case "square":
        return (
          <motion.div
            key={index}
            style={{
              ...baseStyle,
              borderRadius: "10%",
              rotate: particle.rotation || 0, // Use predefined rotation instead of Math.random()
            }}
            animate={{
              y: ["-100%", "200%"],
              rotate: [particle.rotation || 0, (particle.rotation || 0) + 180], // Use consistent rotation values
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
            className="blur-sm"
          />
        );
      case "triangle":
        return (
          <motion.div
            key={index}
            style={{
              ...baseStyle,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
            animate={{
              y: ["-100%", "200%"],
              rotate: [0, 120],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
            className="blur-sm"
          />
        );
      case "plus":
        return (
          <motion.div
            key={index}
            style={{
              ...baseStyle,
              clipPath: "polygon(35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%, 0% 35%, 35% 35%)",
            }}
            animate={{
              y: ["-100%", "200%"],
              rotate: [0, 90],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
            className="blur-sm"
          />
        );
      default: // circle
        return (
          <motion.div
            key={index}
            style={{
              ...baseStyle,
              borderRadius: "50%",
            }}
            animate={{
              y: ["-100%", "200%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
            className="blur-sm"
          />
        );
    }
  };

  return (
    <div id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Glowing radial gradient background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 opacity-50"
          style={{
            backgroundPosition: `${50 + mousePosition.x * 0.01}% ${50 + mousePosition.y * 0.01}%`,
            transition: "background-position 0.3s ease-out",
          }}
        />
        <div 
          className="absolute w-1/2 h-1/2 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-3xl"
          style={{
            top: `calc(50% - ${mousePosition.y * parallaxFactor}px)`,
            left: `calc(30% - ${mousePosition.x * parallaxFactor}px)`,
            transition: "top 0.2s ease-out, left 0.2s ease-out",
          }}
        />
        <div 
          className="absolute w-1/3 h-1/3 rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 blur-3xl"
          style={{
            top: `calc(30% + ${mousePosition.y * parallaxFactor}px)`,
            right: `calc(20% + ${mousePosition.x * parallaxFactor}px)`,
            transition: "top 0.2s ease-out, right 0.2s ease-out",
          }}
        />
      </div>
      
      {/* Animated background particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {animatedParticles.map((particle, i) => renderParticle(particle, i))}
        </div>
      )}
      
      {/* Grid pattern with inline SVG instead of external file */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main content with parallax effect */}
      <div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{
          transform: `translate(${mousePosition.x * -parallaxFactor}px, ${mousePosition.y * -parallaxFactor}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <motion.div
          animate={floatingAnimation}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl text-purple-400 font-light font-mono">Hello, I am</h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-10 hero-title"
          >
            <span className="animate-gradient-text drop-shadow-glow font-display">Manglesh Nimbalkar</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-4xl text-gray-300 font-light font-heading tracking-wide">
              Computer Engineer & <span className="text-cyan-400">AI Enthusiast</span>
            </h3>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <Link href="#contact">
            <motion.button 
              className="px-10 py-4 text-lg rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full hover:translate-x-0 transition-transform duration-300"></span>
              Contact Me
            </motion.button>
          </Link>
          <Link href="#projects">
            <motion.button 
              className="px-10 py-4 text-lg rounded-full border-2 border-purple-500 text-white font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute top-0 left-0 w-full h-full bg-purple-500/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              View Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      {/* Floating geometric shape decoration */}
      {mounted && (
        <>
          <motion.div
            className="absolute left-[15%] top-[20%] w-16 h-16 md:w-24 md:h-24 rounded-lg border-2 border-purple-500/20 hidden md:block"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              x: [0, 10, 0, -10, 0],
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transform: `translate(${mousePosition.x * parallaxFactor * 2}px, ${mousePosition.y * parallaxFactor * 2}px)`,
            }}
          />
          <motion.div
            className="absolute right-[15%] bottom-[20%] w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-cyan-500/20 hidden md:block"
            animate={{
              scale: [1, 1.1, 1, 0.9, 1],
              x: [0, -10, 0, 10, 0],
              y: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transform: `translate(${mousePosition.x * parallaxFactor * 1.5}px, ${mousePosition.y * parallaxFactor * 1.5}px)`,
            }}
          />
          <motion.div
            className="absolute right-[25%] top-[25%] w-12 h-12 md:w-16 md:h-16 transform rotate-45 border-2 border-pink-500/20 hidden md:block"
            animate={{
              rotate: [45, 135, 225, 315, 45],
              x: [0, 15, 0, -15, 0],
              y: [0, -15, 0, 15, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transform: `translate(${mousePosition.x * parallaxFactor * 2.5}px, ${mousePosition.y * parallaxFactor * 2.5}px) rotate(45deg)`,
            }}
          />
        </>
      )}
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <span className="text-gray-400 mb-2">Scroll Down</span>
        <div className="w-8 h-12 border-2 border-purple-500 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;