import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Praveen Kumar Goli</h2>
            <p className="text-gray-400 mb-4 max-w-xs mx-auto md:mx-0">
              A passionate Full Stack Developer and ASP.NET MVC specialist with a keen eye for design, adept at building seamless user experiences and robust, scalable backend solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">praveenkumargoli9225@gmail.com</p>
            <p className="text-gray-400 mb-2">+91 8688142429</p>
            <p className="text-gray-400">Hyderabad, Telangana, India</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Praveen Kumar Goli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;