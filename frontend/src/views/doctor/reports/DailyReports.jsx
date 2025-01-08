import React, { useState } from 'react';
import { FiCalendar, FiClock, FiUser, FiDollarSign } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DailyReports = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Mock data for daily appointments
  const dailyAppointments = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      time: "09:00 AM",
      type: "General Checkup",
      status: "Completed",
      payment: 150
    },
    {
      id: 2,
      patientName: "Mike Brown",
      time: "10:30 AM",
      type: "Follow-up",
      status: "Completed",
      payment: 100
    },
    {
      id: 3,
      patientName: "Emma Wilson",
      time: "02:00 PM",
      type: "Emergency",
      status: "In Progress",
      payment: 200
    },
    // Add more appointments as needed
  ];

  // Daily statistics
  const dailyStats = {
    totalAppointments: dailyAppointments.length,
    completed: dailyAppointments.filter(app => app.status === "Completed").length,
    inProgress: dailyAppointments.filter(app => app.status === "In Progress").length,
    totalRevenue: dailyAppointments.reduce((sum, app) => sum + app.payment, 0)
  };

  // Hourly distribution data
  const hourlyData = {
    labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'],
    datasets: [
      {
        label: 'Appointments',
        data: [1, 2, 1, 0, 1, 2, 1, 0],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Daily Reports</h1>
          <p className="mt-1 text-sm text-gray-500">Detailed view of daily appointments and statistics</p>
        </div>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Daily Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiCalendar className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Appointments</p>
              <p className="text-2xl font-semibold text-gray-900">{dailyStats.totalAppointments}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiClock className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">{dailyStats.completed}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiUser className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">In Progress</p>
              <p className="text-2xl font-semibold text-gray-900">{dailyStats.inProgress}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiDollarSign className="h-8 w-8 text-indigo-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">${dailyStats.totalRevenue}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Distribution Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Hourly Distribution</h2>
        <div className="h-[300px]">
          <Line
            data={hourlyData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: 'bottom' },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { stepSize: 1 }
                }
              }
            }}
          />
        </div>
      </div>

      {/* Appointments List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Today's Appointments</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {dailyAppointments.map((appointment) => (
            <div key={appointment.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                      {appointment.patientName.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {appointment.patientName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {appointment.type}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-gray-500 mr-4">
                    {appointment.time}
                  </div>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    appointment.status === 'Completed' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyReports; 