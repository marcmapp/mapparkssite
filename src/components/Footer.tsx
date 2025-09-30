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
    <footer className="bg-white  shadow ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
             
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-black">Mapp Arks</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4">
      <li>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <Linkedin size={22} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <Instagram size={22} />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/yourNumber"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
        >
          <MessageCircle size={22} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition-colors"
        >
          <Twitter size={22} />
        </a>
      </li>
    </ul>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
        <span className="block text-sm text-black sm:text-center dark:black">© 2024 <a href="https://markpyroprime.com/" className="hover:underline">MAPP</a>. All Rights Reserved.</span>
        {/* <a href = '/portal' className='text-white'>MP</a> */}
        
    </div>
</footer>
        </>
    );
};

export default Footer;
