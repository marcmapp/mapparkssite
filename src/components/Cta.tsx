import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
interface SectionProps {
  title: string;
  content: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Cta: React.FC<SectionProps> = ({ title, content }) => {
  const [isInView, setIsInView] = React.useState(false);
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <motion.section
      className="min-h-full flex items-center tracking-widest justify-center bg-gray-900 py-16 px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      viewport={{ once: false, amount: 0.1 }} // Trigger on both enter and leave
      transition={{ duration: 0.8, ease: "easeInOut" }}
      variants={sectionVariants}
      onViewportEnter={() => setIsInView(true)} // Trigger fade-in when entering viewport
      onViewportLeave={() => setIsInView(false)} // Trigger fade-out when leaving viewport
    >
      
      <div className="text-center max-w-4xl">
      <h3 className="text-red-600 font-semibold">
      shall we?
                    </h3>
        <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
        <p className="text-lg text-cyan-600">{content}</p>
        <div className="mt-4">
                    <Link to="/get" onClick={scrollToTop} className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        Talk to Us !
                    </Link>
                </div>
      </div>
    </motion.section>
  );
};

export default Cta;
