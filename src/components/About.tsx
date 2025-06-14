import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full transition-colors">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden transition-colors">
               <img src="https://images.gr-assets.com/quotes/1431708227p8/833.jpg" alt="Praveen Kumar Goli - Full Stack Developer"/>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg max-w-xs transition-colors">
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  "The beautiful thing about learning is that nobody can take it away from you."
                </p>
                <p className="text-right text-blue-600 dark:text-blue-400 mt-2">— B.B. King</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              A passionate Full Stack Developer and ASP.NET MVC specialist with a keen eye for design, adept at building seamless user experiences and robust, scalable backend solutions.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Praveen Kumar Goli, Software Engineer with 6 year and 6 months of comprehensive ASP.NET MVC experience in Design & Deploy application using .NET, Angular, SQL and Azure. Experience in Retail & Logistics project (FedEx) and TNT Desktop applications and internal tool development domains.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-3 transition-colors">
                <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Birth Date</p>
                  <p className="font-medium text-gray-900 dark:text-white">03 July 1997</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-3 transition-colors">
                <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">Hyderabad, IND</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-3 transition-colors">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="font-medium text-gray-900 dark:text-white">6+ Years</p>
                </div>
              </div>
            </div>

            <a
              href="#experience"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 w-fit shadow-lg shadow-blue-600/20 dark:shadow-blue-500/10"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
