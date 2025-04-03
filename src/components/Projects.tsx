"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "150px 0px",
  });

  const projects = [
    {
      title: "Trial Scout",
      description: "Accelerated Clinical Trial Retrieval",
      period: "February 2025 - March 2025",
      technologies: ["Transformer", "FAISS"],
      points: [
        "Piloted a semantic retrieval system spanning 450K+ clinical trials, leveraging FAISS vector search to shrink search time from weeks to seconds and boosting trial design efficiency.",
        "Orchestrated domain-aligned embeddings via the E5 Large Instruct model (STS 76.81), capturing nuanced clinical terminology and raising retrieval precision by 30%.",
        "Integrated a cost-effective FAISS-based pipeline, reducing operational expenses by 10x compared to proprietary solutions while sustaining sub-second query responses."
      ],
      image: "/projects/clinical-trials.jpg",
      bgColor: "from-indigo-500 to-purple-600"
    },
    {
      title: "Chronix",
      description: "AI for Chronic Disease",
      period: "January 2025 - February 2025",
      technologies: ["TensorFlow", "PyTorch", "MongoDB"],
      points: [
        "Designed and deployed a cloud-native chronic disease risk prediction platform on GCP Cloud Run, ensuring 99.95% uptime with real-time analytics via MongoDB's sharding & indexing optimizations.",
        "Engineered AI models for chronic disease risk assessment, utilizing TensorFlow and advanced feature extraction techniques to achieve 95.6% accuracy in detecting diabetes and hypertension risks.",
        "Engineered an LLM-powered multilingual healthcare chatbot using LangChain & Knowledge Graph Augmentation, with sub-second response latency.",
        "Incorporated wearable device synchronization for real-time vitals monitoring, generating alerts for abnormal readings with 100ms latency."
      ],
      image: "/projects/healthcare.jpg",
      bgColor: "from-sky-500 to-indigo-600"
    },
    {
      title: "Handwritten Text Recognition",
      description: "PyTorch, Llama fine-tuning",
      period: "October 2024 - November 2024",
      technologies: ["PyTorch", "Llama fine-tuning", "CNN", "BiLSTM", "Transformer"],
      points: [
        "Achieved 97.5% accuracy in handwritten text recognition with a Word Error Rate (WER) of 0.1603 and a Character Error Rate (CER) of 0.0497 using a Self-Supervised Learning approach.",
        "Pioneered an OCR model leveraging a CNN-BiLSTM-Transformer hybrid architecture, extracting features via ResNet and Vision Transformer (ViT), optimizing sequence modeling efficiency to 98% with CTC decoding.",
        "Integrated Named Entity Recognition (NER) & Large-Scale Keyword Extraction using LDA & Transformers, processing 100K+ POS tagging operations with minimal latency."
      ],
      image: "/projects/handwriting.jpg",
      bgColor: "from-emerald-500 to-green-600"
    },
    {
      title: "AI English Communication Assessment Platform",
      description: "LangChain, GCP",
      period: "December 2024 - January 2025",
      technologies: ["LangChain", "GCP", "Flask"],
      points: [
        "Leveraged 95% pronunciation detection accuracy and 98% grammar precision with real-time AI-driven speech analysis.",
        "Built APIs with Flask and LangChain, generating detailed feedback in within 1 second.",
        "Deployed on Google Cloud Run, supporting 10K+ concurrent users with 99.9% uptime."
      ],
      image: "/projects/language.jpg",
      bgColor: "from-amber-500 to-orange-600"
    },
    {
      title: "Patient Sentiment Analysis",
      description: "Multimodal Inputs using RoBERTa, NLP",
      period: "June 2024 - July 2024",
      technologies: ["RoBERTa", "NLP", "Multimodal Analysis"],
      points: [
        "Designed a sentiment analysis system processing 3 input types (audio, video, text), enhancing user satisfaction by 30%.",
        "Integrated Zero-Shot Learning & Domain Adaptation, achieving 95% accuracy in sentiment detection, including sarcasm recognition.",
        "Implemented an interactive dashboard and chatbot, improving user engagement by 25%."
      ],
      image: "/projects/sentiment.jpg",
      bgColor: "from-rose-500 to-pink-600"
    },
    {
      title: "Skin Cancer Detection",
      description: "TensorFlow, Keras, Python",
      period: "April 2024 - May 2024",
      technologies: ["TensorFlow", "Keras", "Python", "CNN"],
      points: [
        "Developed a CNN-based multiclass classification model achieving 87% accuracy in skin cancer detection.",
        "Optimized 5 different CNN architectures including ResNet, MobileNet, EfficientNet, AlexNet and DenseNet."
      ],
      image: "/projects/healthcare.jpg",
      bgColor: "from-blue-500 to-violet-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className={index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                <div className={`bg-gradient-to-br ${project.bgColor} p-6 rounded-xl shadow-xl relative overflow-hidden h-72 flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                  <h3 className="text-4xl font-bold text-white text-center z-10 drop-shadow-lg font-display">{project.title}</h3>
                </div>
              </div>
              
              <div className={index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">{project.title}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-purple-400 font-semibold font-mono">{project.description}</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{project.period}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-800 text-purple-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-300 flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors">
                    <FaGithub /> GitHub
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
                    <FaExternalLinkAlt /> Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;