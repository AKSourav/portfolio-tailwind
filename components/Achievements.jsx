import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Competitive Programming",
      icon: (
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M9 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      ),
      points: [
        "Achieved the highest rating of 1451 (Specialist) on Codeforces",
        "500+ problems solved across various online judges",
        "Received a Problem Solving (Intermediate) Certificate"
      ],
      glowColor: "bg-indigo-600/20"
    },
    {
      title: "Competitions",
      icon: (
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      ),
      points: [
        "Finalist in Smart India Hackathon (SIH) 2024",
        "Secured 3rd position in GDSC Icebreaker 3.0",
        "Secured 5th position in HackHeritage 2024"
      ],
      glowColor: "bg-purple-600/20"
    },
    {
      title: "Academic Excellence",
      icon: (
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      ),
      scores: [
        { label: "B.Tech CGPA", value: "8.81/10" },
        { label: "Class XII", value: "85.83%" },
        { label: "Class X", value: "92.6%" }
      ],
      glowColor: "bg-indigo-600/20"
    }
  ];

  const AchievementCard = ({ achievement }) => {
    return (
      <div className="group bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-800/50 hover:border-indigo-700/50 transition-all duration-300 transform hover:scale-105">
        <div className={`absolute h-32 w-32 ${achievement.glowColor} rounded-full blur-2xl -z-10`}></div>
        <div className="flex items-center mb-6">
          <div className="p-3 bg-indigo-900/50 rounded-lg mr-4">
            <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {achievement.icon}
            </svg>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text">
            {achievement.title}
          </h3>
        </div>
        <div className="space-y-4">
          {achievement.points && achievement.points.map((point, index) => (
            <p key={index} className="text-indigo-200">• {point}</p>
          ))}
          {achievement.scores && achievement.scores.map((score, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-indigo-900/50 rounded-lg">
              <span className="text-indigo-200">{score.label}</span>
              <span className="text-white font-bold">{score.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-neutral-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-indigo-600 rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;