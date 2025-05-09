import React from 'react';
import { CalendarDays } from 'lucide-react';

interface Job {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      company: 'Accenture Pvt. Ltd.',
      position: 'Full Stack LLM Development Senior Analyst',
      period: 'Dec 2023 - Present',
      description: 'Working in Deployment & Design team, I led the integration of client-specific designs across multiple applications. I focused on delivering clean, configurable solutions tailored to client requirements, while maintaining a zero-defect resolution tracker. Involved in making critical design decisions, validating user inputs, and ensuring high-quality, scalable outcomes for enterprise applications.',
      achievements: [
        'Delivered 100% defect-free deployments by maintaining a rigorous resolution tracker and performing proactive QA checks',
        'Successfully integrated cross-functional components across multiple teams, enabling smooth end-to-end functionality',
        'Streamlined client input validation workflows, improving overall form reliability and reducing manual errors',
        'Took ownership of requirement analysis and solution design, ensuring client satisfaction and faster turnaround',
        'Contributed to the early-stage implementation of LLM-based logic, enhancing automation within deployment pipelines',
        'Recognized by leadership for proactive communication and independently resolving complex design issues',
        'Accelerated design feedback loops by introducing a clearer configuration model, cutting down review iterations by 25%'
      ]
    },
    {
      id: 2,
      company: 'Accenture Pvt. Ltd.',
      position: 'Application Developer Analyst',
      period: 'Sept 2021 - Nov 2023',
      description: 'with a strong focus on backend systems and intelligent document processing. I developed and maintained SQL Server-based systems, created stored procedures for data retrieval, and handled database design and implementation. Additionally, I worked on AI-powered document processing tools such as Azure Form Recognizer and FOTT, contributing to intelligent automation in document workflows.',
      achievements: [
        'Built validation workflows using JavaScript and Regex, enhancing form accuracy by reducing user input errors significantly',
        'Integrated web applications with backend databases, ensuring stable data flow between frontend interfaces and backend systems',
        'Trained and deployed AI models for processing diverse documents such as invoices, insurance certificates, and healthcare forms using: Azure Form Recognizer (Custom Model & Classifier), Azure FOTT (Form OCR Testing Too, Generative AI-based custom model platforms',
        'Optimized document automation, reducing manual processing time and improving accuracy in form recognition and classification'
      ]
    },
    {
      id: 3,
      company: 'AtoS | Syntel',
      position: 'Associate Consultant',
      period: 'Nov 2018 - Aug 2021',
      description: 'Worked across both development and QA roles, contributing to the design, development, testing, and deployment of scalable web applications. As a Java Developer, I built and integrated backend systems using Java and relational databases. Transitioning into Automation Testing, I focused on validating new features through detailed test planning and execution, ensuring application quality from development through production release. This hybrid experience gave me strong cross-functional collaboration skills and a deep understanding of the software development lifecycle.',
      achievements: [
        'Developed and deployed robust Java-based components for high-traffic web applications using enterprise-grade application servers',
        'Integrated web applications with backend databases to enable dynamic, data-driven functionality',
        'Designed and executed functional and automated tests to ensure software met all business and technical requirements',
        'Reduced defect leakage by 25% through effective QA strategies and early bug detection',
        'Reviewed and maintained requirement documentation (SRS, SDD), improving test case alignment and traceability',
        'Provided QA and development support throughout UAT and post-implementation phases to ensure stable production releases',
        'Optimized application performance through backend logic enhancements and SQL query tuning'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full transition-colors">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Work History
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/40 transition-colors"></div>

            {jobs.map((job, index) => (
              <div
                key={job.id}
                className={`mb-12 relative animate-fade-in ${
                  index % 2 === 0
                    ? 'sm:pr-8 sm:text-right sm:ml-auto sm:mr-1/2 sm:transform sm:translate-x-4'
                    : 'sm:pl-8 sm:text-left sm:mr-auto sm:ml-1/2 sm:transform sm:-translate-x-4'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:block absolute -left-2 sm:left-0 top-5 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-md transform sm:-translate-x-1/2 transition-colors"></div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.position}</h3>
                    <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium">
                      <CalendarDays size={16} /> {job.period}
                    </span>
                  </div>
                  <div className="mb-4 text-sm sm:text-base">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-md font-medium transition-colors">
                      {job.company}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 list-inside list-disc">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;