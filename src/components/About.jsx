import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl transform rotate-3 scale-105 opacity-20 dark:opacity-30"></div>
            <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Education Journey
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    B.Tech CSE (Artificial Intelligence)
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    Bansal Institute of Engineering and Technology, Lucknow
                  </p>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Currently pursuing my Bachelor's degree with a specialized focus on Artificial Intelligence. I have built a strong foundation in core computer science concepts, algorithms, and software engineering principles.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              My Passion
            </h3>
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                I am deeply passionate about solving real-world problems through technology. My core strengths lie in <span className="font-semibold text-blue-600 dark:text-blue-400">Java</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">AI/ML</span>, and <span className="font-semibold text-pink-600 dark:text-pink-400">backend development</span>.
              </p>
              <p>
                Whether it's building scalable APIs with Spring Boot, developing machine learning models in Python, or automating complex workflows, I enjoy the challenge of turning complex requirements into clean, efficient, and maintainable code.
              </p>
              <p>
                I am constantly learning and adapting to new technologies, eager to contribute to innovative projects that make a meaningful impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
