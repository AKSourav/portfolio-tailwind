import React from 'react';

const Skills = () => {
  const skillsData = {
    languages: {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      ),
      title: "Languages",
      skills: [
        { name: "C++", proficiency: 95 },
        { name: "JavaScript", proficiency: 90 },
        { name: "Python", proficiency: 90 },
        { name: "C", proficiency: 80 },
        { name: "TypeScript", proficiency: 70 },
      ]
    },
    frameworks: {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      ),
      title: "Frameworks",
      tags: ["Next.js", "React", "Node.js", "Express.js", "Django REST", "FastAPI"]
    },
    databases: {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      ),
      title: "Databases",
      tags: ["MySQL", "DynamoDB", "MongoDB", "PostgreSQL"]
    },
    tools: {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      ),
      title: "Tools",
      tags: ["Docker", "Git", "AWS", "Postman", "RabbitMQ", "Kubernetes"]
    }
  };

  const ProgressBar = ({ percentage }) => (
    <div className="w-32 bg-indigo-950/50 rounded-full h-2">
      <div 
        className="bg-indigo-500 rounded-full h-2 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );

  const SkillCard = ({ title, icon, children }) => (
    <div className="group bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-700/50 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center mb-4">
        <svg className="w-6 h-6 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );

  const TagList = ({ tags }) => (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-indigo-800/50 rounded-full text-sm text-indigo-200 border border-indigo-700/50"
        >
          {tag}
        </span>
      ))}
    </div>
  );

  const SkillList = ({ skills }) => (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-indigo-200">{skill.name}</span>
          <ProgressBar percentage={skill.proficiency} />
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-indigo-950 to-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-indigo-600 rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard title={skillsData.languages.title} icon={skillsData.languages.icon}>
            <SkillList skills={skillsData.languages.skills} />
          </SkillCard>

          <SkillCard title={skillsData.frameworks.title} icon={skillsData.frameworks.icon}>
            <TagList tags={skillsData.frameworks.tags} />
          </SkillCard>

          <SkillCard title={skillsData.databases.title} icon={skillsData.databases.icon}>
            <TagList tags={skillsData.databases.tags} />
          </SkillCard>

          <SkillCard title={skillsData.tools.title} icon={skillsData.tools.icon}>
            <TagList tags={skillsData.tools.tags} />
          </SkillCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;