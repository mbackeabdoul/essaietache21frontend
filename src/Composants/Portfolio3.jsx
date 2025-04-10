import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Track scroll position for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
    setIsNavOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 border-b border-orange-600 border-opacity-20">
        <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home" onClick={() => scrollToSection('home')} className="text-orange-500 font-bold text-2xl">LOGO</a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-white focus:outline-none"
            >
              {isNavOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'experience', 'skills', 'education', 'projects', 'testimonials', 'blog', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`${
                  activeSection === item ? 'text-orange-500' : 'text-gray-300 hover:text-orange-400'
                } transition-colors duration-300 capitalize`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item === 'home' ? 'Home' : 
                 item === 'about' ? 'About me' : 
                 item === 'experience' ? 'Experience' : 
                 item === 'skills' ? 'Skills' : 
                 item === 'education' ? 'Education' : 
                 item === 'projects' ? 'Projects' : 
                 item === 'testimonials' ? 'Testimonials' : 
                 item === 'blog' ? 'Blog' : 'Contact'}
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 border-b border-orange-600 border-opacity-20"
          >
            <div className="px-4 py-2 space-y-3">
              {['home', 'about', 'experience', 'skills', 'education', 'projects', 'testimonials', 'blog', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className={`${
                    activeSection === item ? 'text-orange-500' : 'text-gray-300'
                  } block py-2 capitalize`}
                >
                  {item === 'home' ? 'Home' : 
                   item === 'about' ? 'About me' : 
                   item === 'experience' ? 'Experience' : 
                   item === 'skills' ? 'Skills' : 
                   item === 'education' ? 'Education' : 
                   item === 'projects' ? 'Projects' : 
                   item === 'testimonials' ? 'Testimonials' : 
                   item === 'blog' ? 'Blog' : 'Contact'}
                </a>
              ))}
              <div className="pt-2">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-400">Hi! I am</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Mahmood Fazile</h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-6">UI/UX designer</h2>
              </motion.div>

              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </motion.div>

              <motion.div 
                className="flex space-x-4 pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors duration-300"
                >
                  Hire Me
                </a>
                <a 
                  href="#" 
                  className="border border-gray-600 hover:border-orange-500 text-white px-6 py-3 rounded-md transition-colors duration-300"
                >
                  Download CV
                </a>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                <img 
                  src="/api/placeholder/400/600" 
                  alt="Profile" 
                  className="relative z-10 h-auto max-w-full rounded-xl"
                />
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-orange-500 text-2xl font-bold">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-orange-500 text-2xl font-bold">20+</div>
              <div className="text-gray-400">Projects Done</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-orange-500 text-2xl font-bold">80+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </motion.div>
        </div>

        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500 to-transparent opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-t from-orange-500 to-transparent opacity-5"></div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Introduction</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img src="/api/placeholder/600/400" alt="Working" className="rounded-lg shadow-lg" />
            </motion.div>

            <motion.div 
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Who I Am</h3>
              <p className="text-gray-300">
                I'm Mahmood Fazile, a passionate UI/UX designer with over 5 years of experience creating beautiful and functional digital experiences. 
                I believe that design should not only look good but also solve problems and create meaningful experiences for users.
              </p>
              <p className="text-gray-300">
                My approach combines creativity with strategic thinking to deliver designs that are not only visually appealing but also user-centered and business-aligned.
                I'm dedicated to continuous learning and staying updated with the latest design trends and technologies.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-gray-300">UI/UX Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-gray-300">Wireframing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-gray-300">Prototyping</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-gray-300">User Research</span>
                </div>
              </div>

              <motion.div 
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors duration-300 inline-block"
                >
                  Learn More About Me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img src="/api/placeholder/600/600" alt="Profile" className="rounded-lg shadow-lg" />
            </motion.div>

            <motion.div 
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-500">UI/UX Designer & Web Developer</h3>
              <p className="text-gray-300">
                I am a UI/UX designer with a passion for creating intuitive and engaging user experiences.
                My design philosophy centers around understanding user needs and translating them into visually appealing interfaces
                that drive engagement and satisfaction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Personal Info</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex">
                      <span className="font-medium w-24">Name:</span>
                      <span>Mahmood Fazile</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Age:</span>
                      <span>28 Years</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Location:</span>
                      <span>New York, USA</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Experience:</span>
                      <span>5+ Years</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <span>contact@mahmoodfazile.com</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      <span>+1 123 456 7890</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>New York, USA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold">Senior UI/UX Designer - TechCorp</h3>
              </div>
              <p className="text-gray-400 mb-2">Jan 2020 - Dec 2022</p>
              <p className="text-gray-300">Worked on user experience design for mobile apps, leading a team of designers to create intuitive interfaces.</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold">UI Designer - Creative Agency</h3>
              </div>
              <p className="text-gray-400 mb-2">Mar 2018 - Dec 2019</p>
              <p className="text-gray-300">Designed user interfaces for web applications, focusing on usability and aesthetics.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="bg-gray-900 rounded-lg p-4 flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-gray-300">Figma</span>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-gray-300">Adobe XD</span>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-gray-300">Sketch</span>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-gray-300">User Research</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5l0 7h-3v-4h-3v4h-3v-7z" />
                </svg>
                <h3 className="text-xl font-bold">Master in Design</h3>
              </div>
              <p className="text-gray-400 mb-2">2016 - 2018</p>
              <p className="text-gray-300">University of Design, New York</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5l0 7h-3v-4h-3v4h-3v-7z" />
                </svg>
                <h3 className="text-xl font-bold">Bachelor in Computer Science</h3>
              </div>
              <p className="text-gray-400 mb-2">2012 - 2016</p>
              <p className="text-gray-300">Tech University, California</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src="/api/placeholder/600/400" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-gray-300 mb-4">A mobile app for managing tasks with a clean and intuitive interface.</p>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                  View Project →
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src="/api/placeholder/600/400" alt="Project 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Website</h3>
                <p className="text-gray-300 mb-4">A responsive e-commerce website for a clothing brand.</p>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                  View Project →
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src="/api/placeholder/600/400" alt="Project 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-300 mb-4">A personal portfolio to showcase my design work.</p>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="text-lg font-bold">John Doe</h3>
              </div>
              <p className="text-gray-400 mb-2">Project Manager</p>
              <p className="text-gray-300">"Mahmood is an excellent designer with a keen eye for detail. His work significantly improved our product's user experience."</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="text-lg font-bold">Jane Smith</h3>
              </div>
              <p className="text-gray-400 mb-2">CEO, Startup Inc.</p>
              <p className="text-gray-300">"Working with Mahmood was a pleasure. His designs are not only beautiful but also highly functional."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src="/api/placeholder/600/400" alt="Blog 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Design Trends in 2025</h3>
                <p className="text-gray-400 mb-2">April 7, 2025</p>
                <p className="text-gray-300 mb-4">A look at the upcoming design trends for the next year.</p>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                  Read More →
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src="/api/placeholder/600/400" alt="Blog 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Importance of User Research</h3>
                <p className="text-gray-400 mb-2">March 15, 2025</p>
                <p className="text-gray-300 mb-4">Why user research is crucial for successful design projects.</p>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                  Read More →
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src="/api/placeholder/600/400" alt="Blog 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Creating Intuitive Interfaces</h3>
                <p className="text-gray-400 mb-2">February 10, 2025</p>
                <p className="text-gray-300 mb-4">Tips for designing interfaces that users love.</p>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                  Read More →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Get in Touch</h3>
              <p className="text-gray-300 mb-6">
                I'm available for freelance projects, full-time positions, or consulting opportunities. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">contact@mahmoodfazile.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+1 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">New York, USA</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <form className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-orange-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-orange-500"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-orange-500 h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;