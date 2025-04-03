"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/manglesh.jpg" 
                alt="Manglesh Nimbalkar" 
                width={400} 
                height={400}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Computer Engineering Student & AI Enthusiast</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a passionate Computer Engineering student with a strong focus on Artificial Intelligence and Machine Learning.
              My interests span from cutting-edge deep learning techniques to creating practical AI applications. 
              I&apos;m dedicated to leveraging technology to solve real-world problems and constantly expanding my knowledge in this rapidly evolving field.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaGraduationCap className="text-purple-500 text-2xl mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white font-heading">Education</h4>
                  <p className="text-gray-300">B.Tech (Computer Engineering), CGPA: 9.45</p>
                  <p className="text-gray-400">Vishwakarma Institute of Information Technology, Pune</p>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaLaptopCode className="text-cyan-500 text-2xl mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white font-heading">Focus Areas</h4>
                  <p className="text-gray-300">Artificial Intelligence, Machine Learning, Deep Learning, Cloud Computing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;