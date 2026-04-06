import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaRobot, 
  FaChartLine, 
  FaLightbulb,
  FaUsers,
  FaLock,
  FaRocket,
  FaCogs,
  FaMagic,
  FaArrowRight,
  FaCode
} from 'react-icons/fa';
import Footer from '../components/Footer';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';


const RND: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  const projects = [
    {
      icon: <FaBrain className="text-4xl" />,
      title: "AI-Powered Business Automation",
      stage: "In Development",
      description: "Leveraging artificial intelligence to streamline business operations and decision-making processes for startup founders.",
      tech: ["Machine Learning", "Natural Language Processing", "Predictive Analytics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "Intelligent Workflow Orchestration",
      stage: "Prototype Phase",
      description: "Developing smart systems that automate complex business workflows while adapting to organizational needs.",
      tech: ["Automation", "Workflow Engines", "Adaptive Systems"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Predictive Business Insights",
      stage: "Research Phase",
      description: "Creating advanced analytics platforms that provide actionable insights for business growth and optimization.",
      tech: ["Data Science", "Analytics", "Visualization"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const focusAreas = [
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Innovation",
      description: "Exploring cutting-edge technologies to solve complex business challenges"
    },
    {
      icon: <FaLock className="text-2xl" />,
      title: "Security",
      description: "Building secure and compliant solutions for enterprise-grade applications"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "User-Centric",
      description: "Designing solutions that prioritize user experience and business value"
    },
    {
      icon: <FaCogs className="text-2xl" />,
      title: "Scalability",
      description: "Developing systems that grow seamlessly with business needs"
    }
  ];

 

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailData = {
      email,
      type: 'rnd_updates',
      message: 'Interested in R&D updates'
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
        setEmailStatus("Successfully subscribed! We'll keep you updated.");
        setEmail('');
        window.scrollTo(0, 0);
      } else {
        setEmailStatus("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting email: ", error);
      setEmailStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium mb-6">
              <FaRocket className="mr-2" />
              <span>Innovation in Progress</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Building the <span className="text-gray-600">Future</span> of Business
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Transforming entrepreneurship through innovative technology solutions
            </p>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto shadow-sm">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Mapp Arks, our Research & Development division is dedicated to creating 
                groundbreaking solutions that simplify the entrepreneurial journey. We're working 
                on something special that will revolutionize how startups operate and grow.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                While we're keeping the details under wraps for now, we're excited to share that 
                we're leveraging advanced AI and automation technologies to build tools that will 
                make running a business more efficient, intuitive, and successful.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-gray-600">Focus</span> Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {focusAreas.map((area, idx) => (
              <CardContainer key={idx} containerClassName="w-full h-full">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl w-full h-full rounded-xl p-8 text-center border border-gray-200">
                  <CardItem
                    translateZ="50"
                    className="text-gray-900 mb-6"
                  >
                    {area.icon}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold mb-4 text-gray-900"
                  >
                    {area.title}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-gray-600"
                  >
                    {area.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Current <span className="text-gray-600">Initiatives</span>
          </h2>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`bg-gradient-to-r ${project.color} rounded-2xl p-8 shadow-lg`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                        {project.stage}
                      </span>
                    </div>
                    
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 mb-6">
              <FaLightbulb className="mr-2" />
              <span>Something Big Is Coming</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Revolutionizing Startup Operations
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We're building an intelligent platform that will transform how entrepreneurs 
              manage their businesses. By combining AI, automation, and deep business insights, 
              we're creating tools that will help startups thrive in today's competitive landscape.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Sign up to be the first to know about our upcoming product launch and get early access.
              </p>
              
              {emailStatus && (
                <div className={`mb-4 p-3 rounded-lg ${emailStatus.includes('Successfully') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {emailStatus}
                </div>
              )}
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                />
                <button 
                  type="submit"
                  className="bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Get Notified
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RND;