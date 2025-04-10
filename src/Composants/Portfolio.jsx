import React, { useState, useEffect, useRef } from "react";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Book, 
  Award, 
  Star, 
  Code, 
  Briefcase, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  Users, 
  Lightbulb, 
  RefreshCw, 
  Palette, 
  Clock 
} from "lucide-react";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [activeSection, setActiveSection] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  
  // Références pour le scrolling
  const introRef = useRef(null);
  const experienceRef = useRef(null);
  const softSkillsRef = useRef(null);
  const formationsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const testimoniesRef = useRef(null);
  const blogRef = useRef(null);
  const otherRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Animation au scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -20% 0px"
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedItems(prev => [...prev, entry.target.id]);
          
          // Mettre à jour la section active dans la navigation
          if (entry.intersectionRatio >= 0.1) {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const sections = [
      introRef.current,
      experienceRef.current,
      softSkillsRef.current,
      formationsRef.current,
      projectsRef.current,
      educationRef.current,
      testimoniesRef.current,
      blogRef.current,
      otherRef.current,
      skillsRef.current,
      contactRef.current
    ];
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Animation helpers
  const isAnimated = (id) => animatedItems.includes(id);
  const animationClass = (id) => isAnimated(id) ? "animate-appear" : "opacity-0";

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans overflow-x-hidden">
      {/* Navigation fixe */}
      <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
        <div className="flex justify-between items-center p-4 px-8 md:px-16">
          <div className="font-bold text-xl">Mon Portfolio</div>
          
          {/* Menu mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          
          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-8">
            <li className={`cursor-pointer hover:text-purple-600 transition ${activeSection === "intro" ? "font-medium text-purple-600" : "text-gray-600"}`} onClick={() => scrollToSection(introRef)}>Intro</li>
            <li className={`cursor-pointer hover:text-purple-600 transition ${activeSection === "experience" ? "font-medium text-purple-600" : "text-gray-600"}`} onClick={() => scrollToSection(experienceRef)}>Expériences</li>
            <li className={`cursor-pointer hover:text-purple-600 transition ${activeSection === "projects" ? "font-medium text-purple-600" : "text-gray-600"}`} onClick={() => scrollToSection(projectsRef)}>Projets</li>
            <li className={`cursor-pointer hover:text-purple-600 transition ${activeSection === "formations" ? "font-medium text-purple-600" : "text-gray-600"}`} onClick={() => scrollToSection(formationsRef)}>Formations</li>
            <li className={`cursor-pointer hover:text-purple-600 transition ${activeSection === "contact" ? "font-medium text-purple-600" : "text-gray-600"}`} onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </div>
        
        {/* Menu mobile overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="py-4 px-8 space-y-4">
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(introRef)}>Introduction</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(experienceRef)}>Mes Expériences</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(softSkillsRef)}>Soft Skills</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(formationsRef)}>Mes Formations</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(projectsRef)}>Projets</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(educationRef)}>Éducation & Certifications</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(testimoniesRef)}>Témoignages</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(blogRef)}>Blog</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(otherRef)}>Autres</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(skillsRef)}>Compétences</li>
              <li className="py-2 cursor-pointer hover:text-purple-600 transition" onClick={() => scrollToSection(contactRef)}>Contact</li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col items-center justify-center text-center px-4">
        <div className="relative">
          <span className="absolute -left-8 top-0 text-4xl text-purple-400 animate-float">★</span>
          <h1 className="text-4xl md:text-6xl font-bold animate-slide-up">PORTFOLIO</h1>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>PRODUCT</h1>
          <div className="flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mt-2 animate-slide-up" style={{ animationDelay: "0.4s" }}>DESIGNER</h1>
            <span className="absolute -right-8 text-4xl text-orange-400 animate-float-delay">◆</span>
          </div>
          <div className="absolute -top-12 right-0 hidden md:block">
            <svg className="w-32 h-32 text-yellow-400 animate-draw" viewBox="0 0 100 100">
              <path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>
          <div className="absolute -left-12 bottom-8 hidden md:block">
            <div className="w-6 h-6 bg-teal-400 rotate-45 animate-bounce-slow"></div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection(introRef)} 
          className="mt-16 flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition transform hover:scale-105 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          En savoir plus <ChevronDown size={18} />
        </button>
      </section>

      {/* Introduction Section */}
      <section id="intro" ref={introRef} className={`px-6 md:px-16 py-16 md:py-24 ${animationClass("intro")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-purple-400 rounded-full mr-4 flex-shrink-0"></span>
          INTRODUCTION
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center h-full transform hover:scale-105 transition-transform duration-300">
              <div className="w-full aspect-square bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-5xl">
                  <User className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Je suis un designer produit passionné avec plus de 5 ans d'expérience dans la création d'interfaces utilisateur intuitives et esthétiques. Ma mission est de résoudre des problèmes complexes à travers un design centré sur l'utilisateur.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Spécialisé dans les applications mobiles et les plateformes SaaS, j'applique une approche méthodique qui combine recherche utilisateur, prototypage itératif et tests d'utilisabilité pour créer des expériences mémorables qui répondent aux besoins des utilisateurs tout en atteignant les objectifs commerciaux.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
                Mon CV <ArrowRight size={16} />
              </button>
              <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition">
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" ref={experienceRef} className={`px-6 md:px-16 py-16 md:py-24 bg-white ${animationClass("experience")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-orange-400 rounded-full mr-4 flex-shrink-0"></span>
          MES EXPÉRIENCES
        </h2>
        
        <div className="space-y-12">
          {/* Experience 1 */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 group">
            <div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="text-purple-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">Mars 2023 - Présent</div>
              <h3 className="font-bold text-xl mb-3">Novus Design - Senior Product Designer</h3>
              <p className="text-gray-700">
                Conception et amélioration d'interfaces utilisateur pour plusieurs produits SaaS à forte croissance. Direction d'une équipe de 3 designers juniors et collaboration étroite avec les équipes produit et développement. Mise en place d'un système de design évolutif qui a permis d'accélérer le processus de développement de 40%.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <SkillTag>UX Design</SkillTag>
                <SkillTag>UI Design</SkillTag>
                <SkillTag>Management</SkillTag>
                <SkillTag>Design Systems</SkillTag>
              </div>
            </div>
          </div>
          
          {/* Experience 2 */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 group">
            <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">Juin 2021 - Février 2023</div>
              <h3 className="font-bold text-xl mb-3">Apex Interactive - UI/UX Designer</h3>
              <p className="text-gray-700">
                Conception d'interfaces pour applications mobiles et web dans les secteurs de la finance et de la santé. Réalisation d'une refonte complète d'une application de banque mobile qui a augmenté l'engagement utilisateur de 35%. Mise en place de processus de recherche utilisateur et de tests d'utilisabilité.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <SkillTag>Mobile Design</SkillTag>
                <SkillTag>User Research</SkillTag>
                <SkillTag>Wireframing</SkillTag>
                <SkillTag>Prototyping</SkillTag>
              </div>
            </div>
          </div>
          
          {/* Experience 3 */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 group">
            <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="text-green-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">Janvier - Mai 2021</div>
              <h3 className="font-bold text-xl mb-3">Prism Digital - Product Design Intern</h3>
              <p className="text-gray-700">
                Stage de fin d'études focalisé sur l'amélioration de l'expérience utilisateur d'une plateforme e-commerce. Collaboration avec les équipes marketing et développement pour implémenter des designs centrés sur l'augmentation des conversions.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <SkillTag>E-commerce</SkillTag>
                <SkillTag>Conversion Design</SkillTag>
                <SkillTag>A/B Testing</SkillTag>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section id="softSkills" ref={softSkillsRef} className={`px-6 md:px-16 py-16 md:py-24 bg-[#f5f5f5] ${animationClass("softSkills")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-teal-400 rounded-full mr-4 flex-shrink-0"></span>
          SOFT SKILLS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SoftSkillCard icon={<User />} color="bg-purple-400" skill="Empathie" description="Capacité à comprendre et partager les sentiments des utilisateurs." />
          
          <SoftSkillCard icon={<Mail />} color="bg-blue-400" skill="Communication" description="Expression claire des idées et concepts complexes." />
          
          <SoftSkillCard icon={<Users />} color="bg-orange-400" skill="Travail d'équipe" description="Collaboration efficace avec les équipes pluridisciplinaires." />
          
          <SoftSkillCard icon={<Lightbulb />} color="bg-yellow-400" skill="Résolution de problèmes" description="Approche analytique pour trouver des solutions innovantes." />
          
          <SoftSkillCard icon={<RefreshCw />} color="bg-green-400" skill="Adaptabilité" description="Flexibilité face aux changements et nouveaux défis." />
          
          <SoftSkillCard icon={<Palette />} color="bg-pink-400" skill="Créativité" description="Génération d'idées originales et innovantes." />
          
          <SoftSkillCard icon={<Award />} color="bg-indigo-400" skill="Leadership" description="Capacité à guider et inspirer une équipe." />
          
          <SoftSkillCard icon={<Clock />} color="bg-red-400" skill="Gestion du temps" description="Organisation efficace des priorités et des délais." />
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" ref={formationsRef} className={`px-6 md:px-16 py-16 md:py-24 bg-white ${animationClass("formations")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-yellow-400 rounded-full mr-4 flex-shrink-0"></span>
          MES FORMATIONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Book className="text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">2020 - 2023</div>
                <h3 className="font-bold text-xl mt-1">Master en Design Produit</h3>
                <p className="text-gray-600 mt-2">Université de Design, Paris</p>
                <p className="text-gray-700 mt-4">Formation axée sur l'UX/UI design, la recherche utilisateur et la stratégie produit. Projet de fin d'études sur les interfaces accessibles pour applications bancaires.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Book className="text-amber-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">2017 - 2020</div>
                <h3 className="font-bold text-xl mt-1">Licence en Design Graphique</h3>
                <p className="text-gray-600 mt-2">École des Arts Visuels, Lyon</p>
                <p className="text-gray-700 mt-4">Fondamentaux du design graphique, typographie, composition et initiation au design d'interfaces. Spécialisation en design digital pendant la dernière année.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className={`px-6 md:px-16 py-16 md:py-24 bg-[#f5f5f5] ${animationClass("projects")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-blue-400 rounded-full mr-4 flex-shrink-0"></span>
          PROJETS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project 1 */}
          <ProjectCard 
            number="01" 
            title="FINANCE APP REDESIGN" 
            color="bg-purple-400" 
            description="Reimagining the mobile banking experience with intuitive navigation and personalized insights"
            delay="0s" 
          />
          
          {/* Project 2 */}
          <ProjectCard 
            number="02" 
            title="DESIGN SYSTEM" 
            color="bg-yellow-400" 
            description="Creating a comprehensive component library and design guidelines for a SaaS platform"
            delay="0.1s" 
          />
          
          {/* Project 3 */}
          <ProjectCard 
            number="03" 
            title="E-COMMERCE UX" 
            color="bg-orange-400" 
            description="Optimizing the shopping experience with user research and conversion-focused design"
            delay="0.2s" 
          />
          
          {/* Project 4 */}
          <ProjectCard 
            number="04" 
            title="AR PROTOTYPE" 
            color="bg-teal-400" 
            description="Exploring augmented reality interfaces for an immersive product visualization tool"
            delay="0.3s" 
          />
        </div>
        
        <div className="mt-16">
          <ProjectShowcase />
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" ref={educationRef} className={`px-6 md:px-16 py-16 md:py-24 bg-white ${animationClass("education")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-indigo-400 rounded-full mr-4 flex-shrink-0"></span>
          ÉDUCATION & CERTIFICATIONS
        </h2>
        
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 group">
            <div className="w-16 h-16 bg-indigo-100 flex items-center justify-center rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-300">
              <Award className="text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">2023</div>
              <h3 className="font-bold text-xl mb-3">Certification Google UX Design</h3>
              <p className="text-gray-600 mt-1">Coursera</p>
              <p className="text-gray-700 mt-4">
                Programme complet de Google couvrant les méthodologies UX, le design thinking, la recherche utilisateur, le wireframing, le prototypage et les tests d'utilisabilité. Projet final sur une application de gestion de budget personnel.
              </p>
              <div className="mt-6">
                <a href="#" className="text-indigo-600 flex items-center gap-2 hover:underline">
                  Voir le certificat <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 group">
            <div className="w-16 h-16 bg-pink-100 flex items-center justify-center rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-300">
              <Award className="text-pink-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">2022</div>
              <h3 className="font-bold text-xl mb-3">Design Systems Certification</h3>
              <p className="text-gray-600 mt-1">Design+Code</p>
              <p className="text-gray-700 mt-4">
                Formation approfondie sur la création et la gestion de systèmes de design. Conception de composants réutilisables, établissement de directives de design et implémentation d'un système de design dans Figma.
              </p>
              <div className="mt-6">
                <a href="#" className="text-pink-600 flex items-center gap-2 hover:underline">
                  Voir le certificat <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="testimonies" ref={testimoniesRef} className={`px-6 md:px-16 py-16 md:py-24 bg-[#f5f5f5] ${animationClass("testimonies")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-green-400 rounded-full mr-4 flex-shrink-0"></span>
          TÉMOIGNAGES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
              <Star className="text-yellow-500 mb-4" />
              <p className="text-gray-800 italic">
                "Working with this designer was transformative for our product. The design system they created has accelerated our development cycles by 40% and ensured consistent experiences across all our platforms."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-300 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
              </div>
              <div className="ml-4">
                <p className="font-bold">Alexander Chen</p>
                <p className="text-sm text-gray-600">CTO at WonderTech</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-200 p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
              <Star className="text-yellow-500 mb-4" />
              <p className="text-gray-800 italic">
                "The redesign completely transformed our user experience. Conversion rates increased by 37% and user satisfaction scores jumped to 4.8/5. Exactly what our product needed."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-300 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600"></div>
              </div>
              <div className="ml-4">
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm text-gray-600">Product Manager at MobiTech</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-200 p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
            <p className="text-gray-800 italic">
                "The user research and iterative design approach they implemented completely transformed how we think about product development. Our team now has a much deeper understanding of our users' needs."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-300 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
              </div>
              <div className="ml-4">
                <p className="font-bold">Michael Rodriguez</p>
                <p className="text-sm text-gray-600">Head of Product at Innovate Inc.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-200 p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
              <Star className="text-yellow-500 mb-4" />
              <p className="text-gray-800 italic">
                "Their design thinking workshops have empowered our team to approach problems in completely new ways. The impact has gone beyond just design—it's changed our company culture for the better."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-300 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600"></div>
              </div>
              <div className="ml-4">
                <p className="font-bold">Lisa Wang</p>
                <p className="text-sm text-gray-600">Design Lead at Creative Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" ref={blogRef} className={`px-6 md:px-16 py-16 md:py-24 bg-white ${animationClass("blog")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-red-400 rounded-full mr-4 flex-shrink-0"></span>
          BLOG
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-purple-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center">
                  <Book className="text-purple-600" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-2">12 Mars 2024</div>
              <h3 className="font-bold text-lg mb-3">L'avenir du design d'interfaces : IA et personnalisation</h3>
              <p className="text-gray-700 text-sm mb-4">
                Comment l'intelligence artificielle transformera la création d'expériences utilisateur personnalisées dans les années à venir.
              </p>
              <a href="#" className="text-purple-600 text-sm flex items-center gap-1 hover:underline">
                Lire plus <ArrowRight size={14} />
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-blue-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
                  <Code className="text-blue-600" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-2">26 Février 2024</div>
              <h3 className="font-bold text-lg mb-3">Design Systems : la clé d'une collaboration efficace</h3>
              <p className="text-gray-700 text-sm mb-4">
                Pourquoi les systèmes de design sont essentiels pour faciliter la communication entre designers et développeurs.
              </p>
              <a href="#" className="text-blue-600 text-sm flex items-center gap-1 hover:underline">
                Lire plus <ArrowRight size={14} />
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-green-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
                  <Users className="text-green-600" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-2">10 Janvier 2024</div>
              <h3 className="font-bold text-lg mb-3">L'accessibilité n'est pas une option : concevoir pour tous</h3>
              <p className="text-gray-700 text-sm mb-4">
                Comment intégrer les principes d'accessibilité dès le début du processus de conception pour créer des produits inclusifs.
              </p>
              <a href="#" className="text-green-600 text-sm flex items-center gap-1 hover:underline">
                Lire plus <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Section */}
      <section id="other" ref={otherRef} className={`px-6 md:px-16 py-16 md:py-24 bg-[#f5f5f5] ${animationClass("other")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-pink-400 rounded-full mr-4 flex-shrink-0"></span>
          AUTRES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-6">Outils préférés</h3>
            <div className="grid grid-cols-2 gap-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center">
                  <span className="text-purple-600 font-bold">Fg</span>
                </div>
                <span className="text-gray-700">Figma</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center">
                  <span className="text-blue-600 font-bold">Sk</span>
                </div>
                <span className="text-gray-700">Sketch</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">Ps</span>
                </div>
                <span className="text-gray-700">Photoshop</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-md flex items-center justify-center">
                  <span className="text-orange-600 font-bold">Ai</span>
                </div>
                <span className="text-gray-700">Illustrator</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">Pr</span>
                </div>
                <span className="text-gray-700">Principle</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center">
                  <span className="text-teal-600 font-bold">Mx</span>
                </div>
                <span className="text-gray-700">Miro</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-6">Intérêts personnels</h3>
            <div className="grid grid-cols-2 gap-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center">
                  <span className="text-purple-600 font-bold">Ph</span>
                </div>
                <span className="text-gray-700">Photographie</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center">
                  <span className="text-green-600 font-bold">Tr</span>
                </div>
                <span className="text-gray-700">Voyages</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-md flex items-center justify-center">
                  <span className="text-amber-600 font-bold">Ck</span>
                </div>
                <span className="text-gray-700">Cuisine</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-md flex items-center justify-center">
                  <span className="text-red-600 font-bold">Cy</span>
                </div>
                <span className="text-gray-700">Cyclisme</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center">
                  <span className="text-blue-600 font-bold">Rd</span>
                </div>
                <span className="text-gray-700">Lecture</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-md flex items-center justify-center">
                  <span className="text-violet-600 font-bold">Ar</span>
                </div>
                <span className="text-gray-700">Art contemporain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className={`px-6 md:px-16 py-16 md:py-24 bg-white ${animationClass("skills")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-violet-400 rounded-full mr-4 flex-shrink-0"></span>
          COMPÉTENCES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-6 text-purple-700">Design UX/UI</h3>
            <div className="space-y-4">
              <SkillBar skill="Wireframing & Prototyping" percentage={95} color="bg-purple-500" />
              <SkillBar skill="User Research & Testing" percentage={90} color="bg-purple-500" />
              <SkillBar skill="Interaction Design" percentage={85} color="bg-purple-500" />
              <SkillBar skill="Information Architecture" percentage={80} color="bg-purple-500" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-6 text-blue-700">Design Visuel</h3>
            <div className="space-y-4">
              <SkillBar skill="UI Design" percentage={95} color="bg-blue-500" />
              <SkillBar skill="Design Systems" percentage={90} color="bg-blue-500" />
              <SkillBar skill="Typography" percentage={85} color="bg-blue-500" />
              <SkillBar skill="Iconographie" percentage={80} color="bg-blue-500" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-6 text-green-700">Compétences Techniques</h3>
            <div className="space-y-4">
              <SkillBar skill="HTML & CSS" percentage={80} color="bg-green-500" />
              <SkillBar skill="JavaScript" percentage={70} color="bg-green-500" />
              <SkillBar skill="React" percentage={65} color="bg-green-500" />
              <SkillBar skill="Animation & Motion" percentage={75} color="bg-green-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className={`px-6 md:px-16 py-16 md:py-24 bg-[#f5f5f5] ${animationClass("contact")}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="w-8 h-8 bg-blue-400 rounded-full mr-4 flex-shrink-0"></span>
          CONTACT
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-6">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">contact@portfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="font-medium">+33 6 12 34 56 78</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localisation</p>
                  <p className="font-medium">Paris, France</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Réseaux sociaux</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition">
                  <div className="text-gray-600 hover:text-purple-600">Li</div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition">
                  <div className="text-gray-600 hover:text-blue-600">Tw</div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-100 transition">
                  <div className="text-gray-600 hover:text-pink-600">In</div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-100 transition">
                  <div className="text-gray-600 hover:text-amber-600">Be</div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Votre nom"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Votre email"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="font-bold text-xl mb-4">Mon Portfolio</div>
            <p className="text-gray-400 max-w-md">
              Designer produit passionné créant des expériences numériques centrées sur l'utilisateur.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-4">© 2024 Tous droits réservés</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-white transition">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Composant pour les tags de compétences
const SkillTag = ({ children }) => {
  return (
    <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm">
      {children}
    </span>
  );
};

// Composant pour les barres de compétences
const SkillBar = ({ skill, percentage, color }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm">{skill}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

// Composant pour les cartes de projet
const ProjectCard = ({ number, title, color, description, delay }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 cursor-pointer animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-white mb-4`}>
        {number}
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4">
        <a href="#" className="text-blue-600 text-sm flex items-center gap-1 hover:underline">
          Voir le projet <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

// Composant pour la section de showcase de projet
const ProjectShowcase = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-8">Projet en vedette</h3>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-6xl text-gray-300">
              <img src="/api/placeholder/600/400" alt="placeholder" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
              <div className="text-2xl text-gray-300">01</div>
            </div>
            <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
              <div className="text-2xl text-gray-300">02</div>
            </div>
            <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
              <div className="text-2xl text-gray-300">03</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="font-bold text-xl mb-4">Finance App Redesign</h4>
          <p className="text-gray-700 mb-6">
            Une refonte complète de l'application mobile pour une grande banque, visant à simplifier la gestion financière quotidienne et à créer une expérience plus engageante pour les utilisateurs.
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <h5 className="font-medium mb-2">Objectifs</h5>
              <p className="text-gray-600 text-sm">
                Améliorer l'engagement des utilisateurs, simplifier les tâches quotidiennes et augmenter l'utilisation des fonctionnalités avancées.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">Approche</h5>
              <p className="text-gray-600 text-sm">
                Recherche utilisateur approfondie, ateliers de co-création avec les clients, prototypage itératif et tests d'utilisabilité réguliers.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">Résultats</h5>
              <p className="text-gray-600 text-sm">
                Augmentation de 35% de l'engagement quotidien, amélioration de 25% du score de satisfaction client (NPS) et réduction de 40% des appels au support client.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <SkillTag>UX Design</SkillTag>
            <SkillTag>UI Design</SkillTag>
            <SkillTag>Mobile App</SkillTag>
            <SkillTag>Fintech</SkillTag>
          </div>
          <a 
            href="#" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            Voir l'étude de cas complète <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

// Composant pour les cartes de soft skills
const SoftSkillCard = ({ icon, color, skill, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
      <div className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="font-bold mb-2">{skill}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Portfolio;