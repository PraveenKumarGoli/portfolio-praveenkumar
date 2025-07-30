import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const technicalSkills: Skill[] = [
    { name: 'ASP .Net MVC', level: 90, color: 'bg-blue-600' },
    { name: '.Net', level: 85, color: 'bg-blue-600' },
    { name: 'Java', level: 90, color: 'bg-blue-600' },
    { name: 'Python', level: 90, color: 'bg-blue-600' },
    { name: 'MS SQL', level: 95, color: 'bg-blue-600' },
    { name: 'Gen AI Prompts', level: 90, color: 'bg-blue-600' },
    { name: 'Angular', level: 85, color: 'bg-blue-600' },
    { name: 'React', level: 85, color: 'bg-blue-600' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'HTML/CSS', level: 95, color: 'bg-blue-600' },
    { name: 'JavaScript', level: 90, color: 'bg-blue-600' },
    { name: 'NextJS', level: 85, color: 'bg-blue-600' },
    { name: 'CSS', level: 80, color: 'bg-blue-600' },
  ];

  const softSkills: string[] = [
    'Problem Solving',
    'Communication',
    'Time Management',
    'Team Leadership',
    'Agile Development',
    'Client Relations'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full transition-colors">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            My Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-colors">
                    <div
                      className={`${skill.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%`, transition: `width 1.5s ease-out ${index * 0.2}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Soft Skills & Other Knowledge
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {['Git', 'Azure', 'VS Code', 'Jira', 'GitHub', 'Azure AI Studio', 'Docker', 'Google Document AI'].map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mb-3 transition-colors">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">{tool.charAt(0)}</span>
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
