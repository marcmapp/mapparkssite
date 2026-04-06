"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import logo from "../assets/MP-removebg-preview.png";
import { FaBuilding, FaCheckCircle } from "react-icons/fa";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailData = {
      name,
      email,
      message,
      type: 'contact_form'
    };

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! We'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
        window.scrollTo(0, 0);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      setStatus("An error occurred while sending the message.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white font-medium mb-6">
              <FaBuilding className="mr-2" />
              <span>Lets Catchup!</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Get in <span className="text-gray-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your project and explore how we can help you achieve your digital goals
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Mobile View */}
      <section className="py-12 block md:hidden bg-white">
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-lg mx-auto">
          {/* Logo Image */}
          <div className="flex justify-center">
            <img 
              src={logo} 
              className="h-36 w-36 object-contain" 
              alt="Mapp Arks Logo"
            />
          </div>
          
          {/* Heading */}
          <div className="text-center mt-[-4]">
            <h5 className="text-xl font-bold text-gray-900">{"{ Mapp Arks }"}</h5>
            <p className="text-sm text-gray-600 mt-2">Create, Transform, Become</p>
          </div>

          {/* Contact Buttons */}
          <div className="flow-root mt-8">
            <ul role="list" className="divide-y divide-gray-200">
              {[
                { label: "Website", href: "https://mapparks.com/", icon: "🌐" },
                { label: "Instagram", href: "https://www.instagram.com", icon: "📷" },
                { label: "Facebook", href: "https://www.facebook.com", icon: "👍" },
                { label: "Whatsapp", href: "https://wa.me/9342139631", icon: "💬" },
                { label: "LinkedIn", href: "https://www.linkedin.com", icon: "💼" },
                { label: "X/Twitter", href: "https://twitter.com", icon: "🐦" },
              ].map((item, index) => (
                <li key={index} className="py-3 sm:py-4">
                  <div className="flex items-center justify-center">
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full max-w-sm py-3 font-semibold text-center rounded-full border-2 border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Desktop View */}
      <section className="py-16 hidden md:block bg-white">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x md:divide-gray-300">
          <div className="py-6 md:py-0 md:px-6 flex flex-col">
            <h1 className="text-5xl font-extrabold md:mb-8 text-gray-900">
              {"{ Join the Squad }"}
            </h1>
            <p className="pt-2 pb-4 text-lg text-gray-600">
              Slide Your Info, We'll Hit You Back
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-gray-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-700">Madurai, Tamil Nadu</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-gray-700"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span className="text-gray-700">+91 93421 39631</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-gray-700"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className="text-gray-700">info@mapparks.com</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors text-gray-700"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition-colors text-gray-700"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://wa.me/919342139631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition-colors text-gray-700"
                >
                  <MessageCircle size={22} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors text-gray-700"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1 text-gray-900 font-medium">What Should We Call You?</span>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-lg p-3 shadow-sm border-2 border-gray-300 focus:border-black focus:outline-none bg-white text-gray-900"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-gray-900 font-medium">Your Digital Handle</span>
              <input
                type="email"
                placeholder="mail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-lg p-3 shadow-sm border-2 border-gray-300 focus:border-black focus:outline-none bg-white text-gray-900"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-gray-900 font-medium">Tell Us What's On Your Mind</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your Message..."
                className="block w-full rounded-lg p-3 shadow-sm border-2 border-gray-300 focus:border-black focus:outline-none bg-white text-gray-900"
                rows={4}
              ></textarea>
            </label>
            {status && (
              <div className={`p-3 rounded-lg ${status.includes('successfully') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {status}
              </div>
            )}
            <button
              type="submit"
              className="self-center px-8 py-3 text-lg rounded-xl shadow-sm border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;