/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react";
import logo from '../assets/MP-removebg-preview.png';
"use client";

interface Props {} 

const Footer: React.FC<Props> = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            once: true,
        });
    }, []);     
     
  
    
    return (
    <>
    <footer className="bg-background border-t border-border">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">

            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8 dark:invert" alt="Mapp Arks logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-foreground">Mapp Arks</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-muted sm:mb-0 gap-4">
      <li>
        <a
          href="https://www.linkedin.com/in/mark-pyro-prime--a082402b3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mapp Arks on LinkedIn"
          className="hover:text-accent transition-colors"
        >
          <Linkedin size={22} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/_m.a.p.p_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mapp Arks on Instagram"
          className="hover:text-accent transition-colors"
        >
          <Instagram size={22} />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/919342139631"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mapp Arks on WhatsApp"
          className="hover:text-accent transition-colors"
        >
          <MessageCircle size={22} />
        </a>
      </li>
      <li>
        <a
          href="https://x.com/_Mp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mapp Arks on X"
          className="hover:text-accent transition-colors"
        >
          <Twitter size={22} />
        </a>
      </li>
    </ul>
        </div>
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <span className="block text-sm text-muted sm:text-center">© 2026 <a href="https://mapparks.com/" className="text-foreground hover:underline">Mapp Arks</a>. All Rights Reserved.</span>
        
    </div>
</footer>
        </>
    );
};

export default Footer;
