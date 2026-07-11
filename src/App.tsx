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
import ThemeToggle from './components/ThemeToggle';
import { ArrowUpRight } from 'lucide-react';

// Live product. When more products launch, this becomes a "Products"
// dropdown in the nav that links out to each product's page/app.
const PRODUCT_URL = "https://startupark.mapparks.com/";

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-sm border-b border-border`}
      >
        <Navbar>
          <NavBody>
            {/* Mapp Arks Logo with image */}
            <NavbarLogo />
            
            {/* Desktop Nav Items - using NavItems component for better spacing */}
            <NavItems items={navItems} onItemClick={handleNavClick} />
            
            <div className="flex items-center gap-3 ml-4">
              <ThemeToggle />
              <Link to="/contact" onClick={handleNavClick}>
                <NavbarButton as="span" variant="secondary">
                  Get in Touch
                </NavbarButton>
              </Link>
              <NavbarButton
                as="a"
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="gradient"
                className="inline-flex items-center gap-1 text-white"
              >
                StartupArk
                <ArrowUpRight size={16} />
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </MobileNavHeader>

            <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  onClick={handleNavClick}
                  className="relative text-muted py-3 text-base font-medium transition-colors hover:text-foreground block"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="block">{item.name}</span>
                  </motion.div>
                </Link>
              ))}
              <div className="flex w-full flex-col gap-3 mt-4">
                <Link to="/contact" onClick={handleNavClick}>
                  <NavbarButton as="span" variant="secondary" className="w-full">
                    Get in Touch
                  </NavbarButton>
                </Link>
                <NavbarButton
                  as="a"
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  variant="gradient"
                  className="w-full inline-flex items-center justify-center gap-1 text-white"
                >
                  StartupArk
                  <ArrowUpRight size={16} />
                </NavbarButton>
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