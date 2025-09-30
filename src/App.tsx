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
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Get from './pages/Get';

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
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
      name: "Products",
      link: "/products",
    },
    
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      {/* Navigation */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-5 left-0 w-full z-50 transition-all duration-300 bg-transparent`}
      >
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <nav className="flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="text-black dark:text-black hover:text-cyan-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <NavbarButton variant="secondary">Login</NavbarButton>
              </Link>
              <Link to="/get">
                <NavbarButton variant="primary">Book a call</NavbarButton>
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
                  onClick={closeMobileMenu}
                  className="relative text-neutral-600 dark:text-neutral-300 py-3 text-lg font-medium transition-colors hover:text-green-600 block"
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
                <Link to="/login" onClick={closeMobileMenu}>
                  <NavbarButton variant="primary" className="w-full">
                    Login
                  </NavbarButton>
                </Link>
                <Link to="/get" onClick={closeMobileMenu}>
                  <NavbarButton variant="primary" className="w-full">
                    Book a call
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
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/get" element={<Get />} />
          <Route path="/login" element={<div className="min-h-screen flex items-center justify-center">Login Page - Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;