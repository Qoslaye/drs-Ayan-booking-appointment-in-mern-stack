import React, { useState } from 'react';
import { FiUsers, FiDollarSign, FiTrendingUp, FiClock } from 'react-icons/fi';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
  Title,
  Tooltip,
  Legend,
  Filler
);

const WeeklyReports = () => {
  const [selectedWeek, setSelectedWeek] = useState(getWeekNumber());

  function getWeekNumber() {
    const now = new Date();
    const onejan = new Date(now.getFullYear(), 0, 1);
    return Math.ceil((((now - onejan) / 86400000) + onejan.getDay() + 1) / 7);
  }

  // Weekly statistics
  const weeklyStats = {
    totalPatients: 45,
    revenue: 3200,
    growth: "+15%",
    avgWaitTime: "14 min"
  };

  // Weekly appointment data
  const weeklyData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Appointments',
        data: [12, 19, 15, 17, 14, 8, 5],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }
    ]
  };

  // Revenue trend data
  const revenueTrend = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Revenue',
        data: [500, 800, 600, 700, 600, 300, 200],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Weekly Reports</h1>
          <p className="mt-1 text-sm text-gray-500">Week {selectedWeek} overview</p>
        </div>
        <input
          type="week"
          value={`2024-W${selectedWeek.toString().padStart(2, '0')}`}
          onChange={(e) => {
            const weekNum = parseInt(e.target.value.split('-W')[1]);
            setSelectedWeek(weekNum);
          }}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Weekly Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiUsers className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Patients</p>
              <p className="text-2xl font-semibold text-gray-900">{weeklyStats.totalPatients}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiDollarSign className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">${weeklyStats.revenue}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiTrendingUp className="h-8 w-8 text-indigo-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Growth</p>
              <p className="text-2xl font-semibold text-gray-900">{weeklyStats.growth}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiClock className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Avg. Wait Time</p>
              <p className="text-2xl font-semibold text-gray-900">{weeklyStats.avgWaitTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Appointments Distribution</h2>
          <div className="h-[300px]">
            <Bar
              data={weeklyData}
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

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h2>
          <div className="h-[300px]">
            <Line
              data={revenueTrend}
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

export default WeeklyReports; 