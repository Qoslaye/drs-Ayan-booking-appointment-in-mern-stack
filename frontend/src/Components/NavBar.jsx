import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NavBar = ({ isAuthenticated = false }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = isAuthenticated ? [
    { name: 'Services', href: '#services' },
    { name: 'About us', href: '#about' },
    { name: 'Contact Us', href: '#contact' }
  ] : [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About us', href: '#about' },
    { name: 'Doctors', href: '/doctor/login' },
    { name: 'Contact Us', href: '#contact' }
  ];

  
  return (
    <>
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span 
                onClick={() => navigate('/')}
                className="text-blue-600 dark:text-blue-400 text-2xl font-bold cursor-pointer"
              >
                healthy
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href.startsWith('/') ? undefined : item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('/')) {
                      e.preventDefault();
                      navigate(item.href);
                    }
                  }}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.name}
                </a>
              ))}

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
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

              {!isAuthenticated ? (
                <button
                  onClick={() => navigate('/register')}
                  className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                  Create Account →
                </button>
              ) : (
                <button
                  onClick={() => navigate('/')}
                  className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-2 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href.startsWith('/') ? undefined : item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/')) {
                    e.preventDefault();
                    navigate(item.href);
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-gray-600 dark:text-gray-300">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
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
            {!isAuthenticated ? (
              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    navigate('/register');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Create Account →
                </button>
              </div>
            ) : (
              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    navigate('/');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBar; 