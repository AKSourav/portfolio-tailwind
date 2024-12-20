"use client"
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/10 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Email Me</h3>
              </div>
              <a href="mailto:anupamks2001@gmail.com" className="text-neutral-300 hover:text-blue-400 transition-colors duration-300">
                anupamks2001@gmail.com
              </a>
            </div>

            <div className="group bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-500/10 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Call Me</h3>
              </div>
              <a href="tel:+919523009604" className="text-neutral-300 hover:text-purple-400 transition-colors duration-300">
                +91 9523009604
              </a>
            </div>

            <div className="group bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50 hover:border-pink-500/50 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-pink-500/10 rounded-xl mr-4">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Social Links</h3>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AKSourav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-700/50 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-600/50 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/anupamks2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-700/50 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-600/50 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-900/50 border border-neutral-700/50 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-900/50 border border-neutral-700/50 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-neutral-900/50 border border-neutral-700/50 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl px-6 py-3 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default ContactSection;