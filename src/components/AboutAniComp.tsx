import React from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

interface SectionProps {
  id?: string;
  title: string;
  content: string;
  imageSrc: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutAniComp: React.FC<SectionProps> = ({ id, title, content, imageSrc }) => {
  const [isInView, setIsInView] = React.useState(false);

  return (
    <motion.section
    id={id}
      className="bg-gray-200 text-gray-800 min-h-screen flex items-center justify-center py-12 px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      variants={sectionVariants}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
    >
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-32 lg:flex-row lg:justify-between">
        {/* Left Side (Text Content) */}
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            {title} <span className="text-red-700">(Who We Are)</span>
          </h1>
          <p className="mt-6 mb-8 text-lg tracking-widest sm:mb-12">
            {content}
            <br className="hidden md:inline tracking-widest  lg:hidden" />
            We’re a <span className="text-green-600 text-xl">tech-driven force</span>, dedicated to building <br/>cutting-edge products that push boundaries and redefine possibilities.
            Our mission is simple: to take bold ideas and turn them into reality,<span className="text-yellow-600 text-xl">empowering businesses and individuals alike.</span> 
            
          </p>
          {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/about"
              className="px-8 py-3 text-lg rounded-xl hover:bg-white hover:text-black bg-black text-sky-400 border-4 border-sky-400"
            >
              - - Dig Deeper - -
            </Link>
          </div> */}
        </div>

        {/* Right Side (Image Content) */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-52 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={imageSrc}
            alt="About Us"
            className="mx-auto w-full h-full rounded-3xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutAniComp;
