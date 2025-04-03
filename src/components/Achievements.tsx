"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01, // Decreased from 0.1 for better visibility while scrolling
    rootMargin: "150px 0px", // Increased from 100px to load content even sooner
  });

  const hackathons = [
    {
      title: "NEST by Novartis",
      subtitle: "National Level Hackathon - Novartis India",
      prize: "Cash Prize: ₹125,000",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Tally CodeBrewers 2024",
      subtitle: "National Level Hackathon - Tally Solutions",
      prize: "Cash Prize: ₹75,000",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      title: "MindSpark NeuroHack 2024",
      subtitle: "L&T sponsored",
      prize: "Cash Prize: ₹40,000",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "PluginLive Hackathon 2024",
      subtitle: "PluginLive Technologies",
      prize: "Cash Prize: ₹25,000",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "CodeCraft 2025",
      subtitle: "Apptware Solutions",
      prize: "Cash Prize: ₹24,000",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
      gradient: "from-pink-400 to-rose-500"
    },
    {
      title: "Viz-a-thon 2024",
      subtitle: "Wolters Kluwer sponsored",
      prize: "Cash Prize: ₹20,000",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
      gradient: "from-amber-400 to-orange-500"
    },
    {
      title: "GeekVishwa 2025",
      subtitle: "",
      prize: "Cash Prize: ₹15,000",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
      gradient: "from-indigo-400 to-violet-500"
    },
    {
      title: "Technofea 2.0 2025",
      subtitle: "",
      prize: "Cash Prize: ₹11,000",
      icon: <FaTrophy className="text-yellow-500 text-4xl" />,
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      title: "Amazon ML Summer School 2024",
      subtitle: "",
      prize: "Selected Participant",
      icon: <FaMedal className="text-yellow-500 text-4xl" />,
      gradient: "from-gray-500 to-gray-700"
    }
  ];

  const certifications = [
    {
      title: "Data Analysis using Python",
      subtitle: "NPTEL Certification",
      description: "Rank in Top 1%",
      icon: <FaCertificate className="text-blue-500 text-4xl" />
    },
    {
      title: "AI-ML Google, AWS Data Engineering",
      subtitle: "Virtual Internship - Eduskills AICTE, India",
      description: "",
      icon: <FaCertificate className="text-blue-500 text-4xl" />
    },
    {
      title: "Deep Learning A-Z, Machine Learning A-Z",
      subtitle: "Udemy",
      description: "",
      icon: <FaCertificate className="text-blue-500 text-4xl" />
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 font-heading">Hackathons & Competitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                custom={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${hackathon.gradient}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-heading">{hackathon.title}</h4>
                      {hackathon.subtitle && (
                        <p className="text-gray-400 text-sm mb-2">{hackathon.subtitle}</p>
                      )}
                      <p className="text-purple-400 font-medium font-mono">{hackathon.prize}</p>
                    </div>
                    <div>{hackathon.icon}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 font-heading">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                custom={index + hackathons.length}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700 p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {certification.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{certification.title}</h4>
                    <p className="text-gray-400 text-sm">{certification.subtitle}</p>
                    {certification.description && (
                      <p className="text-purple-400 mt-2 font-medium">{certification.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;