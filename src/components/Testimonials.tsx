import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Praveen has played a crucial role in implementing Gen AI features in CIMB set up. Also his invlovment in other client developments like WeWork helps successful completion of client deployment from Build till UAT completion. He is also able to guide team members on configuration and training and this adds more value to the team",
      name: "Prakash Ghatage",
      position: "Project Manager",
      company: "Accenture"
    },
    {
      id: 2,
      content: "Praveen has done tremendous job in improving accuracy for Mondelez using supplier tranining. He has a strong grasp of project configuration and a keen understanding of client requirements. Notably he has demonstrated significant improvements in accuracy across various clients. Praveen's proactive approach to task management and willingness to assist others during challengers are commendable. Having successfully managed clients from start to producation, Praveen is recognized for being supportive and friendly in the workplace, making him a valuable team member.",
      name: "JyothiMahalingam, Manoharan",
      position: "Associate Manager & People Lead",
      company: "Accenture"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full transition-colors">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg transition-colors relative">
            <div className="absolute -top-5 left-8 text-blue-600 dark:text-blue-400 transition-colors">
              <Quote size={40} />
            </div>
            
            <div className="pt-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-300 ${
                    currentIndex === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                  }`}
                >
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? 'bg-blue-600 dark:bg-blue-400 w-6'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;