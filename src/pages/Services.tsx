/* eslint-disable no-undef */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  "use client";
  import { useEffect } from 'react';
  import AOS from 'aos';
  import 'aos/dist/aos.css';



  import "./Home.css";

  "use client";


  import Footer from "../components/Footer";


  // Import icons (you'll need to install react-icons)
import { 
  FiCode, 
  FiGlobe, 
  FiCloud, 
  FiBox, 
  FiLayers, 
  FiHeadphones,
  FiArrowRight,
  FiCheck
} from "react-icons/fi";
import { motion } from "framer-motion";
const services = [
  {
    icon: <FiCode className="text-3xl" />,
    title: "Custom Software Development",
    description: "Tailor-made solutions designed to address your specific business challenges and streamline operations.",
    features: ["Enterprise Applications", "System Integration", "Process Automation"]
  },
  {
    icon: <FiGlobe className="text-3xl" />,
    title: "Website Development",
    description: "Responsive, high-performance websites that captivate your audience and drive conversions.",
    features: ["UI/UX Design", "E-commerce Solutions", "SEO Optimization"]
  },
  {
    icon: <FiCloud className="text-3xl" />,
    title: "Web Application Development",
    description: "Scalable web applications with intuitive interfaces and robust backend architecture.",
    features: ["Progressive Web Apps", "Real-time Applications", "API Development"]
  },
  {
    icon: <FiBox className="text-3xl" />,
    title: "SaaS Product Development",
    description: "End-to-end SaaS solutions from concept to deployment and maintenance.",
    features: ["Multi-tenancy Architecture", "Subscription Management", "Cloud Deployment"]
  },
  {
    icon: <FiLayers className="text-3xl" />,
    title: "Signature Product Development",
    description: "Innovative products that redefine industries and create new market opportunities.",
    features: ["Market Research", "Prototype Development", "Product Launch"]
  },
  {
    icon: <FiHeadphones className="text-3xl" />,
    title: "Technical Support & Maintenance",
    description: "Comprehensive support services to ensure your systems run smoothly and efficiently.",
    features: ["24/7 Monitoring", "Regular Updates", "Performance Optimization"]
  }
];
  

  const Services = () => {
      useEffect(() => {
          AOS.init({
              duration: 800,
              offset: 100,
              once: true,
          });
      }, []);     
      
      
    




      return (
      <>
      
  {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 relative">
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Our <span className="text-green-600">Services</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-500 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Comprehensive technology solutions tailored to empower your business and drive growth
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-500 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <FiCheck className="text-green-500 mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-green-600 font-medium flex items-center hover:text-green-700 transition-colors">
                    Learn more <FiArrowRight className="ml-1" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      
  <Footer />
          </>
      );
  };
 
  export default Services;
