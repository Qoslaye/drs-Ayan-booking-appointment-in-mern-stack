import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import homeImage from '../assets/home.png';

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-x-hidden transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-950 rounded-full filter blur-3xl opacity-30 dark:opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-950 rounded-full filter blur-3xl opacity-30 dark:opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[280px] h-full bg-white dark:bg-gray-900 z-[60] transform transition-transform duration-300 ease-in-out shadow-2xl md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">healthy</span>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-2">
              <a href="#" className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                </div>
              </a>
              <a href="#" className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Services</span>
                </div>
              </a>
              <a href="#" className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>About us</span>
                </div>
              </a>
              <a href="#" className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Doctors</span>
                </div>
              </a>
              <a href="#" className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Us</span>
                </div>
              </a>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            </div>
            <button
              onClick={() => navigate('/register')}
              className="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-300/25 dark:hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
            >
              <span>Create Account</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">healthy</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Services</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About us</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Doctors</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact Us</a>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => navigate('/register')}
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-500/25"
            >
              Create Account →
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Enhanced Design */}
      <div className="container mx-auto px-6 py-16 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <div className="bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full inline-block mb-4 font-medium">
              WELCOME TO OUR CLINIC
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              Make an appointment
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Experience healthcare reimagined. Our team of expert doctors provides
              comprehensive care with cutting-edge technology and a patient-first approach.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-500/25 flex items-center">
                Book Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950 transform hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            {/* Image Container with Effects */}
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/50 rounded-full blur-2xl opacity-30 dark:opacity-20"></div>
              <img 
                src={homeImage} 
                alt="Doctor" 
                className="rounded-full relative z-10 shadow-2xl dark:shadow-blue-500/10 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 dark:bg-yellow-500 rounded-full opacity-20 dark:opacity-10 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 dark:bg-blue-500 rounded-full opacity-20 dark:opacity-10 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Features Section - Updated cards with consistent sizing */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Online Appointment Card */}
          <div className="group h-full">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-950/50 hover:shadow-2xl dark:hover:shadow-blue-500/10 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300"></div>
              <div className="relative flex flex-col flex-1">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Online appointment</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">Schedule your visit with just a few clicks. Quick, easy, and convenient booking system available 24/7.</p>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                  Make an appointment
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Emergency Case Card */}
          <div className="group h-full">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-950/50 hover:shadow-2xl dark:hover:shadow-red-500/10 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 dark:bg-red-900/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors duration-300"></div>
              <div className="relative flex flex-col flex-1">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Emergency Case</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">Available 24/7 for urgent medical assistance. Our emergency response team is always ready to help.</p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">+48 123 123 124</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Round-the-clock support</p>
                </div>
                <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                  Contact us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Our Doctors Card */}
          <div className="group h-full">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-950/50 hover:shadow-2xl dark:hover:shadow-green-500/10 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 dark:bg-green-900/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors duration-300"></div>
              <div className="relative flex flex-col flex-1">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Our Doctors</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">Meet our team of specialized healthcare professionals with years of experience in various medical fields.</p>
                <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                  Meet the team
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default HomePage;