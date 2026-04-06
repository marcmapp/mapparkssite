import React from 'react';
import { motion } from 'framer-motion';
import { 

  FaLaptopCode, 
  FaShoppingCart, 
  FaCloud, 
  FaTools,
  FaDatabase,
  FaServer,

  FaShieldAlt,
  FaSync,
  FaChartBar,
  FaCogs,
  FaReact,
  FaAngular
} from 'react-icons/fa';
import Footer from '../components/Footer';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: <FaReact className="text-4xl" />,
      title: "MERN Stack Development",
      description: "Build dynamic web applications using MongoDB, Express.js, React, and Node.js",
      features: [
        "Full-stack web applications",
        "REST API development",
        "Real-time features",
        "Scalable architecture",
        "Modern frontend with React"
      ],
      idealFor: [
        "Startups & MVPs",
        "Enterprise applications",
        "SaaS platforms",
        "E-commerce solutions"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaAngular className="text-4xl" />,
      title: "MEAN Stack Development",
      description: "Enterprise-grade applications with MongoDB, Express.js, Angular, and Node.js",
      features: [
        "TypeScript-based development",
        "Enterprise architecture",
        "Complex business logic",
        "Scalable backend systems",
        "Angular SPAs"
      ],
      idealFor: [
        "Large enterprises",
        "Financial systems",
        "Healthcare applications",
        "Government projects"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Website Design & Development",
      description: "Create compelling digital experiences that engage visitors and convert leads",
      features: [
        "Responsive, mobile-first designs",
        "SEO-optimized architecture",
        "CMS integration",
        "Accessibility compliance",
        "Advanced lead capture"
      ],
      idealFor: [
        "Corporate websites",
        "Business portfolios",
        "Marketing sites",
        "Content platforms"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaShoppingCart className="text-4xl" />,
      title: "E-commerce Development",
      description: "Build powerful online stores that drive sales and growth",
      features: [
        "Secure shopping cart & checkout",
        "Payment gateway integration",
        "Inventory management",
        "Customer account systems",
        "Multi-vendor marketplaces"
      ],
      idealFor: [
        "Online retail stores",
        "Subscription businesses",
        "Digital product sales",
        "Marketplace platforms"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud & DevOps Services",
      description: "Ensure scalability, reliability, and performance with modern infrastructure",
      features: [
        "Cloud migration services",
        "Microservices architecture",
        "Container orchestration",
        "CI/CD pipelines",
        "Infrastructure as Code"
      ],
      idealFor: [
        "Scalable applications",
        "High-traffic platforms",
        "Enterprise systems",
        "Startup growth"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Support & Maintenance",
      description: "Your long-term technology partner ensures sustained success",
      features: [
        "24/7 monitoring & support",
        "Regular updates & patches",
        "Performance optimization",
        "Security enhancements",
        "Technology consulting"
      ],
      idealFor: [
        "Ongoing maintenance",
        "Performance improvements",
        "Security updates",
        "Technical support"
      ],
      color: "from-gray-600 to-gray-800"
    }
  ];

  const specializations = [
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "MERN Stack",
      description: "MongoDB, Express.js, React, Node.js"
    },
    {
      icon: <FaServer className="text-2xl" />,
      title: "MEAN Stack",
      description: "MongoDB, Express.js, Angular, Node.js"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Security First",
      description: "Enterprise-grade security protocols"
    },
    {
      icon: <FaSync className="text-2xl" />,
      title: "Agile Development",
      description: "Iterative development methodology"
    },
    {
      icon: <FaChartBar className="text-2xl" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions"
    },
    {
      icon: <FaCogs className="text-2xl" />,
      title: "Custom Solutions",
      description: "Tailored to your needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Our <span className="text-gray-600">Service</span> Portfolio
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive digital solutions tailored to your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Explore Services
                </motion.button>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  className="bg-transparent border-2 border-black text-black font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-all duration-300 text-center"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
            
            {/* 3D Card for Hero */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-br from-blue-50 to-cyan-50 relative group/card hover:shadow-2xl w-full h-auto rounded-2xl p-8 border border-blue-200">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Technology Specializations
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-600 text-lg mb-8"
                  >
                    We specialize in modern tech stacks and cutting-edge solutions
                  </CardItem>
                  <div className="grid grid-cols-2 gap-4">
                    {specializations.slice(0, 4).map((spec, idx) => (
                      <CardItem
                        key={idx}
                        translateZ="30"
                        className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl"
                      >
                        <div className="text-blue-600">
                          {spec.icon}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{spec.title}</div>
                          <div className="text-sm text-gray-600">{spec.description}</div>
                        </div>
                      </CardItem>
                    ))}
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {specializations.map((spec, idx) => (
              <CardContainer key={idx} containerClassName="h-20">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-lg rounded-full px-6 py-3 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <CardItem
                      translateZ="30"
                      className="text-gray-900"
                    >
                      {spec.icon}
                    </CardItem>
                    <div>
                      <CardItem
                        translateZ="40"
                        className="font-bold text-gray-900"
                      >
                        {spec.title}
                      </CardItem>
                      <CardItem
                        translateZ="30"
                        className="text-sm text-gray-600"
                      >
                        {spec.description}
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services with 3D Cards */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service, idx) => (
              <CardContainer key={idx} containerClassName="w-full h-full">
                <CardBody className={`bg-gradient-to-r ${service.color} relative group/card hover:shadow-2xl w-full h-full rounded-2xl p-8 border border-opacity-20`}>
                  <CardItem
                    translateZ="50"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg w-fit mb-6"
                  >
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-2xl font-bold mb-4 text-white"
                  >
                    {service.title}
                  </CardItem>
                  
                  <CardItem
                    translateZ="50"
                    className="text-white/90 mb-6 leading-relaxed"
                  >
                    {service.description}
                  </CardItem>
                  
                  <div className="mb-6">
                    <CardItem
                      translateZ="40"
                      className="mb-4"
                    >
                      <h3 className="font-bold text-white mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, fIdx) => (
                          <CardItem
                            key={fIdx}
                            translateZ="30"
                            className="flex items-start text-white/80"
                          >
                            <div className="text-white mr-3 mt-1">✓</div>
                            <span>{feature}</span>
                          </CardItem>
                        ))}
                      </ul>
                    </CardItem>
                    
                    <CardItem
                      translateZ="40"
                    >
                      <h3 className="font-bold text-white mb-3">Ideal For</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.slice(0, 2).map((item, iIdx) => (
                          <CardItem
                            key={iIdx}
                            translateZ="20"
                            className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                          >
                            {item}
                          </CardItem>
                        ))}
                      </div>
                    </CardItem>
                  </div>
                  
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="/contact"
                    className="w-full text-center bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 block"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Get This Service
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
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
                Ready to Transform Your Business?
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xl text-gray-300 mb-10 text-center max-w-2xl mx-auto"
              >
                Let's discuss how our services can help you achieve your digital goals and drive business growth.
              </CardItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="/contact"
                  className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 text-center"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Schedule a Consultation
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="tel:+919342139631"
                  className="px-8 py-3 rounded-lg bg-transparent border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Call Now: +91 93421 39631
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

export default Services;