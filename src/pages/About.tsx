/* eslint-disable no-undef */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  "use client";

  import { useEffect } from 'react';
  import AOS from 'aos';
  import 'aos/dist/aos.css';



  import "./Home.css";

  "use client";
  
  import Footer from "../components/Footer";

  

  const About = () => {
      useEffect(() => {
          AOS.init({
              duration: 800,
              offset: 100,
              once: true,
          });
      }, []);     
      
      
    




      return (
      <>
      
      
    
  ABOUT
      
  <Footer />
          </>
      );
  };
 
  export default About;
