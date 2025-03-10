import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const name = "GUNASHEKAR A".split("");

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-bold mb-8 flex"
      >
        {name.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4"
      >
        AI Engineer & Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="text-xl text-gray-400 text-center max-w-2xl mb-8"
      >
        Specializing in artificial intelligence, machine learning, and full-stack development.
        Building the future through innovative AI solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="flex space-x-6"
      >
        <motion.a
          href="https://github.com/gunashekarnaidu2003"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.4, ease: "easeOut" }}
        >
          <Github className="h-5 w-5" />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          href="http://www.linkedin.com/in/gunashekarnaidu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.9, duration: 0.4, ease: "easeOut" }}
        >
          <Linkedin className="h-5 w-5" />
          <span>LinkedIn</span>
        </motion.a>

        <motion.a
          href="mailto:gunashekarnaidu2003@gmail.com"
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.0, duration: 0.4, ease: "easeOut" }}
        >
          <Mail className="h-5 w-5" />
          <span>Email</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Home;