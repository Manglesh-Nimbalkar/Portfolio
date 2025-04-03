"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is currently in view
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= 100 && rect.bottom >= 100;
          
          if (isInView) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3' : 'py-5'
    }`}>
      {/* Animated background gradient with blur */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-gray-900/95 to-cyan-900/10"></div>
        {/* Animated subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-pattern"></div>
        {/* Top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="/headericon.png" 
                alt="Logo" 
                width={60} 
                height={60} 
                className="rounded-full"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="#about" 
              className={`text-white hover:text-purple-400 transition-colors font-heading text-base relative ${
                activeSection === 'about' ? 'active-nav-item' : ''
              }`}
            >
              About
              {activeSection === 'about' && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link 
              href="#skills" 
              className={`text-white hover:text-purple-400 transition-colors font-heading text-base relative ${
                activeSection === 'skills' ? 'active-nav-item' : ''
              }`}
            >
              Skills
              {activeSection === 'skills' && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link 
              href="#projects" 
              className={`text-white hover:text-purple-400 transition-colors font-heading text-base relative ${
                activeSection === 'projects' ? 'active-nav-item' : ''
              }`}
            >
              Projects
              {activeSection === 'projects' && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link 
              href="#achievements" 
              className={`text-white hover:text-purple-400 transition-colors font-heading text-base relative ${
                activeSection === 'achievements' ? 'active-nav-item' : ''
              }`}
            >
              Achievements
              {activeSection === 'achievements' && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link 
              href="#contact" 
              className={`text-white hover:text-purple-400 transition-colors font-heading text-base relative ${
                activeSection === 'contact' ? 'active-nav-item' : ''
              }`}
            >
              Contact
              {activeSection === 'contact' && (
                <motion.div 
                  layoutId="navIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Manglesh-Nimbalkar" target="_blank" rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/manglesh-nimbalkar/" target="_blank" rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors">
              <FaLinkedin size={22} />
            </a>
            <a href="https://leetcode.com/u/Yoriichi_Tsugikuni/" target="_blank" rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors">
              <FaCode size={22} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden relative z-10"
        >
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-black/80"></div>
          <div className="relative px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="#about" 
              className={`block px-3 py-2 text-white hover:bg-gray-700 rounded-md relative ${
                activeSection === 'about' ? 'text-purple-400' : ''
              }`} 
              onClick={() => setMobileMenuOpen(false)}
            >
              About
              {activeSection === 'about' && (
                <motion.div 
                  layoutId="mobileNavIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link 
              href="#skills" 
              className={`block px-3 py-2 text-white hover:bg-gray-700 rounded-md relative ${
                activeSection === 'skills' ? 'text-purple-400' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
              {activeSection === 'skills' && (
                <motion.div 
                  layoutId="mobileNavIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link 
              href="#projects" 
              className={`block px-3 py-2 text-white hover:bg-gray-700 rounded-md relative ${
                activeSection === 'projects' ? 'text-purple-400' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
              {activeSection === 'projects' && (
                <motion.div 
                  layoutId="mobileNavIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link 
              href="#achievements" 
              className={`block px-3 py-2 text-white hover:bg-gray-700 rounded-md relative ${
                activeSection === 'achievements' ? 'text-purple-400' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Achievements
              {activeSection === 'achievements' && (
                <motion.div 
                  layoutId="mobileNavIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link 
              href="#contact" 
              className={`block px-3 py-2 text-white hover:bg-gray-700 rounded-md relative ${
                activeSection === 'contact' ? 'text-purple-400' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
              {activeSection === 'contact' && (
                <motion.div 
                  layoutId="mobileNavIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            
            {/* Social links in mobile menu */}
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://github.com/Manglesh-Nimbalkar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/manglesh-nimbalkar/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="https://leetcode.com/u/Yoriichi_Tsugikuni/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaCode size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;