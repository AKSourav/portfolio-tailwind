import React from 'react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "SDE Intern",
      company: "Avinya NeuroTech",
      period: "March 2024 – Present",
      achievements: [
        "Built scalable medical treatment platform with microservices architecture, reducing seizure prediction time by 40%",
        "Implemented parallel processing with RabbitMQ, achieving 50% CPU optimization"
      ],
      skills: ["FastAPI", "PostgreSQL", "RabbitMQ", "Docker", "AWS"],
      dotColor: "bg-indigo-400",
      timelineDotColor: "bg-indigo-600"
    },
    {
      title: "Full Stack Developer Intern",
      company: "Settyl Tech India Private Limited",
      period: "July 2023 – Nov 2023",
      achievements: [
        "Developed inventory management system improving accuracy by 35% and operational efficiency by 20%",
        "Created 20+ RESTful APIs and integrated MongoDB triggers for 40% faster data processing"
      ],
      skills: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Azure"],
      dotColor: "bg-purple-400",
      timelineDotColor: "bg-purple-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-neutral-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 rounded mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${exp.timelineDotColor} rounded-full border-4 border-indigo-900`}></div>
                </div>
                <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-8 ml-4 mr-4 border border-indigo-800/50 hover:border-indigo-700/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-indigo-300">{exp.company}</span>
                      <span className="text-indigo-400">{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <div className={`w-2 h-2 mt-2 rounded-full ${exp.dotColor} mr-3`}></div>
                        <p className="text-indigo-200">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-indigo-800/50 rounded-full text-sm text-indigo-200 border border-indigo-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;