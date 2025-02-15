import React from 'react';

const About = () => {
  const stats = [
    { number: "2+", text: "Years of Experience" },
    { number: "500+", text: "Problems Solved" },
    { number: "30+", text: "Projects" },
    { number: "1451", text: "Codeforces Rating" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-indigo-950 to-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="h-1 w-20 bg-indigo-600 rounded"></div>
            </div>
            
            <div className="space-y-4 text-indigo-200">
              <p className="text-lg">
                I'm a Full Stack Developer with a passion for building scalable web applications and solving complex problems. 
                Currently pursuing my B.Tech in Computer Science and Engineering (Data Science) at Heritage Institute of Technology 
                with a CGPA of 8.81/10.
              </p>
              
              <p className="text-lg">
                My expertise spans across modern web technologies, cloud platforms, and DevOps practices. 
                I've worked with microservices architecture, containerization, and various cloud services 
                to build efficient and scalable solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-indigo-900/50 rounded-lg text-indigo-200 border border-indigo-800/50">
                <span className="font-semibold">Email:</span> anupamks2001@gmail.com
              </div>
              <div className="px-4 py-2 bg-indigo-900/50 rounded-lg text-indigo-200 border border-indigo-800/50">
                <span className="font-semibold">Phone:</span> +91 9523009604
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/AKSourav" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-indigo-900/50 rounded-lg text-indigo-200 hover:bg-indigo-800/50 transition-all duration-300 transform hover:scale-105 border border-indigo-800/50"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/anupamks2001" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-indigo-900/50 rounded-lg text-indigo-200 hover:bg-indigo-800/50 transition-all duration-300 transform hover:scale-105 border border-indigo-800/50"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:anupamks2001@gmail.com" 
                className="p-3 bg-indigo-900/50 rounded-lg text-indigo-200 hover:bg-indigo-800/50 transition-all duration-300 transform hover:scale-105 border border-indigo-800/50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-indigo-900/30 p-6 rounded-lg border border-indigo-800/50 hover:bg-indigo-800/30 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-indigo-300">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;