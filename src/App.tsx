import { useEffect } from 'react';
import "aos/dist/aos.css";
import './index.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Aos from 'aos';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import Internships from './pages/Internships';
import Courses from './pages/Courses';
import RND from './pages/RND';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavItems,
} from "./components/ui/resizable-navbar";

function App(): JSX.Element {
  useEffect(() => {
    const aos_init = () => {
      Aos.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    };

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Process",
      link: "/process",
    },
    {
      name: "Internships",
      link: "/internships",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "R&D",
      link: "/rnd",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    closeMobileMenu();
  };

  return (
    <Router>
      <ScrollToTop />
      {/* Navigation */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm`}
      >
        <Navbar>
          <NavBody>
            {/* Mapp Arks Logo with image */}
            <NavbarLogo />
            
            {/* Desktop Nav Items - using NavItems component for better spacing */}
            <NavItems items={navItems} onItemClick={handleNavClick} />
            
            <div className="flex items-center gap-4 ml-4">
              <Link to="/contact" onClick={handleNavClick}>
                <NavbarButton variant="primary" className="bg-black text-white hover:bg-gray-800">
                  Get Started
                </NavbarButton>
              </Link>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  onClick={handleNavClick}
                  className="relative text-gray-700 py-3 text-base font-medium transition-colors hover:text-black block"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="block">{item.name}</span>
                  </motion.div>
                </Link>
              ))}
              <div className="flex w-full flex-col gap-4 mt-4">
                <Link to="/contact" onClick={handleNavClick}>
                  <NavbarButton variant="primary" className="w-full bg-black text-white hover:bg-gray-800">
                    Get Started
                  </NavbarButton>
                </Link>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </motion.div>
      
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/rnd" element={<RND />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;