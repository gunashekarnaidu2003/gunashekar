import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Image Recognition System',
    description: 'Deep learning model for real-time object detection using TensorFlow and OpenCV.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
    tags: ['TensorFlow', 'Python', 'OpenCV'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Natural Language Processing API',
    description: 'REST API for text analysis, sentiment detection, and language translation.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800',
    tags: ['NLP', 'FastAPI', 'PyTorch'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Reinforcement Learning Game AI',
    description: 'AI agent trained using reinforcement learning to play complex strategy games.',
    image: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=800',
    tags: ['PyTorch', 'OpenAI Gym', 'Python'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-sm bg-blue-500/20 text-blue-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;