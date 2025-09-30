import React from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import image2 from '../assets/4.jpeg';

const Whatwedo: React.FC = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <motion.section
      className="relative bg-gray-100 text-gray-900 py-16 px-6 min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // Allows animation to trigger every time it enters the viewport
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat filter blur-md"
        style={{ backgroundImage: `url(${image2})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/60" />

      {/* Content */}
      <div className="relative container mx-auto flex flex-col lg:mt-12 lg:flex-row items-center h-full">
        {/* Image Section (Left) */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src={image2}
            alt="What We Do"
            className="w-full h-auto rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </motion.div>

        {/* Text Section (Right) */}
        <motion.div
          className="relative lg:w-2/6 text-center lg:text-right lg:ml-44 tracking-widest space-y-6 lg:pl-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="text-pink-500 font-bold">
          ( What We Do )
                      </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
          Services and <span className="text-red-500">Signatures</span> 
          </h2>
          <p className="text-lg text-gray-300">
          Our offerings range from streamlined software services to comprehensive tech solutions that elevate businesses to new heights. But <span className="text-yellow-500 font-bold text-xl">our true passion lies in what’s brewing behind the scenes—our signature products.</span> These game-changing innovations are currently in the works, designed to reshape industries and set new standards. Stay tuned, because we’re just getting started.
          </p>
          {/* Buttons Section */}
          {/* <div className="flex justify-center lg:justify-end space-x-4">
            <a
              href="#/start"
              onClick={scrollToTop}
              className="px-6 py-3 text-sm font-medium text-white bg-sky-600 rounded-md transition-colors duration-300 transform hover:bg-sky-500 focus:outline-none focus:bg-sky-500"
            >
              Get Started
            </a>
            <a
              href="#/learn-more"
              className="px-6 py-3 text-sm font-medium text-gray-900 bg-gray-300 rounded-md transition-colors duration-300 transform hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Learn More
            </a>
          </div> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Whatwedo;
