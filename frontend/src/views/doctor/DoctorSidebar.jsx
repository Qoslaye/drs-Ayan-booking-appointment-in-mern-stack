import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const DoctorSidebar = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed left-0 top-0">
      {/* Logo and Doctor Profile */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <a href="/doctor/dashboard" className="text-xl font-bold text-blue-600 dark:text-blue-400 block mb-6">
          Dr's Ayan
        </a>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-gray-900 dark:text-white">Hassan Ali</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">iamqoslaye@gmail.com</div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="p-4 space-y-2">
        <Link
          to="/doctor/dashboard"
          className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors duration-200 ${
            location.pathname === '/doctor/dashboard'
              ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span>Dashboard</span>
        </Link>

        {/* Appointment Dropdown */}
        <div>
          <button
            onClick={() => setIsAppointmentOpen(!isAppointmentOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Appointment</span>
            </div>
            <svg className={`w-4 h-4 transition-transform duration-200 ${isAppointmentOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Appointment Submenu */}
          <div className={`space-y-1 mt-1 ${isAppointmentOpen ? 'block' : 'hidden'}`}>
            <Link
              to="/doctor/new-appointment"
              className="flex items-center pl-12 pr-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              New Appointment
            </Link>
            <Link
              to="/doctor/approved-appointments"
              className="flex items-center pl-12 pr-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              Approved Appointment
            </Link>
            <Link
              to="/doctor/cancelled-appointments"
              className="flex items-center pl-12 pr-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              Cancelled Appointment
            </Link>
            <Link
              to="/doctor/all-appointments"
              className="flex items-center pl-12 pr-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              All Appointment
            </Link>
          </div>
        </div>

        <Link
          to="/doctor/search"
          className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Search</span>
        </Link>

        <Link
          to="/doctor/report"
          className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Report</span>
        </Link>
      </nav>
    </div>
  );
};

export default DoctorSidebar; 