import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaDatabase,
  FaCloud,
  FaUsers,
  FaCalendarAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaServer,
  FaReact,
  FaNodeJs,
  FaAngular
} from 'react-icons/fa';
import Footer from '../components/Footer';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';

const Internships: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState('all');

  const internshipTracks = [
    {
      id: 'mern',
      icon: <FaReact className="text-3xl" />,
      title: "MERN Stack Development",
      description: "Master MongoDB, Express.js, React, and Node.js to build full-stack applications",
      duration: "3-6 months",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "JWT Auth"],
      status: "open",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 'mean',
      icon: <FaAngular className="text-3xl" />,
      title: "MEAN Stack Development",
      description: "Learn MongoDB, Express.js, Angular, and Node.js for enterprise applications",
      duration: "3-6 months",
      skills: ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript", "RxJS"],
      status: "open",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 'backend',
      icon: <FaServer className="text-3xl" />,
      title: "Backend Development",
      description: "Build scalable server-side applications with Node.js and databases",
      duration: "3-6 months",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Redis"],
      status: "open",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 'devops',
      icon: <FaCloud className="text-3xl" />,
      title: "DevOps & Cloud",
      description: "Master cloud infrastructure, containerization, and deployment pipelines",
      duration: "4-6 months",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Jenkins"],
      status: "limited",
      color: "from-purple-500 to-indigo-500"
    },
  ];

  const benefits = [
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "Certificate",
      description: "Receive industry-recognized certification"
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      title: "Real Projects",
      description: "Work on actual client projects"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Mentorship",
      description: "1:1 guidance from experienced developers"
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Structured Learning",
      description: "Organized curriculum and resources"
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    track: '',
    experience: '',
    portfolio: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      college: formData.college,
      track: formData.track,
      experience: formData.experience,
      portfolio: formData.portfolio,
      type: 'internship_application'
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
        setStatus("Application submitted successfully! We'll contact you soon.");
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          college: '',
          track: '',
          experience: '',
          portfolio: ''
        });
        // Scroll to top
        window.scrollTo(0, 0);
      } else {
        setStatus("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application: ", error);
      setStatus("An error occurred while submitting the application.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Launch Your <span className="text-gray-600">Tech Career</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Gain real-world experience through our industry-focused internship programs in MERN, MEAN, and modern tech stacks
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Apply Now
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  className="bg-transparent border-2 border-black text-black font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                >
                  View Tracks
                </motion.button>
              </div>
            </motion.div>
            
            {/* 3D Card for Hero */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-br from-blue-50 to-cyan-50 relative group/card hover:shadow-2xl w-full h-auto rounded-2xl p-8 border border-blue-200">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Why Intern With Us?
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-600 text-lg mb-8"
                  >
                    Get hands-on experience with industry-standard technologies and real projects
                  </CardItem>
                  <div className="space-y-4">
                    {benefits.slice(0, 2).map((benefit, idx) => (
                      <CardItem
                        key={idx}
                        translateZ="30"
                        className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl"
                      >
                        <div className="text-blue-600">
                          {benefit.icon}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{benefit.title}</div>
                          <div className="text-sm text-gray-600">{benefit.description}</div>
                        </div>
                      </CardItem>
                    ))}
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits with 3D Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why <span className="text-gray-600">Intern</span> With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <CardContainer key={idx} containerClassName="w-full h-full">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl w-full h-full rounded-xl p-8 text-center border border-gray-200">
                  <CardItem
                    translateZ="50"
                    className="text-gray-900 mb-6"
                  >
                    {benefit.icon}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold mb-4 text-gray-900"
                  >
                    {benefit.title}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-gray-600"
                  >
                    {benefit.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Tracks with 3D Cards */}
      <section id="tracks" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Internship <span className="text-gray-600">Tracks</span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our specialized tracks designed to match industry demands
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedTrack('all')}
              className={`px-6 py-2 rounded-full ${selectedTrack === 'all' ? 'bg-black text-white' : 'bg-white text-gray-700 border border-gray-300 hover:border-black'}`}
            >
              All Tracks
            </button>
            <button
              onClick={() => setSelectedTrack('open')}
              className={`px-6 py-2 rounded-full ${selectedTrack === 'open' ? 'bg-black text-white' : 'bg-white text-gray-700 border border-gray-300 hover:border-black'}`}
            >
              Open Positions
            </button>
            <button
              onClick={() => setSelectedTrack('limited')}
              className={`px-6 py-2 rounded-full ${selectedTrack === 'limited' ? 'bg-black text-white' : 'bg-white text-gray-700 border border-gray-300 hover:border-black'}`}
            >
              Limited Seats
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {internshipTracks
              .filter(track => selectedTrack === 'all' || track.status === selectedTrack)
              .map((track, idx) => (
                <CardContainer key={idx} containerClassName="w-full h-full">
                  <CardBody className={`bg-gradient-to-r ${track.color} relative group/card hover:shadow-2xl w-full h-full rounded-2xl p-8 border border-opacity-20`}>
                    <div className="flex justify-between items-start mb-6">
                      <CardItem
                        translateZ="50"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white"
                      >
                        {track.icon}
                      </CardItem>
                      <CardItem
                        translateZ="50"
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          track.status === 'open' 
                            ? 'bg-green-900/30 text-green-200' 
                            : 'bg-yellow-900/30 text-yellow-200'
                        }`}
                      >
                        {track.status === 'open' ? 'Open' : 'Limited Seats'}
                      </CardItem>
                    </div>
                    
                    <CardItem
                      translateZ="60"
                      className="text-2xl font-bold mb-4 text-white"
                    >
                      {track.title}
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-white/90 mb-6"
                    >
                      {track.description}
                    </CardItem>
                    
                    <CardItem
                      translateZ="40"
                      className="mb-6"
                    >
                      <div className="flex items-center text-white/80 mb-2">
                        <FaCalendarAlt className="mr-2" />
                        <span className="font-medium">Duration: {track.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {track.skills.map((skill, sIdx) => (
                          <CardItem
                            key={sIdx}
                            translateZ="30"
                            className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                          >
                            {skill}
                          </CardItem>
                        ))}
                      </div>
                    </CardItem>
                    
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => {
                        setSelectedTrack(track.id);
                        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                        setFormData(prev => ({ ...prev, track: track.id }));
                      }}
                      className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-all duration-300"
                    >
                      Apply Now
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Apply for <span className="text-gray-600">Internship</span>
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Fill out the form below to start your application
            </p>

            {status && (
              <div className={`mb-6 p-4 rounded-lg ${status.includes('successfully') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="college">
                    College/University *
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="Your College Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="track">
                  Preferred Track *
                </label>
                <select
                  id="track"
                  name="track"
                  value={formData.track}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  <option value="">Select a track</option>
                  {internshipTracks.map((track, idx) => (
                    <option key={idx} value={track.id}>
                      {track.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="experience">
                  Previous Experience (if any)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="Briefly describe your previous experience..."
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="portfolio">
                  Portfolio/GitHub Link
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="https://github.com/username"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white font-bold py-4 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Submit Application
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internships;