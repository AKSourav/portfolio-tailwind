import React from 'react';

const Education = () => {
  const educationData = [
    {
      school: "Heritage Institute of Technology",
      degree: "B.Tech in Computer Science and Engineering (Data Science)",
      period: "Sep 2021 – May 2025",
      score: "CGPA: 8.81/10",
      location: "",
      glowColor: "bg-indigo-500/20",
      dotColor: "bg-indigo-600"
    },
    {
      school: "St. Joseph's Convent Higher Secondary School",
      degree: "Central Board of Secondary Education (CBSE)",
      period: "April 2019 – April 2020",
      score: "Percentage: 85.83%",
      location: "Chittaranjan, India",
      glowColor: "bg-purple-500/20",
      dotColor: "bg-purple-600"
    },
    {
      school: "Burnpur Riverside School",
      degree: "Indian Certificate of Secondary Education (ICSE)",
      period: "April 2017 – May 2018",
      score: "Percentage: 92.6%",
      location: "Kolkata, India",
      glowColor: "bg-indigo-500/20",
      dotColor: "bg-indigo-600"
    }
  ];

  const ScoreIcon = () => (
    <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );

  const EducationCard = ({ education }) => (
    <div className="relative group">
      <div className={`absolute -left-3 top-8 h-16 w-16 ${education.glowColor} rounded-full blur-xl hidden md:block`}></div>
      <div className={`absolute left-4 top-6 h-8 w-8 ${education.dotColor} rounded-full hidden md:block border-4 border-indigo-900`}></div>
      
      <div className="ml-0 md:ml-24 bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-800/50 hover:border-indigo-700/50 transition-all duration-300 transform hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              {education.school}
            </h3>
            <p className="text-xl text-indigo-300">{education.degree}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="px-4 py-1 bg-indigo-800/50 rounded-full text-indigo-200 text-sm">
              {education.period}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 p-3 bg-indigo-800/30 rounded-lg">
          <ScoreIcon />
          <span className="text-indigo-200">{education.score}</span>
        </div>
        {education.location && (
          <p className="text-indigo-400 mt-2">{education.location}</p>
        )}
      </div>
    </div>
  );

  return (
    <section id="education" className="py-20 bg-gradient-to-t from-neutral-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-indigo-600 rounded mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((education, index) => (
              <EducationCard key={index} education={education} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;