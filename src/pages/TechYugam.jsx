import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Users, BookOpen, Award, Mail, Phone, MapPin, ArrowRight, CheckCircle, Star, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const TechYugam = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('xfmDsPNAZUnb1BXU5'); // Replace with your actual EmailJS user ID
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_03cecef', // Replace with your service ID
        'template_xprxfd9', // Replace with your template ID
        {
          to_email: 'techyugamforge@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message
        }
      );

      // Show success modal
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });

      // Hide modal after 5 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Failed to send your inquiry. Please try again later or contact us directly at techyugamforge@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <Code className="w-8 h-8 transition-transform hover:scale-110" />,
      title: "Custom Project Development",
      description: "Complete end-to-end project development from ideation to deployment with clean, well-documented code."
    },
    {
      icon: <BookOpen className="w-8 h-8 transition-transform hover:scale-110" />,
      title: "Academic Documentation",
      description: "Comprehensive reports, technical documentation, and presentation materials that meet academic standards."
    },
    {
      icon: <Users className="w-8 h-8 transition-transform hover:scale-110" />,
      title: "Consultation & Planning",
      description: "Expert guidance on project selection, technology stack, and implementation roadmap."
    },
    {
      icon: <Award className="w-8 h-8 transition-transform hover:scale-110" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks to ensure your project meets all requirements and functions flawlessly."
    }
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App Development", 
    "Data Science & Analytics",
    "Machine Learning",
    "Database Management",
    "IoT Projects",
    "Blockchain Applications",
    "AI/ML Integration"
  ];

  const testimonials = [
    {
      name: "Akanksha Saraf",
      course: "MMCOE,Pune",
      rating: 5,
      text: "TechYugam delivered my final year project ahead of schedule. The documentation was exceptional and helped me understand every aspect of the implementation."
    },
    {
      name: "Sujal Naphade",
      course: "DY Patil College of Engineering, Pune",
      rating: 5,
      text: "Professional service with excellent communication. They guided me through the entire process and the project exceeded my expectations."
    },
    {
      name: "Tejaswini Pagare",
      course: "PCCOE,Pune",
      rating: 4,
      text: "The team's technical expertise is outstanding. They not only delivered a working project but also taught me the concepts behind it."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4 transform transition-all duration-300 scale-95 animate-scaleIn">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform hover:scale-105">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechYugam
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </nav>

            <button 
              className="md:hidden transition-transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t transition-all duration-300 ease-in-out">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
              Empowering Students with
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradientBg">
                Ready-to-Submit Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeIn delay-100">
              From ideation to execution, we deliver complete academic projects tailored to your requirements. 
              Focus on learning while we handle the technical complexities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-200">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-100">
              Comprehensive project development services designed specifically for college students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 animate-fadeIn"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About TechYugam
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TechYugam is a student-led startup dedicated to empowering college students by delivering 
                complete, ready-to-submit academic projects. We understand the challenges students face 
                in balancing coursework, projects, and other commitments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 transition-transform hover:scale-[1.01]">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Project Development</h4>
                    <p className="text-gray-600">From planning to deployment, we handle every aspect</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transition-transform hover:scale-[1.01]">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Academic Standards</h4>
                    <p className="text-gray-600">Projects that meet university requirements and guidelines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transition-transform hover:scale-[1.01]">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Learning Focused</h4>
                    <p className="text-gray-600">Comprehensive documentation to help you understand every detail</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transition-transform hover:scale-[1.01] animate-fadeIn delay-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type, index) => (
                  <div 
                    key={index} 
                    className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 transition-transform hover:scale-105 hover:shadow-sm"
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600 animate-fadeIn delay-100">
              Hear from students who've successfully completed their projects with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Start Your Project Today
            </h2>
            <p className="text-xl text-gray-600 animate-fadeIn delay-100">
              Ready to get started? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-[1.01] animate-fadeIn">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Describe your project requirements, timeline, and any specific technologies you need to use..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      Send Inquiry
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className={`p-4 rounded-lg transition-all duration-300 ${submitMessage.includes('successfully') ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <p className={submitMessage.includes('successfully') ? 'text-green-700' : 'text-red-700'}>
                      {submitMessage}
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fadeIn delay-100">
              <div className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.01]">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 transition-transform hover:scale-[1.01]">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">techyugamforge@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 transition-transform hover:scale-[1.01]">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 8999316982</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 transition-transform hover:scale-[1.01]">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Service Area</p>
                      <p className="text-gray-600">Pan India (Remote Services)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl transition-transform hover:scale-[1.01]">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 transition-transform hover:scale-[1.01]">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">24/7 Support & Communication</span>
                  </li>
                  <li className="flex items-start space-x-3 transition-transform hover:scale-[1.01]">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">100% Original & Plagiarism-Free</span>
                  </li>
                  <li className="flex items-start space-x-3 transition-transform hover:scale-[1.01]">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">On-Time Delivery Guaranteed</span>
                  </li>
                  <li className="flex items-start space-x-3 transition-transform hover:scale-[1.01]">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Revision Support Included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform hover:rotate-12">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TechYugam</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering college students with ready-to-submit academic projects. 
                From ideation to execution, we handle the technical complexities.
              </p>
              <p className="text-gray-400">
                © 2025 TechYugam. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Data Science</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Add these styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes gradientBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
        .animate-gradientBg {
          background-size: 200% auto;
          animation: gradientBg 3s ease infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default TechYugam;