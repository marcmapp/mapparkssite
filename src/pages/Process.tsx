import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaMap, 
  FaPencilAlt, 
  FaCode, 
  FaCheck, 
  FaRocket,
  FaTools,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaSync,
  FaBuilding,
  FaCheckCircle
} from 'react-icons/fa';
import Footer from '../components/Footer';

const Process: React.FC = () => {
  const processSteps = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: "Discovery & Consultation",
      description: "Detailed requirement gathering and stakeholder interviews",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaMap className="text-3xl" />,
      title: "Strategy & Planning",
      description: "Solution architecture design and project roadmap",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaPencilAlt className="text-3xl" />,
      title: "Design & Prototyping",
      description: "User experience research and interactive wireframes",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Agile Development",
      description: "Iterative development with regular client demos",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaCheck className="text-3xl" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and user acceptance testing",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Deployment & Launch",
      description: "Production deployment and performance monitoring",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Post-Launch Support",
      description: "Ongoing maintenance and scalability planning",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const methodologies = [
    {
      icon: <FaSync className="text-2xl" />,
      title: "Agile Methodology",
      description: "Flexible, iterative approach adapting to changing requirements"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Client Collaboration",
      description: "Regular updates, demos, and collaborative feedback sessions"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Quality Assurance",
      description: "Rigorous testing at every development phase"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Transparent Process",
      description: "Clear milestones, timelines, and progress tracking"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white font-medium mb-6">
              <FaBuilding className="mr-2" />
              <span>AGILE & ADDIE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="text-gray-600">Development</span> Process
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A structured approach ensuring quality, transparency, and successful project delivery
            </p>
          </motion.div>
        </div>
      </section>

  

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-300 to-gray-400 hidden md:block"></div>
            
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative mb-12 md:flex items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-gray-300 z-10 hidden md:block"></div>
                
                {/* Step content */}
                <div className={`md:w-5/12 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-r ${step.color} rounded-2xl p-8 shadow-lg`}
                  >
                    <div className={`flex items-center ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="mr-4 text-white">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-white/90 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-6">
                      <span className="text-white/80 text-sm font-medium">
                        Step {idx + 1} of {processSteps.length}
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-2/12"></div>
                
                {/* Step number on mobile */}
                <div className="md:hidden mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gray-600">Methodologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approaches that ensure project success and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {methodologies.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:border-black transition-all duration-300"
              >
                <div className="text-gray-900 mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gray-600">Success</span> Metrics
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "100%", label: "Client Satisfaction" },
              { value: "98%", label: "On-Time Delivery" },
              { value: "50+", label: "Projects Completed" },
              { value: "24/7", label: "Support Availability" },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  {metric.value}
                </div>
                <div className="text-lg font-medium text-gray-700">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white font-medium mb-6">
              <FaLightbulb className="mr-2" />
              Ready to Start Your Project?
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Our proven process ensures your project's success from concept to deployment and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="tel:+919342139631"
                whileHover={{ scale: 1.05 }}
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;