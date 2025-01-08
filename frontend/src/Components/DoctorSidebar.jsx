import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiCalendar, 
  FiSearch, 
  FiFileText, 
  FiUsers, 
  FiPieChart,
  FiClock,
  FiCheckSquare,
  FiXSquare,
  FiBarChart2,
  FiActivity,
  FiClipboard,
  FiGrid,
  FiMessageSquare
} from 'react-icons/fi';

const DoctorSidebar = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { type: 'section', label: 'MAIN MENU' },
    {
      type: 'item',
      icon: <FiHome />,
      label: 'Dashboard',
      path: '/doctor/dashboard'
    },
    {
      type: 'item',
      icon: <FiPieChart />,
      label: 'Analytics',
      path: '/doctor/analytics'
    },
    { type: 'section', label: 'MANAGEMENT' },
    {
      type: 'dropdown',
      icon: <FiCalendar />,
      label: 'Appointments',
      isOpen: isAppointmentOpen,
      setIsOpen: setIsAppointmentOpen,
      items: [
        { icon: <FiClipboard />, label: 'All', path: '/doctor/all-appointments' },
        { icon: <FiCheckSquare />, label: 'Completed', path: '/doctor/completed-appointments' },
        { icon: <FiXSquare />, label: 'Cancelled', path: '/doctor/cancelled-appointments' }
      ]
    },
    {
      type: 'dropdown',
      icon: <FiFileText />,
      label: 'Reports',
      isOpen: isReportOpen,
      setIsOpen: setIsReportOpen,
      items: [
        { icon: <FiClock />, label: 'Daily Reports', path: '/doctor/reports/daily' },
        { icon: <FiBarChart2 />, label: 'Weekly Reports', path: '/doctor/reports/weekly' },
        { icon: <FiActivity />, label: 'Monthly Reports', path: '/doctor/reports/monthly' }
      ]
    },
    { type: 'section', label: 'PATIENT CARE' },
    {
      type: 'item',
      icon: <FiUsers />,
      label: 'Patients',
      path: '/doctor/patients'
    },
    {
      type: 'item',
      icon: <FiSearch />,
      label: 'Search',
      path: '/doctor/search'
    }
  ];

  const renderMenuItem = (item) => {
    switch (item.type) {
      case 'section':
        return (
          <div className="px-4 pt-5 pb-2">
            <p className="text-xs font-semibold text-gray-400 tracking-wider">
              {item.label}
            </p>
          </div>
        );

      case 'item':
        return (
          <button
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
              isActive(item.path)
                ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className={`mr-3 h-5 w-5 ${isActive(item.path) ? 'text-blue-600' : 'text-gray-400'}`}>
              {item.icon}
            </span>
            {item.label}
          </button>
        );

      case 'dropdown':
        return (
          <div>
            <button
              onClick={() => item.setIsOpen(!item.isOpen)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                location.pathname.includes(item.label.toLowerCase())
                  ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <span className={`mr-3 h-5 w-5 ${
                  location.pathname.includes(item.label.toLowerCase())
                    ? 'text-blue-600'
                    : 'text-gray-400'
                }`}>
                  {item.icon}
                </span>
                {item.label}
              </div>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  item.isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {item.isOpen && (
              <div className="mt-1 pl-10 space-y-1">
                {item.items.map((subItem, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(subItem.path)}
                    className={`w-full flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                      isActive(subItem.path)
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`mr-3 h-4 w-4 ${
                      isActive(subItem.path) ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      {subItem.icon}
                    </span>
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-10 flex flex-col">
      {/* Logo Section */}
      <div 
        onClick={() => navigate('/doctor/dashboard')}
        className="h-16 flex items-center justify-center border-b cursor-pointer hover:bg-gray-50 transition-all duration-200"
      >
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
            <FiActivity className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Dr's Ayan
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {renderMenuItem(item)}
          </React.Fragment>
        ))}
      </nav>

      {/* Profile Section */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
            DA
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Dr. Ayan</p>
            <p className="text-xs text-gray-500">General Physician</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSidebar; 