/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect , useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";

import Footer from "../components/Footer";
import logo from "../assets/MP-removebg-preview.png";

interface Props {}

const Get: React.FC<Props> = () => {
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
    e.preventDefault(); // Prevent the default form submission

    const emailData = {
      name,
      email,
      message,
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
        setStatus("Email sent successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      setStatus("An error occurred while sending the email.");
    }
  };
  return (
    <>
      
    
      <section className="py-24 text-white dark:bg-gray-500 dark:text-gray-900 block md:hidden justify-center">
  <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-black dark:border-gray-700">
    {/* Logo Image */}
    <div className="flex justify-center">
    <img src={logo} className="h-36 w-36 object-contain" style={{ height: '96px', width: '96px' }} />
    </div>
    
    {/* Heading */}
    <div className="text-center mt-[-4]">
      <h5 className="text-xl font-bold text-gray-900 dark:text-white">{"{ MarkPyroPrime }"}</h5>
      <p className="text-sm text-gray-500 dark:text-gray-200 mt-2">Create,Transform,Become</p>
    </div>

    {/* Buttons */}
    <div className="flow-root mt-8">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center justify-center">
            <a href="https://markpyroprime.com/" type="button" className="w-96 py-3 font-semibold text-center rounded-full border-4 border-sky-500 hover:dark:text-white hover:dark:bg-black dark:bg-white dark:text-black">
               markpyroprime.com 
            </a>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center justify-center">
            <a href="https://www.instagram.com/_m.a.p.p_?igsh=eDRodjNxMDlmOHo1" type="button" className="w-96 py-3 font-semibold text-center rounded-full border-4 border-sky-500 hover:dark:text-white hover:dark:bg-black dark:bg-white dark:text-black">
              Instagram
            </a>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center justify-center">
            <a href="https://www.facebook.com/share/Tx7ft6ZEipw9BNyD/?mibextid=qi2Omg" type="button" className="w-96 py-3 font-semibold text-center rounded-full border-4 border-sky-500 hover:dark:text-white hover:dark:bg-black dark:bg-white dark:text-black">
              Facebook
            </a>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center justify-center">
            <a href="https://wa.me/9342139631" type="button" className="w-96 py-3 font-semibold text-center rounded-full border-4 border-sky-500 hover:dark:text-white hover:dark:bg-black dark:bg-white dark:text-black">
              Whatsapp
            </a>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center justify-center">
            <a href="http://www.linkedin.com/in/mark-pyro-prime-mapp-a082402b3" type="button" className="w-96 py-3 font-semibold text-center rounded-full border-4 border-sky-500 hover:dark:text-white hover:dark:bg-black dark:bg-white dark:text-black">
              Linkedin
            </a>
          </div>
        </li>
        <li className="pt-3 pb-8 sm:pt-4">
          <div className="flex items-center justify-center">
            <a href="https://x.com/Mapp_Mp" type="button" className="w-96 py-3 font-semibold text-center rounded-full border-4 border-sky-500 hover:dark:text-white hover:dark:bg-black dark:bg-white dark:text-black">
              X
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>


      <section className="py-44 text-white dark:bg-gray-500 tracking-widest dark:text-gray-900 hidden md:block">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-2 flex flex-col">
            <h1 className="text-5xl font-extrabold md:mb-8 tracking-widest text-white">{"{ Join the Squad }"}</h1>
            <p className="pt-2 pb-4 text-lg ">
              Slide Your Info, We’ll Hit You Back
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Madurai</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-white"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+91 9342139631</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-white"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>marcportal01@gmail.com</span>
              </p>
            </div>
          </div>

          <form onSubmit={sendEmail}
            
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1 text-white">What Should We Call You?</span>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-lg p-3 shadow-lg border-2 border-white focus:ring focus:ring-opacity-75 focus:ring-white bg-white"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-white">Your Digital Handle</span>
              <input
                type="email"
                placeholder="Mail-Id@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-lg p-3 shadow-lg border-2 border-white focus:ring focus:ring-opacity-75 focus:ring-white bg-white"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-white">Tell Us What's On Your Mind</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your Message..."
                className="block w-full rounded-lg p-3 shadow-lg border-2 border-white focus:ring focus:ring-opacity-75 focus:ring-white bg-white"
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-center px-8 py-3 text-lg rounded-xl shadow-xl focus:ring hover:ring focus:ring-opacity-75 border-4 border-sky-600 hover:border-black bg-white text-black hover:bg-black hover:text-white"
            >
              Submit
            </button>
            {status && <p className="mt-2 text-sm text-green-500">{status}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Get;





