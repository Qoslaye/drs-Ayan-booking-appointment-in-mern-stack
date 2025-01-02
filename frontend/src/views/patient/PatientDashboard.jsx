import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('appointments');

  // Mock data for appointments (replace with actual API data)
  const [appointments] = useState([
    {
      id: 1,
      date: '2024-03-20',
      time: '10:00 AM',
      doctor: 'Dr. Sarah Wilson',
      department: 'Cardiology',
      status: 'upcoming'
    },
    {
      id: 2,
      date: '2024-03-15',
      time: '2:30 PM',
      doctor: 'Dr. John Smith',
      department: 'General Medicine',
      status: 'completed'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar isAuthenticated={true} />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => navigate('/patient/book-appointment')}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Book Appointment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Schedule a new appointment</p>
              </div>
            </div>
          </button>

          <button className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Medical Records</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">View your health records</p>
              </div>
            </div>
          </button>

          <button className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Appointment History</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">View past appointments</p>
              </div>
            </div>
          </button>
        </div>

        {/* Appointments Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Appointments</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('appointments')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'appointments'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'history'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                History
              </button>
            </div>
          </div>

          {/* Appointments List */}
          <div className="space-y-4">
            {appointments
              .filter(apt => 
                activeTab === 'appointments' 
                  ? apt.status === 'upcoming' 
                  : apt.status === 'completed'
              )
              .map(appointment => (
                <div
                  key={appointment.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        appointment.status === 'upcoming' 
                          ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                          : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                      }`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{appointment.doctor}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.department}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{appointment.date}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.time}</p>
                    </div>
                    {appointment.status === 'upcoming' && (
                      <button className="px-4 py-2 text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard; 