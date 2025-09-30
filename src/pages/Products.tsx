/* eslint-disable no-undef */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  "use client";
  
  import { useEffect } from 'react';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

// Import icons (you'll need to install react-icons)
import { 

  FiBox, 

  FiArrowRight,
 
} from "react-icons/fi";
import { motion } from "framer-motion";

  import "./Home.css";

  "use client";


  import Footer from "../components/Footer";

  
  const products = [
    {
      name: "Nexus Platform",
      description: "An all-in-one business intelligence platform that transforms data into actionable insights.",
      status: "Coming Soon",
      color: "bg-blue-500"
    },
    {
      name: "Aether Connect",
      description: "Revolutionary IoT solution for seamless device connectivity and management.",
      status: "In Development",
      color: "bg-purple-500"
    },
    {
      name: "Quantum Shield",
      description: "Advanced cybersecurity solution with AI-powered threat detection and prevention.",
      status: "Coming Soon",
      color: "bg-green-500"
    }
  ];

  const Products = () => {
      useEffect(() => {
          AOS.init({
              duration: 800,
              offset: 100,
              once: true,
          });
      }, []);     
      
      
    




      return (
      <>
   {/* Products Section */}
        <section id="products" className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Signature <span className="text-yellow-600">Products</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-500 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Innovative solutions we're developing to transform industries and redefine possibilities
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${product.color}"></div>
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6 ${product.color}`}>
                      <FiBox className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                    <p className="text-gray-500 mb-4">{product.description}</p>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      {product.status}
                    </span>
                    <button className="mt-6 text-gray-700 font-medium flex items-center hover:text-gray-900 transition-colors">
                      Get notified <FiArrowRight className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="text-gray-500 mb-6">Interested in our upcoming products?</p>
              <button className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-gray-200/50 flex items-center mx-auto">
                Join Waitlist <FiArrowRight className="ml-2" />
              </button>
            </motion.div>
          </div>
        </section>
  <Footer />
          </>
      );
  };
 
  export default Products;
