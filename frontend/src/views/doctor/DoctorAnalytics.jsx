import React from 'react';
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
import { FiTrendingUp, FiUsers, FiDollarSign, FiClock } from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DoctorAnalytics = () => {
  // Revenue Data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [4500, 5200, 4800, 5900, 6500, 7000, 6800, 7200, 7800, 8200, 8800, 9500],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
      }
    ]
  };

  // Patient Demographics
  const demographicsData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [
      {
        label: 'Patient Age Groups',
        data: [15, 25, 20, 18, 12, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
      }
    ]
  };

  // Treatment Types
  const treatmentData = {
    labels: ['General Checkup', 'Specialist Consultation', 'Emergency', 'Follow-up', 'Procedure'],
    datasets: [
      {
        data: [35, 25, 15, 20, 5],
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
      }
    ]
  };

  // Weekly Performance
  const weeklyPerformance = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Appointments',
        data: [25, 30, 28, 32, 24, 15, 8],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }
    ]
  };

  // Key Performance Indicators
  const kpis = [
    {
      title: "Total Patients",
      value: "1,284",
      change: "+12.5%",
      icon: <FiUsers className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "Average Revenue",
      value: "$8,540",
      change: "+8.2%",
      icon: <FiDollarSign className="w-6 h-6" />,
      color: "green"
    },
    {
      title: "Patient Growth",
      value: "+24%",
      change: "+4.3%",
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: "indigo"
    },
    {
      title: "Avg. Wait Time",
      value: "12min",
      change: "-2.1%",
      icon: <FiClock className="w-6 h-6" />,
      color: "purple"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Detailed analysis of your practice performance</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center">
              <div className={`flex-shrink-0 p-3 rounded-md bg-${kpi.color}-100`}>
                {React.cloneElement(kpi.icon, { className: `w-6 h-6 text-${kpi.color}-600` })}
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{kpi.value}</p>
                  <p className="ml-2 text-sm text-green-600">{kpi.change}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Revenue Trends */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trends</h3>
          <div className="h-[300px]">
            <Line 
              data={revenueData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: 'bottom' },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: (value) => `$${value}`
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Patient Demographics */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Patient Demographics</h3>
          <div className="h-[300px]">
            <Pie 
              data={demographicsData}
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

        {/* Treatment Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Treatment Distribution</h3>
          <div className="h-[300px]">
            <Doughnut 
              data={treatmentData}
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

        {/* Weekly Performance */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Weekly Performance</h3>
          <div className="h-[300px]">
            <Bar 
              data={weeklyPerformance}
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

      {/* Additional Metrics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Key Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Patient Satisfaction</p>
            <p className="text-2xl font-semibold text-gray-900">94%</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Return Rate</p>
            <p className="text-2xl font-semibold text-gray-900">76%</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">New Patients</p>
            <p className="text-2xl font-semibold text-gray-900">+34</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAnalytics; 