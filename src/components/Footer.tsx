"use client";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent font-display">
              Manglesh Nimbalkar
            </h2>
            <p className="text-gray-400 mt-2 font-heading">Computer Engineering Student & AI Enthusiast</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
            <Link href="#achievements" className="text-gray-400 hover:text-white transition-colors">Achievements</Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/Manglesh-Nimbalkar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/manglesh-nimbalkar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://leetcode.com/u/Yoriichi_Tsugikuni/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LeetCode"
            >
              <FaCode size={20} />
            </a>
            <a 
              href="mailto:mangleshnimbalkar123@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
          
          <div>
            <p className="text-gray-500 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Manglesh Nimbalkar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;