"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "/skills/python.png" },
        { name: "C++", icon: "/skills/cpp.png" },
        { name: "Java", icon: "/skills/java.png" },
      ]
    },
    {
      title: "Machine Learning Libraries",
      skills: [
        { name: "TensorFlow", icon: "/skills/tensorflow.png" },
        { name: "PyTorch", icon: "/skills/pytorch.png" },
        { name: "Keras", icon: "/skills/keras.png" },
        { name: "Scikit-learn", icon: "/skills/sklearn.png" },
        { name: "Hugging Face", icon: "/skills/huggingface.png" },
      ]
    },
    {
      title: "Cloud & Deployment",
      skills: [
        { name: "GCP", icon: "/skills/gcp.png" },
        { name: "AWS", icon: "/skills/aws.png" },
        { name: "Azure", icon: "/skills/azure.png" },
        { name: "Docker", icon: "/skills/docker.png" },
      ]
    },
    {
      title: "AI & GenAI Tools",
      skills: [
        { name: "LangChain", icon: "/skills/langchain.png" },
        { name: "Hugging Face", icon: "/skills/huggingface.png" },
        { name: "LlamaIndex", icon: "/skills/llamaindex.jpeg" },
        { name: "OpenAI APIs", icon: "/skills/openai.jpg" },
        { name: "Gemini", icon: "/skills/gemini.png" },
      ]
    },
    {
      title: "Data Visualization",
      skills: [
        { name: "Power BI", icon: "/skills/powerbi.png" },
        { name: "Tableau", icon: "/skills/tableau.png" },
        { name: "Excel", icon: "/skills/msexcel.png" },
      ]
    },
    {
      title: "Database Tools",
      skills: [
        { name: "MongoDB", icon: "/skills/mongodb.png", className: "object-contain scale-75" },
        { name: "Neo4j", icon: "/skills/neo4j.png" },
        { name: "MySQL", icon: "/skills/mysql.png" },
      ]
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i : number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.1 * i
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              custom={categoryIndex}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2 text-center font-heading">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <div className="w-8 h-8 relative flex items-center justify-center">
                      <Image 
                        src={skill.icon} 
                        alt={skill.name}
                        width={32}
                        height={32}
                        className={`${skill.className || 'object-contain'}`}
                      />
                    </div>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;