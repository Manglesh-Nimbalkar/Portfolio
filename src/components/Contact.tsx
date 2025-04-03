"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation bubbles with fixed values
  const animationBubbles = [
    { width: 250, height: 150, x: "70%", y: "20%", duration: 35, delay: 2 },
    { width: 300, height: 180, x: "20%", y: "40%", duration: 45, delay: 0 },
    { width: 200, height: 300, x: "50%", y: "70%", duration: 40, delay: 5 },
    { width: 350, height: 220, x: "80%", y: "30%", duration: 42, delay: 8 },
    { width: 280, height: 320, x: "40%", y: "90%", duration: 38, delay: 3 },
    { width: 320, height: 180, x: "60%", y: "10%", duration: 43, delay: 6 },
    { width: 180, height: 250, x: "30%", y: "80%", duration: 37, delay: 4 },
    { width: 270, height: 220, x: "75%", y: "60%", duration: 41, delay: 1 },
    { width: 240, height: 300, x: "15%", y: "50%", duration: 44, delay: 7 },
    { width: 350, height: 200, x: "45%", y: "25%", duration: 39, delay: 9 }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements - only render on client side */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {animationBubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500/5"
              initial={{
                width: bubble.width,
                height: bubble.height,
                x: bubble.x,
                y: bubble.y,
                opacity: 0,
              }}
              animate={{
                x: ["-20%", "120%"],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                ease: "linear",
                delay: bubble.delay,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                  <FaPhone className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium font-mono">+91 9156974101</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium font-mono">mangleshnimbalkar123@gmail.com</p>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-white mt-8 mb-4 font-heading">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/manglesh-nimbalkar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors"
                >
                  <FaLinkedin className="text-purple-400 text-xl" />
                </a>
                <a 
                  href="https://github.com/Manglesh-Nimbalkar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors"
                >
                  <FaGithub className="text-purple-400 text-xl" />
                </a>
                <a 
                  href="https://leetcode.com/u/Yoriichi_Tsugikuni/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors"
                >
                  <FaCode className="text-purple-400 text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Send Me a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Your Email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;