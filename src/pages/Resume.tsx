import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 rounded-lg p-8"
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">John Doe</h1>
          <p className="text-xl text-gray-400">AI Engineer & Machine Learning Specialist</p>
        </div>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold">Summary</h2>
          </div>
          <p className="text-gray-300">
            Experienced AI engineer with a strong background in machine learning, deep learning, and
            software development. Passionate about creating innovative AI solutions that solve real-world
            problems. Proven track record of delivering high-impact projects in computer vision and
            natural language processing.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>
          
          {[
            {
              title: 'Senior AI Engineer',
              company: 'Tech Corp',
              period: '2021 - Present',
              points: [
                'Led the development of computer vision systems for autonomous vehicles',
                'Implemented state-of-the-art deep learning models for object detection',
                'Managed a team of 5 ML engineers and data scientists'
              ]
            },
            {
              title: 'Machine Learning Engineer',
              company: 'AI Solutions Inc',
              period: '2019 - 2021',
              points: [
                'Developed NLP models for sentiment analysis and text classification',
                'Optimized model performance and reduced inference time by 40%',
                'Collaborated with cross-functional teams to integrate ML solutions'
              ]
            }
          ].map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <h3 className="text-xl font-semibold text-blue-400">{job.title}</h3>
              <div className="text-gray-400 mb-2">{job.company} | {job.period}</div>
              <ul className="list-disc list-inside text-gray-300">
                {job.points.map((point, i) => (
                  <li key={i} className="mb-1">{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl font-semibold text-blue-400">
              M.S. in Computer Science, AI Specialization
            </h3>
            <div className="text-gray-400 mb-2">Stanford University | 2019</div>
          </motion.div>
        </section>

        <section>
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold">Skills</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Python', 'TensorFlow', 'PyTorch', 'Computer Vision',
              'Natural Language Processing', 'Deep Learning', 'Machine Learning',
              'RESTful APIs', 'Docker', 'Git'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 rounded px-4 py-2 text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Resume;