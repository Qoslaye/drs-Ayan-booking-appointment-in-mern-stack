import React from 'react';
import { FiUsers, FiCheckCircle, FiXCircle, FiCalendar } from 'react-icons/fi';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DoctorDashboard = () => {
  // Quick Stats
  const stats = [
    {
      title: "Today's Appointments",
      value: "8",
      icon: <FiCalendar className="w-6 h-6" />,
      change: "2 remaining",
      bgColor: "bg-blue-500",
    },
    {
      title: "Active Patients",
      value: "3",
      icon: <FiUsers className="w-6 h-6" />,
      change: "In waiting room",
      bgColor: "bg-green-500",
    },
    {
      title: "Completed Today",
      value: "5",
      icon: <FiCheckCircle className="w-6 h-6" />,
      change: "On schedule",
      bgColor: "bg-indigo-500",
    },
    {
      title: "Cancelled Today",
      value: "1",
      icon: <FiXCircle className="w-6 h-6" />,
      change: "Rescheduled",
      bgColor: "bg-red-500",
    },
  ];

  // Today's Timeline Data
  const todayAppointments = {
    labels: ['9 AM', '10 AM', '11 AM', '12 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
    datasets: [
      {
        label: 'Appointments',
        data: [1, 2, 1, 0, 2, 1, 1, 0],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
      }
    ]
  };

  // Quick Patient Distribution
  const quickPatientTypes = {
    labels: ['New', 'Follow-up', 'Emergency'],
    datasets: [
      {
        data: [3, 4, 1],
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
      }
    ]
  };

  const recentAppointments = [
    {
      id: 1,
      patient: "Sarah Johnson",
      time: "10:00 AM",
      type: "Follow-up",
      status: "Completed"
    },
    {
      id: 2,
      patient: "Michael Brown",
      time: "11:30 AM",
      type: "New Patient",
      status: "Completed"
    },
    {
      id: 3,
      patient: "Emma Wilson",
      time: "2:00 PM",
      type: "Emergency",
      status: "In Progress"
    },
    {
      id: 4,
      patient: "James Smith",
      time: "3:30 PM",
      type: "Follow-up",
      status: "Scheduled"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Drs. Ayan!</h1>
          <p className="mt-1 text-sm text-gray-500">Here's your day at a glance</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          New Appointment
        </button>
      </div>

      {/* Today's Quick Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 p-3 rounded-md ${stat.bgColor}`}>
                  {React.cloneElement(stat.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className="ml-2 text-sm text-gray-600">{stat.change}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Today's Timeline */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Today's Schedule</h3>
          <div className="h-[200px]">
            <Line 
              data={todayAppointments}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 3,
                    ticks: { stepSize: 1 }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Quick Patient Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Today's Patient Types</h3>
          <div className="h-[200px]">
            <Doughnut 
              data={quickPatientTypes}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: 'bottom' }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Today's Appointments</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentAppointments.map((appointment) => (
            <div key={appointment.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      {appointment.patient.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{appointment.patient}</div>
                    <div className="text-sm text-gray-500">{appointment.type}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-gray-500 mr-4">{appointment.time}</div>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
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

export default DoctorDashboard; 