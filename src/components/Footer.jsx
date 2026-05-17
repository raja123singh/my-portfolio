import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-[#060b14] text-slate-300 py-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block">
              Raja Jai Singh
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              Building scalable software solutions.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/raja123singh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/raja-jai-singh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors transform hover:scale-110">
              <FaLinkedin size={24} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full cursor-pointer transition-colors mb-4 transform hover:-translate-y-1 shadow-lg border border-slate-700"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </Link>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Raja Jai Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
