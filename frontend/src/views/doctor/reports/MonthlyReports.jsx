import React, { useState } from 'react';
import { FiUsers, FiDollarSign, FiTrendingUp, FiActivity } from 'react-icons/fi';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
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

const MonthlyReports = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));

  // Monthly statistics
  const monthlyStats = {
    totalPatients: 180,
    revenue: 12500,
    growth: "+8.5%",
    satisfaction: "92%"
  };

  // Monthly appointment trend
  const appointmentTrend = {
    labels: Array.from({length: 31}, (_, i) => i + 1),
    datasets: [
      {
        label: 'Appointments',
        data: Array.from({length: 31}, () => Math.floor(Math.random() * 15) + 5),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
      }
    ]
  };

  // Appointment types distribution
  const appointmentTypes = {
    labels: ['General Checkup', 'Follow-up', 'Emergency', 'Consultation', 'Procedure'],
    datasets: [
      {
        data: [35, 25, 15, 15, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(234, 179, 8, 0.8)',
        ],
      }
    ]
  };

  // Revenue by week
  const weeklyRevenue = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Revenue',
        data: [3200, 3800, 2900, 2600],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Monthly Reports</h1>
          <p className="mt-1 text-sm text-gray-500">Comprehensive monthly overview</p>
        </div>
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Monthly Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiUsers className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Patients</p>
              <p className="text-2xl font-semibold text-gray-900">{monthlyStats.totalPatients}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiDollarSign className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">${monthlyStats.revenue}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiTrendingUp className="h-8 w-8 text-indigo-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Growth</p>
              <p className="text-2xl font-semibold text-gray-900">{monthlyStats.growth}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiActivity className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Satisfaction</p>
              <p className="text-2xl font-semibold text-gray-900">{monthlyStats.satisfaction}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Appointment Trend */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Daily Appointment Trend</h2>
          <div className="h-[300px]">
            <Line
              data={appointmentTrend}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: 'bottom' },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { stepSize: 5 }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Appointment Types */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Appointment Types</h2>
          <div className="h-[300px]">
            <Doughnut
              data={appointmentTypes}
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

        {/* Weekly Revenue Breakdown */}
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Weekly Revenue Breakdown</h2>
          <div className="h-[300px]">
            <Bar
              data={weeklyRevenue}
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
      </div>
    </div>
  );
};

export default MonthlyReports; 