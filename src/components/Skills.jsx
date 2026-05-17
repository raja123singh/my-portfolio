import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaCode, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiGooglecolab, SiN8N, SiReact, SiJavascript } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Java', icon: <FaJava className="text-[#007396]" />, level: 85 },
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, level: 70 },
      { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" />, level: 80 },
      { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 80 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" />, level: 85 },
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" />, level: 80 },
      { name: 'GitHub', icon: <FaGithub className="text-slate-900 dark:text-white" />, level: 80 },
      { name: 'VS Code', icon: <FaCode className="text-[#007ACC]" />, level: 95 },
      { name: 'Google Colab', icon: <SiGooglecolab className="text-[#F9AB00]" />, level: 50 },
      { name: 'N8N Automation', icon: <SiN8N className="text-[#EA4B71]" />, level: 50 },
      { name: 'React', icon: <SiReact className="text-[#EA4B71]" />, level: 70 },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#EA4B71]" />, level: 60 },
    ],
  },

  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, level: 85 },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div key={skillIdx} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{skill.icon}</div>
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIdx * 0.1, ease: 'easeOut' }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
