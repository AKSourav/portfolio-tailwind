import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/AKSourav",
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      ),
      color: "text-blue-400",
      hoverBg: "hover:bg-blue-500/10"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/anupamks2001",
      icon: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      ),
      color: "text-purple-400",
      hoverBg: "hover:bg-purple-500/10"
    }
  ];

  const contactInfo = [
    {
      type: "email",
      value: "anupamks2001@gmail.com",
      href: "mailto:anupamks2001@gmail.com",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      ),
      hoverBg: "group-hover:bg-blue-500/10"
    },
    {
      type: "phone",
      value: "+91 9523009604",
      href: "tel:+919523009604",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      ),
      hoverBg: "group-hover:bg-purple-500/10"
    }
  ];

  const ArrowIcon = () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
    </svg>
  );

  return (
    <footer id="footer" className="relative bg-neutral-950 text-neutral-400">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          {/* About */}
          <div className="bg-neutral-900/50 backdrop-blur-lg rounded-2xl p-8 border border-neutral-800/50 hover:border-blue-500/20 transition-all duration-500">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">AKS</h3>
            <p className="text-neutral-400 mb-6">
              Full Stack Developer passionate about building scalable web applications and solving complex problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-neutral-800/50 rounded-xl ${social.color} hover:text-white ${social.hoverBg} transition-all duration-300`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-neutral-900/50 backdrop-blur-lg rounded-2xl p-8 border border-neutral-800/50 hover:border-purple-500/20 transition-all duration-500">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center">
                    <ArrowIcon />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-neutral-900/50 backdrop-blur-lg rounded-2xl p-8 border border-neutral-800/50 hover:border-pink-500/20 transition-all duration-500">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href} 
                  className="flex items-center text-neutral-400 hover:text-white transition-all duration-300 group"
                >
                  <div className={`p-2 bg-neutral-800/50 rounded-lg mr-3 ${contact.hoverBg}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {contact.icon}
                    </svg>
                  </div>
                  {contact.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-neutral-800/50 text-center">
          <p className="text-neutral-500">© 2024 Anupam Kumar Sourav. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
    </footer>
  );
};

export default Footer;