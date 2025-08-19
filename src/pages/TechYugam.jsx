import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Users, BookOpen, Award, Mail, Phone, MapPin, ArrowRight, CheckCircle, Star, Send, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
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
 useEffect(() => {
    emailjs.init('xfmDsPNAZUnb1BXU5');
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
      await emailjs.send(
        'service_03cecef',
        'template_xprxfd9',
        {
          to_email: 'techyugamforge@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message
        }
      );

      setShowSuccessModal(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });

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

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/techyugamforge/",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/techyugamforge?igsh=MTg5NW5janZvd2t4cA==",
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: "Twitter",
      url: "https://x.com/techyugamforge/status/1957140164612112712?t=YlXPZJrzGWAPWBQEnZzh9w&s=08",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/16yRDBH1LZ/",
      icon: <Facebook className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated Circles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-blue-500/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 15}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl max-w-md w-full mx-4 transform transition-all duration-300 scale-95 animate-scaleIn">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-400 mb-6">
                Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center transition-transform hover:scale-105 hover:rotate-12">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TechYugam
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            <button 
              className="md:hidden transition-transform hover:scale-110 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ease-in-out">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#testimonials" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Empowering Students with
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientBg">
                Ready-to-Submit Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeIn delay-100">
              From ideation to execution, we deliver complete academic projects tailored to your requirements. 
              Focus on learning while we handle the technical complexities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-200">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a 
                href="#services"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Explore Services
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-12 animate-fadeIn delay-300">
              <p className="text-gray-400 mb-4">Follow us on social media</p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 border border-gray-700 p-3 rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 hover:bg-blue-600 text-blue-400 hover:text-white group"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeIn">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fadeIn delay-100">
              Comprehensive project development services designed specifically for college students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-2 animate-fadeIn group"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About TechYugam
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                TechYugam is a student-led startup dedicated to empowering college students by delivering 
                complete, ready-to-submit academic projects. We understand the challenges students face 
                in balancing coursework, projects, and other commitments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 transition-transform hover:scale-[1.02] group">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 group-hover:text-green-300 transition-colors duration-200" />
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-100 transition-colors duration-200">Complete Project Development</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">From planning to deployment, we handle every aspect</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transition-transform hover:scale-[1.02] group">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 group-hover:text-green-300 transition-colors duration-200" />
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-100 transition-colors duration-200">Academic Standards</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">Projects that meet university requirements and guidelines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transition-transform hover:scale-[1.02] group">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 group-hover:text-green-300 transition-colors duration-200" />
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-100 transition-colors duration-200">Learning Focused</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">Comprehensive documentation to help you understand every detail</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-transform hover:scale-[1.02] animate-fadeIn delay-100 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25">
              <h3 className="text-2xl font-bold text-white mb-6">Project Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/80 border border-gray-600 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-300"
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
      <section id="testimonials" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeIn">
              What Students Say
            </h2>
            <p className="text-xl text-gray-400 animate-fadeIn delay-100">
              Hear from students who've successfully completed their projects with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/25 animate-fadeIn group"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:text-yellow-300 transition-colors duration-200" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeIn">
              Start Your Project Today
            </h2>
            <p className="text-xl text-gray-400 animate-fadeIn delay-100">
              Ready to get started? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 animate-fadeIn">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Describe your project requirements, timeline, and any specific technologies you need to use..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center justify-center group"
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      Send Inquiry
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className={`p-4 rounded-lg transition-all duration-300 ${submitMessage.includes('successfully') ? 'bg-green-900/50 border border-green-500/50' : 'bg-red-900/50 border border-red-500/50'}`}>
                    <p className={submitMessage.includes('successfully') ? 'text-green-300' : 'text-red-300'}>
                      {submitMessage}
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fadeIn delay-100">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 transition-transform hover:scale-[1.02] group">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                    <div>
                      <p className="font-medium text-white group-hover:text-blue-100 transition-colors duration-200">Email</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">techyugamforge@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 transition-transform hover:scale-[1.02] group">
                    <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                    <div>
                      <p className="font-medium text-white group-hover:text-blue-100 transition-colors duration-200">Phone</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">+91 8999316982</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 transition-transform hover:scale-[1.02] group">
                    <MapPin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                    <div>
                      <p className="font-medium text-white group-hover:text-blue-100 transition-colors duration-200">Service Area</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">Pan India (Remote Services)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-gray-700 p-6 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 transition-transform hover:scale-[1.02] group">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 group-hover:text-green-300 transition-colors duration-200" />
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">24/7 Support & Communication</span>
                  </li>
                  <li className="flex items-start space-x-3 transition-transform hover:scale-[1.02] group">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 group-hover:text-green-300 transition-colors duration-200" />
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">100% Original & Plagiarism-Free</span>
                  </li>
                  <li className="flex items-start space-x-3 transition-transform hover:scale-[1.02] group">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 group-hover:text-green-300 transition-colors duration-200" />
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">On-Time Delivery Guaranteed</span>
                  </li>
                  <li className="flex items-start space-x-3 transition-transform hover:scale-[1.02] group">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 group-hover:text-green-300 transition-colors duration-200" />
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">Revision Support Included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center transition-transform hover:rotate-12">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TechYugam</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering college students with ready-to-submit academic projects. 
                From ideation to execution, we handle the technical complexities.
              </p>
              
              {/* Social Media Links in Footer */}
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 border border-gray-700 p-2 rounded-full hover:bg-blue-600 hover:border-blue-500 transition-all duration-200 text-gray-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <p className="text-gray-500">
                © 2025 TechYugam. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Data Science</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Contact</a></li>
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
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
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
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Glowing effect for form inputs on focus */
        input:focus, select:focus, textarea:focus {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        
        /* Matrix-like code rain effect */
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        /* Hover glow effect */
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </div>
  );
};

export default TechYugam;