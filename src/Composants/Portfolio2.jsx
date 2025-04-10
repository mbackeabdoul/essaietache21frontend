import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event for navbar styling and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = ['introduction', 'experiences', 'soft-skills', 'formations', 'projets', 'education', 'temoignages', 'blog', 'autres'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Abdoul</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#introduction" className={`transition hover:text-blue-400 ${activeSection === 'introduction' ? 'text-blue-400' : ''}`}>Accueil</a>
            <a href="#experiences" className={`transition hover:text-blue-400 ${activeSection === 'experiences' ? 'text-blue-400' : ''}`}>Expériences</a>
            <a href="#soft-skills" className={`transition hover:text-blue-400 ${activeSection === 'soft-skills' ? 'text-blue-400' : ''}`}>Compétences</a>
            <a href="#projets" className={`transition hover:text-blue-400 ${activeSection === 'projets' ? 'text-blue-400' : ''}`}>Projets</a>
            <a href="#blog" className={`transition hover:text-blue-400 ${activeSection === 'blog' ? 'text-blue-400' : ''}`}>Blog</a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-1">Contact</button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 p-4 absolute w-full">
            <div className="flex flex-col space-y-3">
              <a href="#introduction" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Accueil</a>
              <a href="#experiences" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Expériences</a>
              <a href="#soft-skills" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Compétences</a>
              <a href="#projets" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Projets</a>
              <a href="#blog" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Blog</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Introduction with animations */}
      <section id="introduction" className="max-w-6xl mx-auto px-4 pt-32 pb-20 flex flex-col items-center relative overflow-hidden">
        {/* Animated gradient circles in background */}
        <div className="absolute -z-10 w-full h-full overflow-hidden">
          <div className="animate-pulse absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="animate-pulse absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="animate-pulse delay-700 absolute top-40 right-40 w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl"></div>
        </div>
        
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-8 overflow-hidden relative animate-float shadow-lg shadow-blue-500/20">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20">
            <img src="/api/placeholder/80/50" alt="Avatar with laptop" className="w-full" />
          </div>
        </div>
        
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Abdoul Khoudoss!</span>
          </h1>
          <p className="text-xl text-gray-400">
            <span className="typed-text">Je code & je me détends 🍧</span>
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 animate-fadeIn animation-delay-300">
          <div className="flex gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-blue-400 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              React Native
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-purple-400 flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              WebRTC
            </span>
          </div>
          <div className="flex gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-green-400 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              React.js
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-yellow-400 flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              TypeScript
            </span>
          </div>
        </div>
        
        <p className="text-center text-gray-300 max-w-2xl mb-10 animate-fadeIn animation-delay-500 leading-relaxed">
          Développeur passionné spécialisé dans <span className="text-blue-400">React Native</span>, 
          je crée des applications mobiles <span className="text-purple-400">élégantes</span> et 
          <span className="text-green-400"> conviviales</span>. Mon objectif est de transformer des idées 
          en expériences digitales captivantes qui résolvent des problèmes réels.
        </p>
        
        <div className="flex gap-4 animate-fadeIn animation-delay-700">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1">
            Me Contacter
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition transform hover:-translate-y-1">
            Mon CV
          </button>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
        
        {/* Activity Stats */}
        <div className="absolute bottom-20 right-4 md:right-20 hidden md:flex flex-col items-center">
          <div className="transform -rotate-90 mb-4 text-sm text-gray-400">ACTIVITÉS</div>
          <div className="h-32 flex items-end space-x-1">
            <div className="w-1 h-6 bg-blue-400 rounded-t animate-bar-1"></div>
            <div className="w-1 h-12 bg-blue-400 rounded-t animate-bar-2"></div>
            <div className="w-1 h-8 bg-blue-400 rounded-t animate-bar-3"></div>
            <div className="w-1 h-16 bg-blue-400 rounded-t animate-bar-4"></div>
            <div className="w-1 h-10 bg-blue-400 rounded-t animate-bar-5"></div>
          </div>
        </div>
        
        {/* Tech dots */}
        <div className="absolute top-40 left-4 md:left-20 hidden md:block">
          <div className="flex flex-col gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-150"></div>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse delay-300"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse delay-500"></div>
          </div>
        </div>
      </section>

      {/* Mes Expériences Section */}
      <section id="experiences" className="max-w-6xl mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-1 text-center">MES EXPÉRIENCES</h2>
        <p className="text-sm text-gray-400 mb-12 text-center">EXPLORER MAINTENANT</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold">WebRTC / Développeur Logiciel</h3>
              <span className="text-gray-400">MAI 2022 - PRÉSENT, HYDERABAD</span>
            </div>
            
            <p className="text-gray-300 mb-4">
              Actuellement, je travaille sur des applications basées sur WebRTC. WebRTC est un projet Open Source facilitant le streaming en direct à très faible latence, 
              WebRTC est le meilleur de sa catégorie pour la vidéoconférence et la communication peer-to-peer. J'ai une solide expérience dans la création de layouts et d'applications réactifs.
            </p>
            
            <p className="text-gray-300">
              En tant que développeur React Native, j'ai de l'expérience dans la création d'applications pour les plateformes Android et iOS. De plus, ma compétence en React JS m'a doté des compétences nécessaires pour créer des pages web rapides, évolutives et dynamiques avec d'excellentes expériences utilisateur.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">React Native</span>
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">React.js</span>
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">WebRTC</span>
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section id="soft-skills" className="max-w-6xl mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-1 text-center">SOFT SKILLS</h2>
        <p className="text-sm text-gray-400 mb-12 text-center">MES COMPÉTENCES PERSONNELLES</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Communication</h3>
            <p className="text-gray-400 text-sm">Expression claire et écoute active</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Résolution de problèmes</h3>
            <p className="text-gray-400 text-sm">Analyse et solutions créatives</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Travail d'équipe</h3>
            <p className="text-gray-400 text-sm">Collaboration et adaptabilité</p>
          </div>
        </div>
      </section>

      {/* Mes Formations Section */}
      <section id="formations" className="max-w-6xl mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-1 text-center">MES FORMATIONS</h2>
        <p className="text-sm text-gray-400 mb-12 text-center">PARCOURS ÉDUCATIF</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 border-l-2 border-gray-800 pl-6 relative">
            <div className="absolute w-4 h-4 bg-gray-800 rounded-full -left-2 top-0"></div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Master en Développement Web</h3>
              <p className="text-gray-400">Université des Technologies | 2018 - 2020</p>
            </div>
            <p className="text-gray-300">
              Spécialisation en technologies front-end modernes et architecture d'applications.
            </p>
          </div>
          
          <div className="border-l-2 border-gray-800 pl-6 relative">
            <div className="absolute w-4 h-4 bg-gray-800 rounded-full -left-2 top-0"></div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Licence en Informatique</h3>
              <p className="text-gray-400">Institut des Sciences | 2015 - 2018</p>
            </div>
            <p className="text-gray-300">
              Formation en algorithmique, programmation et bases de données.
            </p>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="max-w-6xl mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-1 text-center">PROJETS</h2>
        <p className="text-sm text-gray-400 mb-12 text-center">DÉCOUVRIR MAINTENANT</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Projet 1 */}
          <div className="bg-gray-900 rounded-lg p-6 flex items-center">
            <div className="mr-4">
              <img src="/api/placeholder/50/50" alt="WebRTC" className="w-12 h-12 rounded" />
            </div>
            <div>
              <h3 className="font-bold mb-1">WebRTC</h3>
              <p className="text-sm text-gray-400">Projet de communication en temps réel open-source</p>
            </div>
          </div>
          
          {/* Projet 2 */}
          <div className="bg-gray-900 rounded-lg p-6 flex items-center">
            <div className="mr-4">
              <img src="/api/placeholder/50/50" alt="HireSlide" className="w-12 h-12 rounded" />
            </div>
            <div>
              <h3 className="font-bold mb-1">HireSlide</h3>
              <p className="text-sm text-gray-400">Plateforme de recrutement pour développeurs</p>
            </div>
          </div>
          
          {/* Projet 3 */}
          <div className="bg-gray-900 rounded-lg p-6 flex items-center">
            <div className="mr-4">
              <img src="/api/placeholder/50/50" alt="Verge Systems" className="w-12 h-12 rounded" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Verge Systems</h3>
              <p className="text-sm text-gray-400">Solutions logicielles d'entreprise</p>
            </div>
          </div>
          
          {/* Projet 4 */}
          <div className="bg-gray-900 rounded-lg p-6 flex items-center">
            <div className="mr-4">
              <img src="/api/placeholder/50/50" alt="Payoasis" className="w-12 h-12 rounded" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Payoasis</h3>
              <p className="text-sm text-gray-400">Solution sécurisée de traitement des paiements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Éducation & Certifications Section */}
      <section id="education" className="max-w-6xl mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-1 text-center">ÉDUCATION & CERTIFICATIONS</h2>
        <p className="text-sm text-gray-400 mb-12 text-center">QUALIFICATIONS</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Certifications</h3>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">AWS Certified Developer</h4>
                  <span className="text-gray-400">2023</span>
                </div>
                <p className="text-sm text-gray-300">Amazon Web Services</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">React Native Specialist</h4>
                  <span className="text-gray-400">2022</span>
                </div>
                <p className="text-sm text-gray-300">Meta Developer Certification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="temoignages" className="max-w-6xl mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-1 text-center">TÉMOIGNAGES</h2>
        <p className="text-sm text-gray-400 mb-12 text-center">CE QU'ILS DISENT</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "Ibrahim a livré un travail exceptionnel sur notre application mobile. Son expertise en React Native a permis de créer une interface utilisateur fluide et intuitive."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Dupont</h4>
                  <p className="text-sm text-gray-400">Directrice Produit, TechVision</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "Excellent développeur avec une capacité remarquable à résoudre des problèmes complexes. Son travail sur notre solution WebRTC a été crucial pour notre produit."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Marc Laurent</h4>
                  <p className="text-sm text-gray-400">CTO, StreamConnect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog ou Publications Section */}
      <section id="blog" className="max-w-6xl mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-1 text-center">BLOG OU PUBLICATIONS</h2>
        <p className="text-sm text-gray-400 mb-12 text-center">MES ARTICLES</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <span className="text-sm text-gray-400">12 Mars 2024</span>
                <h3 className="text-xl font-bold my-2">Optimiser les performances de React Native</h3>
                <p className="text-gray-300 mb-4">Découvrez comment améliorer les performances de vos applications React Native avec ces techniques avancées.</p>
                <a href="#" className="text-blue-400 hover:underline">Lire l'article →</a>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <span className="text-sm text-gray-400">25 Février 2024</span>
                <h3 className="text-xl font-bold my-2">Introduction à WebRTC pour les développeurs</h3>
                <p className="text-gray-300 mb-4">Un guide complet pour comprendre et implémenter WebRTC dans vos applications web et mobiles.</p>
                <a href="#" className="text-blue-400 hover:underline">Lire l'article →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres Sections */}
      <section id="autres" className="max-w-6xl mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-1 text-center">AUTRES SECTIONS</h2>
        <p className="text-sm text-gray-400 mb-12 text-center">INFORMATIONS COMPLÉMENTAIRES</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Langues</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Français</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Anglais</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Centres d'intérêt</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-800 px-3 py-1 rounded-full">Photographie</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">Voyage</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">Nouvelles technologies</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">Lecture</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">Cuisine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-1 text-center">CONTACT</h2>
        <p className="text-sm text-gray-400 mb-12 text-center">PRENEZ CONTACT AVEC MOI</p>
        
        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre nom"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre message..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Abdoul Khoudoss</h3>
              <p className="text-gray-400 mt-2">Développeur React Native et WebRTC</p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 my-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Ibrahim. Tous droits réservés.</p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-8 right-8 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  );
}