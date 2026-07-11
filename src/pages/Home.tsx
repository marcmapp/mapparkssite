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
      description: "Tailor-made applications to solve your unique business challenges"
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
      bgColor: "bg-surface"
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Courses",
      description: "Industry-relevant skill development",
      link: "/courses",
      bgColor: "bg-surface"
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      title: "Internships",
      description: "Real-world experience",
      link: "/internships",
      bgColor: "bg-surface"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "R&D",
      description: "Innovative solutions in progress",
      link: "/rnd",
      bgColor: "bg-surface"
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
    <div className="min-h-screen bg-background">
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-inverse text-inverse-foreground font-medium mb-6">
                <span>Your Strategic Technology Partner</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                MAPP <span className="bg-transparent bg-gradient-to-r from-accent to-accent-strong text-transparent bg-clip-text">ARKS</span>
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Crafting Your <span className="text-accent">Digital Future</span>
              </h2>

              <p className="text-xl text-muted mb-10 leading-relaxed">
                Welcome to Mapp Arks, where innovation meets execution. 
                We transform your vision into powerful digital solutions that drive business growth, 
                enhance operational efficiency, and create lasting competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-inverse text-inverse-foreground font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:opacity-90"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Start Your Project
                  <FaRocket className="ml-2" />
                </motion.a>
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-foreground text-foreground font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-foreground hover:text-background"
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
                <CardBody className="bg-surface relative group/card hover:shadow-2xl hover:shadow-black/20 w-full h-auto rounded-2xl p-8 border border-accent/40">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-foreground mb-4"
                  >
                    Our Expertise
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-muted text-lg mb-8"
                  >
                    We specialize in building modern digital solutions that drive business growth
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mb-8">
                    <div className="grid grid-cols-2 gap-4">
                      {services.slice(0, 4).map((service, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl ${idx === activeService ? 'bg-inverse text-inverse-foreground' : 'bg-background text-foreground'} transition-all duration-300`}
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
                      className="px-4 py-2 rounded-xl text-sm font-normal text-muted hover:text-foreground"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Explore all services →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href="/contact"
                      className="px-4 py-2 rounded-xl bg-inverse text-inverse-foreground text-sm font-bold hover:opacity-90"
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
      <section className="py-12 bg-background">
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
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* Process Visualization Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Our <span className="text-accent">Process</span> in Action
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent to-accent-strong text-white mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.stage}</h3>
                <p className="text-muted">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                    <FaArrowRight className="text-muted" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Offerings Section with 3D Cards */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Offerings</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Comprehensive solutions for all your digital needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {offerings.map((offering, idx) => (
              <CardContainer key={idx} containerClassName="w-full h-full">
                <CardBody className={`${offering.bgColor} relative group/card hover:shadow-2xl w-full h-full rounded-2xl p-8 border border-border`}>
                  <CardItem
                    translateZ="50"
                    className="text-accent mb-6"
                  >
                    {offering.icon}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-foreground mb-4"
                  >
                    {offering.title}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-muted mb-8"
                  >
                    {offering.description}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={offering.link}
                    className="text-accent font-medium flex items-center group-hover/card:translate-x-2 transition-transform duration-300"
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Technology</span> Stack
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-12">
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