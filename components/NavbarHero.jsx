'use client';

import { useState } from 'react';

const NavbarHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="navbar_hero" className="min-h-screen relative bg-gradient-to-br from-indigo-950 via-purple-950 to-neutral-950">
      {/* Navigation */}
      <div className="relative">
        <nav className="fixed w-full z-50 bg-indigo-950/80 backdrop-blur-lg border-b border-indigo-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <a href="#" className="text-white font-bold text-xl">AKS</a>
              </div>
              
              <div className="hidden lg:flex items-center space-x-8">
                <a href="#about" className="text-indigo-300 hover:text-white transition-colors duration-300">About</a>
                <a href="#experience" className="text-indigo-300 hover:text-white transition-colors duration-300">Experience</a>
                <a href="#projects" className="text-indigo-300 hover:text-white transition-colors duration-300">Projects</a>
                <a href="#skills" className="text-indigo-300 hover:text-white transition-colors duration-300">Skills</a>
                <a href="#achievements" className="text-indigo-300 hover:text-white transition-colors duration-300">Achievements</a>
                <a href="#education" className="text-indigo-300 hover:text-white transition-colors duration-300">Education</a>
                <a href="#contact" className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300">Contact</a>
              </div>

              <div className="lg:hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="text-indigo-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  {!isOpen ? (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-900/80 backdrop-blur-lg">
                <a href="#about" className="block px-3 py-2 text-indigo-300 hover:text-white transition-colors duration-300">About</a>
                <a href="#experience" className="block px-3 py-2 text-indigo-300 hover:text-white transition-colors duration-300">Experience</a>
                <a href="#projects" className="block px-3 py-2 text-indigo-300 hover:text-white transition-colors duration-300">Projects</a>
                <a href="#skills" className="block px-3 py-2 text-indigo-300 hover:text-white transition-colors duration-300">Skills</a>
                <a href="#achievements" className="block px-3 py-2 text-indigo-300 hover:text-white transition-colors duration-300">Achievements</a>
                <a href="#education" className="block px-3 py-2 text-indigo-300 hover:text-white transition-colors duration-300">Education</a>
                <a href="#contact" className="block px-3 py-2 text-white bg-indigo-600 rounded-lg">Contact</a>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),rgba(0,0,0,0)_50%)] animate-pulse"></div>
          </div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight flex flex-col">
            <span>Hi, I'm </span><span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">Anupam Kumar Sourav</span>
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-200 mb-12">Full Stack Developer</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="px-8 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">Get in Touch</a>
            <a href="#projects" className="px-8 py-4 rounded-full border-2 border-indigo-500 text-white hover:bg-indigo-500/10 transition-all duration-300 transform hover:scale-105">View Projects</a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default NavbarHero;