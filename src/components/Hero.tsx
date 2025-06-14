import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full transition-colors">
                Full Stack LLM Development Senior Analyst
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Praveen Kumar Goli</span>
              <br />From MVC architecture to multi-agent AI systems — engineering the future of the web.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
              I build responsive, scalable, and intelligent web applications that solve real-world problems, blending clean design with powerful full-stack and AI-driven solutions to deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20 dark:shadow-blue-500/10"
              >
                Get in touch <ArrowRight size={18} />
              </a>
              <a
                href="https://drive.google.com/file/d/1i91c7agv2qVki5AekQhlTkTtnvG2Njer/view?usp=sharing" 
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                Download CV <Download size={18} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 blur-3xl opacity-20 dark:opacity-30 absolute -top-10 -right-10 animate-pulse"></div>
              <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden relative transition-colors">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <img src="https://lh3.googleusercontent.com/pw/AP1GczOJ9ZJPh1XRjuNY9yb7SMPlHcnT0FJLCFKHsyDsKgM-BQSzGIUZMXHs_nTvIJsQcc8ZCX2XLnGohmt7LVrG2puoPyIr7tJHvcKsenT3gYvog9fUBe4Hj_rA6h60iAme_k3Z1gBa-C_CH1ubSi5eshY=w1024-h1024-s-no-gm?authuser=0" alt="Praveen Kumar Goli - Full Stack Developer" class="">
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
