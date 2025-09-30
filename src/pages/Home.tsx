/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import image4 from "../assets/image8.jpeg";
import AboutAniComp from "../components/AboutAniComp";
import Cta from "../components/Cta";
import Whatwedo from "../components/Whatwedo";

// Import icons (you'll need to install react-icons)
import { FiArrowRight } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import Footer from "../components/Footer";
import { ThreeDMarqueeDemoSecond } from "../components/ThreeDMarqueeDemoSecond";

interface Props {}

const Home: React.FC<Props> = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const texts = [
    "Where the Future is Forged",
    "Building Tomorrow's Technology",
    "Innovation at Light Speed",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
    <ThreeDMarqueeDemoSecond/>
      <div className="relative w-full overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-10 animate-pulse-slow delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen mt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
          {/* Circuit board background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]"></div>

            {/* Animated circuit paths */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M10,10 C30,15 50,30 70,20 C90,10 80,40 70,50 C60,60 40,70 20,60 C0,50 20,80 40,90 C60,100 80,80 90,70"
                  stroke="url(#circuitGradient)"
                  strokeWidth="0.3"
                  fill="none"
                  strokeDasharray="2"
                  className="animate-dash"
                />
                <path
                  d="M5,30 C25,40 45,20 65,30 C85,40 75,60 65,70 C55,80 35,90 15,80"
                  stroke="url(#circuitGradient)"
                  strokeWidth="0.2"
                  fill="none"
                  strokeDasharray="2"
                  className="animate-dash delay-1000"
                />
                <defs>
                  <linearGradient
                    id="circuitGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating tech elements */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full animate-float opacity-80"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-float delay-1000 opacity-80"></div>
            <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-yellow-500 rounded-full animate-float delay-2000 opacity-80"></div>
            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-float delay-3000 opacity-80"></div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-8"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-gray-300">
                  Innovation in Progress
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-green-500">Reimagining</span>{" "}
                <span className="text-white">Digital</span>
                <br />
                <span className="text-blue-500">Experiences</span>
              </h1>

              <div className="h-20 mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentTextIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-xl text-gray-400"
                  >
                    {texts[currentTextIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We're engineering{" "}
                <span className="text-green-400 font-medium">
                  next-generation solutions
                </span>{" "}
                that will transform how businesses operate. While we develop
                these cutting-edge technologies, we offer{" "}
                <span className="text-blue-400 font-medium">
                  specialized services
                </span>{" "}
                to future-proof your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center overflow-hidden">
                  <span className="relative z-10">Discover Services</span>
                  <div className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform">
                    <FiArrowRight />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="px-6 py-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300">
                  View Innovation Pipeline
                </button>
              </div>
            </motion.div>

            {/* Right column - interactive tech visualization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 aspect-square flex items-center justify-center">
                {/* Interactive circuit board */}
                <div className="relative w-full h-full">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    className="rounded-lg"
                  >
                    {/* Circuit paths */}
                    <path
                      d="M20,20 L50,20 L50,50 L80,50"
                      stroke="url(#pathGradient)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="4"
                      className="animate-dash"
                    />
                    <path
                      d="M30,70 L50,70 L50,40"
                      stroke="url(#pathGradient)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="4"
                      className="animate-dash delay-1000"
                    />
                    <path
                      d="M70,30 L70,60 L40,60"
                      stroke="url(#pathGradient)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="4"
                      className="animate-dash delay-2000"
                    />

                    {/* Circuit nodes */}
                    <circle
                      cx="20"
                      cy="20"
                      r="3"
                      fill="#10B981"
                      className="animate-pulse"
                    />
                    <circle
                      cx="50"
                      cy="20"
                      r="2"
                      fill="#3B82F6"
                      className="animate-pulse delay-500"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="2"
                      fill="#3B82F6"
                      className="animate-pulse delay-1000"
                    />
                    <circle
                      cx="80"
                      cy="50"
                      r="3"
                      fill="#F59E0B"
                      className="animate-pulse delay-1500"
                    />
                    <circle
                      cx="30"
                      cy="70"
                      r="2"
                      fill="#8B5CF6"
                      className="animate-pulse delay-700"
                    />
                    <circle
                      cx="50"
                      cy="70"
                      r="2"
                      fill="#8B5CF6"
                      className="animate-pulse delay-1200"
                    />
                    <circle
                      cx="70"
                      cy="30"
                      r="2"
                      fill="#EC4899"
                      className="animate-pulse delay-300"
                    />
                    <circle
                      cx="70"
                      cy="60"
                      r="2"
                      fill="#EC4899"
                      className="animate-pulse delay-900"
                    />
                    <circle
                      cx="40"
                      cy="60"
                      r="3"
                      fill="#10B981"
                      className="animate-pulse delay-1700"
                    />

                    <defs>
                      <linearGradient
                        id="pathGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Floating tech elements */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500/20 rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500/20 rounded-full animate-ping delay-1000"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-yellow-500/20 rounded-full animate-ping delay-2000"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <AboutAniComp
          id="about"
          title="About Us"
          content=""
          imageSrc={image4}
        />

        <Cta
          title="Let's Catch Up!"
          content="Be part of the journey as we shape the future with cutting-edge tech solutions and groundbreaking products. Connect with us to explore opportunities, learn more about our offerings, or collaborate on something extraordinary."
        />

        <Whatwedo />

        <Footer />
      </div>
    </>
  );
};

export default Home;
