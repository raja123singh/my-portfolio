import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-4 border-blue-500/30 dark:border-blue-500/20 ml-3 md:ml-6">
          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 ml-8 md:ml-12 relative"
          >
            <div className="absolute -left-[45px] md:-left-[61px] top-0 bg-gradient-to-br from-blue-500 to-purple-500 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-md">
              <FaBriefcase className="text-white text-sm md:text-base" />
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    Software Development Intern
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">
                    Softpro India Computer Technologies Pvt. Ltd.
                  </h4>
                </div>
                <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold whitespace-nowrap">
                  Jun 2025 – Aug 2025
                </span>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-lg">Responsibilities:</h5>
                <ul className="space-y-3">
                  {[
                    'Built and maintained PGI VirtualCare telemedicine system.',
                    'Worked on Java and Spring Boot backend architecture.',
                    'Designed appointment scheduling and health record modules.',
                    'Worked with REST APIs and relational databases for efficient data management.',
                  ].map((task, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-1">•</span>
                      <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
