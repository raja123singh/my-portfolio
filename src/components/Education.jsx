import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'B.Tech CSE AI',
    duration: '2022–2026',
    score: '69.98%',
    institution: 'Bansal Institute of Engineering and Technology, Lucknow',
  },
  {
    degree: 'Intermediate',
    duration: 'Completed',
    score: '79.2%',
    institution: 'High School / College',
  },
  {
    degree: 'High School',
    duration: 'Completed',
    score: '78.8%',
    institution: 'High School',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform"></div>
              
              <div className="mb-6 inline-block p-4 bg-blue-50 dark:bg-slate-700/50 rounded-2xl text-blue-600 dark:text-blue-400">
                <FaGraduationCap size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {edu.degree}
              </h3>
              
              <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4 inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/30 rounded-full">
                {edu.duration}
              </div>
              
              {edu.institution && (
                <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium">
                  {edu.institution}
                </p>
              )}
              
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Score</span>
                <span className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
