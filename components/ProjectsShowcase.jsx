import React from 'react';

const ProjectsShowcase = () => {
  const projects = [{
      id: 0,
      name: "Scalable WebSocket",
      description: "A high-performance, event-driven WebSocket notification system built with the ws package and Redis pub/sub, designed for horizontal scalability.",
      image: "/projects/scalable-ws.png?text=Scalable+WS+Server",
      githubUrl: "https://github.com/AKSourav/scalable-websocket.server",
      technologies: ["TypeScript","WS", "NodeJS", "Redis", "AWS"]
    },
    {
      id: 1,
      name: "SignWave",
      description: "Real-Time ISL to English Translator Web-App",
      image: "/projects/signwave1.png?text=ISL+Platform",
      githubUrl: "https://github.com/AKSourav/SignWave-web",
      technologies: ["Reactjs", "WebRTC", "Django REST", "PostgreSQL", "FastApi", "AWS"]
    },
    {
      id: 2,
      name: "Isolate",
      description: "Web-based GUI for Docker deployments on Kubernetes with automated scaling and monitoring",
      image: "/projects/isolate.png?text=Kubernetes+Dashboard",
      githubUrl: "https://github.com/AKSourav/Isolate",
      technologies: ["NodeJS", "NextJS", "Docker", "Kubernetes", "AWS"]
    },
    {
      id: 3,
      name: "ScrapTrade",
      description: "User-friendly platform for recyclable materials trading with integrated map-based pickup system",
      image: "/projects/scrapetrade.png?text=ScrapTrade+Platform",
      githubUrl: "https://github.com/AKSourav/WasteManagement.Web",
      technologies: ["NextJS", "Django REST", "PostgreSQL", "Maps API"]
    },
    {
      id: 4,
      name: "ConnectChat",
      description: "Real-Time Chatting Application",
      image: "/projects/chat.png?text=Connect+Platform",
      githubUrl: "https://github.com/AKSourav/MERN-CHAT-APP",
      technologies: ["Reactjs", "Nodejs", "Socket.IO", "MongoDB", "Cloudinary"]
    }
  ];

  const GitHubIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/50 hover:border-indigo-700/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
      <img 
        src={project.image} 
        alt={`${project.name} Project Preview`} 
        className="w-full h-48 object-cover rounded-lg mb-6"
      />
      
      <div className="absolute top-4 right-4">
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-300 hover:text-white transition-colors duration-300"
        >
          <GitHubIcon />
        </a>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-indigo-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-indigo-800/50 rounded-full text-sm text-indigo-200 border border-indigo-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-indigo-950 to-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-indigo-600 rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;