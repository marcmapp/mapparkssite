import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaCertificate,
  FaClock,
  FaUserGraduate,
  FaStar
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Add this import
import Footer from '../components/Footer';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';

const Courses: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const courses = [
    {
      icon: <FaReact className="text-4xl" />,
      title: "MERN Stack Mastery",
      description: "Master MongoDB, Express.js, React, and Node.js to build full-stack applications",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      price: "₹15,999",
      features: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Deployment"],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaAngular className="text-4xl" />,
      title: "MEAN Stack Development",
      description: "Build enterprise applications with MongoDB, Express.js, Angular, and Node.js",
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹14,999",
      features: ["MongoDB", "Express.js", "Angular", "Node.js", "TypeScript", "RxJS"],
      popular: false,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaNodeJs className="text-4xl" />,
      title: "Backend Development",
      description: "Build scalable server-side applications with Node.js and databases",
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹11,999",
      features: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Authentication", "AWS"],
      popular: true,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud & DevOps",
      description: "Master cloud infrastructure and deployment pipelines",
      duration: "8 weeks",
      level: "Advanced",
      price: "₹14,999",
      features: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
      popular: false,
      color: "from-purple-500 to-indigo-500"
    },
  ];

  const courseFeatures = [
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "Certificate",
      description: "Receive recognized certification upon completion"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with recorded sessions"
    },
    {
      icon: <FaUserGraduate className="text-2xl" />,
      title: "Expert Mentors",
      description: "Learn from industry professionals"
    },
    {
      icon: <FaStar className="text-2xl" />,
      title: "Project-Based",
      description: "Build real projects for your portfolio"
    }
  ];

  // Function to handle enrollment click
  const handleEnrollClick = (courseTitle: string) => {
    // Navigate to contact page with course title as state
    navigate('/contact', { 
      state: { 
        course: courseTitle,
        message: `I'm interested in enrolling in the ${courseTitle} course. Please contact me with more information.`
      } 
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
                Master <span className="text-gray-600">In-Demand</span> Skills
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Industry-relevant courses designed by professionals to accelerate your tech career
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View Courses
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  className="bg-transparent border-2 border-black text-black font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                >
                  Why Choose Us
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
                    Popular Tech Stacks
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-600 text-lg mb-8"
                  >
                    Learn the most in-demand technologies used by top companies
                  </CardItem>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <FaReact className="text-2xl" />, name: "MERN Stack", color: "bg-blue-100" },
                      { icon: <FaAngular className="text-2xl" />, name: "MEAN Stack", color: "bg-red-100" },
                      { icon: <FaNodeJs className="text-2xl" />, name: "Node.js", color: "bg-green-100" },
                      { icon: <FaDatabase className="text-2xl" />, name: "Databases", color: "bg-yellow-100" },
                    ].map((tech, idx) => (
                      <CardItem
                        key={idx}
                        translateZ="30"
                        className={`${tech.color} p-4 rounded-xl text-center`}
                      >
                        <div className="text-gray-900 mb-2">{tech.icon}</div>
                        <div className="font-bold text-gray-900">{tech.name}</div>
                      </CardItem>
                    ))}
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features with 3D Cards */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Course <span className="text-gray-600">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {courseFeatures.map((feature, idx) => (
              <CardContainer key={idx} containerClassName="w-full h-full">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl w-full h-full rounded-xl p-8 text-center border border-gray-200">
                  <CardItem
                    translateZ="50"
                    className="text-gray-900 mb-6"
                  >
                    {feature.icon}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold mb-4 text-gray-900"
                  >
                    {feature.title}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-gray-600"
                  >
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid with 3D Cards */}
      <section id="courses" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Our <span className="text-gray-600">Courses</span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our comprehensive courses designed to make you industry-ready
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, idx) => (
              <CardContainer key={idx} containerClassName="w-full h-full">
                <CardBody className={`bg-gradient-to-r ${course.color} relative group/card hover:shadow-2xl w-full h-full rounded-2xl p-8 border border-opacity-20`}>
                  {course.popular && (
                    <CardItem
                      translateZ="100"
                      className="absolute top-0 right-6 transform -translate-y-1/2"
                    >
                      <span className="bg-white text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </CardItem>
                  )}

                  <div className="mb-6">
                    <CardItem
                      translateZ="50"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-lg w-fit text-white mb-4"
                    >
                      {course.icon}
                    </CardItem>
                    <CardItem
                      translateZ="60"
                      className="text-2xl font-bold mb-4 text-white"
                    >
                      {course.title}
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-white/90 mb-6"
                    >
                      {course.description}
                    </CardItem>
                    
                    <CardItem
                      translateZ="40"
                      className="space-y-3 mb-6"
                    >
                      <div className="flex items-center text-white/80">
                        <FaClock className="mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-white/80">
                        <span className="mr-2">Level:</span>
                        <span className="font-medium">{course.level}</span>
                      </div>
                     
                    </CardItem>

                    <CardItem
                      translateZ="30"
                      className="mb-8"
                    >
                      <h4 className="font-bold mb-3 text-white">What You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.features.map((feature, fIdx) => (
                          <CardItem
                            key={fIdx}
                            translateZ="20"
                            className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                          >
                            {feature}
                          </CardItem>
                        ))}
                      </div>
                    </CardItem>
                  </div>
                  
                  <CardItem
                    translateZ={20}
                    as="button"
                    onClick={() => handleEnrollClick(course.title)} // Updated to use navigate function
                    className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    Enroll Now
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked <span className="text-gray-600">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Are the courses self-paced or live sessions?",
                a: "We offer both options! Most courses include recorded video lessons for self-paced learning, plus weekly live Q&A sessions with instructors."
              },
              {
                q: "Do you provide certificates?",
                a: "Yes, upon successful completion, you'll receive a certificate that can be added to your portfolio and LinkedIn profile."
              },
              {
                q: "What are the prerequisites for the courses?",
                a: "Basic programming knowledge is recommended for development courses. We offer beginner-friendly content to help you get started."
              },
              {
                q: "Can I access course materials after completion?",
                a: "Yes, you get lifetime access to all course materials, including future updates."
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;