import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaCode, 
  FaPaintBrush, 
  FaShoppingCart, 
  FaCloud, 
  FaMobileAlt,
  FaHeadset,
  FaRocket,

  FaGraduationCap,
  FaBriefcase,
  FaLightbulb,
  FaBrain,
  FaMagic,
  FaArrowRight
} from 'react-icons/fa';
import {
  SiReact, 

  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,

  SiAngular,
  SiPython,
  SiDjango,
  SiDotnet,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiPostgresql,
  SiFirebase,
  SiVuedotjs,

  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiJest,

  SiWebpack,
  SiBabel,
  SiSass,
  SiLess,
  SiBootstrap,
  SiFigma,
  SiAdobexd,
  SiPostman,
  SiJira,
  SiConfluence,
  SiSlack,
  SiTrello,
  SiWordpress,
  SiShopify,
  SiStripe,
  SiGooglecloud,
  SiHeroku,
  SiDigitalocean,
  SiNetlify,
  
  SiAmazon
} from 'react-icons/si';
import Footer from '../components/Footer';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import LogoLoop from '../components/ui/logo-loop';

import { CompareDemo } from '../components/ImageCompareDemo';



const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Custom Software Development",
      description: "Tail-made applications to solve your unique business challenges"
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: "Website Design & Development",
      description: "Stunning, responsive websites that build your brand"
    },
    {
      icon: <FaShoppingCart className="text-3xl" />,
      title: "E-commerce Solutions",
      description: "Powerful online stores that generate revenue"
    },
    {
      icon: <FaCloud className="text-3xl" />,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and automated deployment"
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Mobile App Development",
      description: "Engaging mobile applications for iOS and Android"
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "Support & Maintenance",
      description: "Your extended tech team for long-term success"
    }
  ];
 const processSteps = [
    { stage: "Research", description: "Deep dive into business challenges", icon: <FaBrain /> },
    { stage: "Prototype", description: "Initial concept development", icon: <FaCode /> },
    { stage: "Refine", description: "Iterative improvement cycles", icon: <FaMagic /> },
    { stage: "Launch", description: "Production-ready solutions", icon: <FaRocket /> }
  ];
  const offerings = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Services",
      description: "Professional development services",
      link: "/services",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Courses",
      description: "Industry-relevant skill development",
      link: "/courses",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      title: "Internships",
      description: "Real-world experience",
      link: "/internships",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "R&D",
      description: "Innovative solutions in progress",
      link: "/rnd",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100"
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "3+", label: "Years Experience" }
  ];

  // Fixed technology logos with proper unique icons
  const techLogos = [
    // Frontend
    { node: <SiReact className="text-4xl text-blue-500" />, title: "React", href: "https://react.dev" },
   
    { node: <SiTypescript className="text-4xl text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-4xl text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiAngular className="text-4xl text-red-600" />, title: "Angular", href: "https://angular.io" },
    { node: <SiVuedotjs className="text-4xl text-green-500" />, title: "Vue.js", href: "https://vuejs.org" },
    { node: <SiJavascript className="text-4xl text-yellow-400" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiHtml5 className="text-4xl text-orange-500" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 className="text-4xl text-blue-400" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiRedux className="text-4xl text-purple-500" />, title: "Redux", href: "https://redux.js.org" },
    { node: <SiBootstrap className="text-4xl text-purple-600" />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiSass className="text-4xl text-pink-500" />, title: "Sass", href: "https://sass-lang.com" },
    { node: <SiLess className="text-4xl text-blue-600" />, title: "Less", href: "https://lesscss.org" },
    
    // Backend
    { node: <SiNodedotjs className="text-4xl text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython className="text-4xl text-blue-400" />, title: "Python", href: "https://python.org" },
    { node: <SiDjango className="text-4xl text-green-700" />, title: "Django", href: "https://djangoproject.com" },
    { node: <SiDotnet className="text-4xl text-purple-600" />, title: ".NET", href: "https://dotnet.microsoft.com" },
    { node: <SiGraphql className="text-4xl text-pink-600" />, title: "GraphQL", href: "https://graphql.org" },
    
    // Databases
    { node: <SiMongodb className="text-4xl text-green-500" />, title: "MongoDB", href: "https://mongodb.com" },
    { node: <SiPostgresql className="text-4xl text-blue-700" />, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <SiFirebase className="text-4xl text-yellow-500" />, title: "Firebase", href: "https://firebase.google.com" },
    
    // Cloud & DevOps
    { node: <SiAmazon className="text-4xl text-orange-500" />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiGooglecloud className="text-4xl text-blue-500" />, title: "Google Cloud", href: "https://cloud.google.com" },
   
    { node: <SiDocker className="text-4xl text-blue-400" />, title: "Docker", href: "https://docker.com" },
    { node: <SiKubernetes className="text-4xl text-blue-500" />, title: "Kubernetes", href: "https://kubernetes.io" },
    { node: <SiHeroku className="text-4xl text-purple-500" />, title: "Heroku", href: "https://heroku.com" },
    { node: <SiDigitalocean className="text-4xl text-blue-400" />, title: "DigitalOcean", href: "https://digitalocean.com" },
    { node: <SiNetlify className="text-4xl text-teal-500" />, title: "Netlify", href: "https://netlify.com" },
    
    
    // Tools & Development
    
    { node: <SiGit className="text-4xl text-orange-600" />, title: "Git", href: "https://git-scm.com" },
    { node: <SiFigma className="text-4xl text-purple-600" />, title: "Figma", href: "https://figma.com" },
    { node: <SiAdobexd className="text-4xl text-pink-500" />, title: "Adobe XD", href: "https://adobe.com/products/xd" },
    { node: <SiPostman className="text-4xl text-orange-500" />, title: "Postman", href: "https://postman.com" },
    { node: <SiJira className="text-4xl text-blue-500" />, title: "Jira", href: "https://atlassian.com/software/jira" },
    { node: <SiConfluence className="text-4xl text-blue-600" />, title: "Confluence", href: "https://atlassian.com/software/confluence" },
    { node: <SiSlack className="text-4xl text-purple-500" />, title: "Slack", href: "https://slack.com" },
    { node: <SiTrello className="text-4xl text-blue-500" />, title: "Trello", href: "https://trello.com" },
    
    // CMS & E-commerce
    { node: <SiWordpress className="text-4xl text-blue-800" />, title: "WordPress", href: "https://wordpress.org" },
    { node: <SiShopify className="text-4xl text-green-600" />, title: "Shopify", href: "https://shopify.com" },
    { node: <SiStripe className="text-4xl text-purple-500" />, title: "Stripe", href: "https://stripe.com" },
    
    // Testing & Build Tools
    { node: <SiJest className="text-4xl text-red-600" />, title: "Jest", href: "https://jestjs.io" },
   
    { node: <SiWebpack className="text-4xl text-blue-500" />, title: "Webpack", href: "https://webpack.js.org" },
    { node: <SiBabel className="text-4xl text-yellow-500" />, title: "Babel", href: "https://babeljs.io" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with 3D Card */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white font-medium mb-6">
                <span>Your Strategic Technology Partner</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                MAPP <span className="bg-transparent bg-gradient-to-r from-cyan-600 to-sky-700 text-transparent bg-clip-text">ARKS</span>
              </h1>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                Crafting Your <span className="text-black">Digital Future</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Welcome to Mapp Arks, where innovation meets execution. 
                We transform your vision into powerful digital solutions that drive business growth, 
                enhance operational efficiency, and create lasting competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-black text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:bg-gray-800"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Start Your Project
                  <FaRocket className="ml-2" />
                </motion.a>
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-black text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-black hover:text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  View Our Services
                </motion.a>
              </div>
            </motion.div>
            
            {/* 3D Card for Hero Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-gray-500/20 w-full h-auto rounded-2xl p-8 border border-cyan-300">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Our Expertise
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-600 text-lg mb-8"
                  >
                    We specialize in building modern digital solutions that drive business growth
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mb-8">
                    <div className="grid grid-cols-2 gap-4">
                      {services.slice(0, 4).map((service, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl ${idx === activeService ? 'bg-black text-white' : 'bg-white text-gray-900'} transition-all duration-300`}
                        >
                          <div className="mb-3">{service.icon}</div>
                          <h3 className="font-bold">{service.title}</h3>
                        </div>
                      ))}
                    </div>
                  </CardItem>
                  <div className="flex justify-between items-center">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="/services"
                      className="px-4 py-2 rounded-xl text-sm font-normal text-gray-700 hover:text-black"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Explore all services →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="/contact"
                      className="px-4 py-2 rounded-xl bg-black text-white text-sm font-bold hover:bg-gray-800"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Get Started
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* Process Visualization Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-gray-600">Process</span> in Action
          </h2>
          
          <CompareDemo />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.stage}</h3>
                <p className="text-gray-600">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                    <FaArrowRight className="text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Offerings Section with 3D Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gray-600">Offerings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your digital needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {offerings.map((offering, idx) => (
              <CardContainer key={idx} containerClassName="w-full h-full">
                <CardBody className={`${offering.bgColor} relative group/card hover:shadow-2xl w-full h-full rounded-2xl p-8 border border-gray-200`}>
                  <CardItem
                    translateZ="50"
                    className="text-gray-900 mb-6"
                  >
                    {offering.icon}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-gray-900 mb-4"
                  >
                    {offering.title}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-gray-600 mb-8"
                  >
                    {offering.description}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={offering.link}
                    className="text-black font-medium flex items-center group-hover/card:translate-x-2 transition-transform duration-300"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section with LogoLoop */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gray-600">Technology</span> Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Modern technologies and tools for scalable, efficient, and future-proof solutions
            </p>
          </div>

          {/* Horizontal Logo Loop - removed fadeOut to eliminate black gradients */}
          <div className="mb-16">
            <div className="relative h-40 overflow-hidden">
              <LogoLoop
                logos={techLogos}
                speed={80}
                direction="left"
                logoHeight={80}
                gap={60}
                pauseOnHover={true}
                hoverSpeed={20}
                fadeOut={false}
                scaleOnHover={true}
                ariaLabel="Technology stack and tools"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with 3D Card */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <CardContainer containerClassName="w-full">
            <CardBody className="bg-gradient-to-r from-gray-800 to-gray-900 relative group/card hover:shadow-2xl hover:shadow-gray-500/30 w-full h-auto rounded-2xl p-12">
              <CardItem
                translateZ="50"
                className="text-4xl font-bold text-white mb-6 text-center"
              >
                Let's Build Something Extraordinary
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xl text-gray-300 mb-10 text-center max-w-2xl mx-auto"
              >
                Whether you need a simple website, a complex enterprise application, or a groundbreaking mobile app, 
                our team has the expertise and dedication to bring your vision to life.
              </CardItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="/contact"
                  className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 text-center"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Start Your Project Today
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="tel:+919342139631"
                  className="px-8 py-3 rounded-lg bg-transparent border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Call Us Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;