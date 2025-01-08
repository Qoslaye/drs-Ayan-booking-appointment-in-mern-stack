import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiBell, 
  FiMail, 
  FiSearch, 
  FiCalendar, 
  FiMessageSquare, 
  FiSettings, 
  FiHelpCircle, 
  FiLogOut 
} from 'react-icons/fi';

const DoctorHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear all tokens to be safe
    localStorage.removeItem('doctorToken');
    localStorage.removeItem('patientToken');
    
    // Close the profile dropdown
    setShowProfile(false);
    
    // Redirect to doctor login page
    navigate('/doctor/login');
  };

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      type: 'appointment',
      message: 'New appointment request from Sarah Johnson',
      time: '5 mins ago',
      isRead: false
    },
    {
      id: 2,
      type: 'message',
      message: 'Dr. Smith sent you a message',
      time: '1 hour ago',
      isRead: false
    },
    {
      id: 3,
      type: 'system',
      message: 'System maintenance scheduled for tonight',
      time: '2 hours ago',
      isRead: true
    }
  ];

  const todayDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed right-0 left-64 top-0 z-30 shadow-sm">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold text-gray-600">Welcome back, Dr. Ayan!</h2>
            <p className="text-xs text-gray-400">{todayDate}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Quick Actions */}
          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
            <FiCalendar className="w-5 h-5" />
          </button>
          
          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
            <FiMessageSquare className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              <div className="relative">
                <FiBell className="w-5 h-5" />
                {notifications.some(n => !n.isRead) && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </div>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                    <button className="text-xs text-blue-600 hover:text-blue-800">
                      Mark all as read
                    </button>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                        !notification.isRead ? 'bg-blue-50' : ''
                      }`}
                    >
                      <p className="text-sm text-gray-800">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-3 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium">
                DA
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-700">Dr. Ayan</p>
                <p className="text-xs text-gray-400">General Physician</p>
              </div>
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                  <FiSettings className="w-4 h-4 mr-3" />
                  Settings
                </button>
                <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                  <FiHelpCircle className="w-4 h-4 mr-3" />
                  Help Center
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button 
                  onClick={handleSignOut}
                  className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                >
                  <FiLogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DoctorHeader;