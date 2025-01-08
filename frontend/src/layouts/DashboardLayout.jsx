import React from 'react';
import { Outlet } from 'react-router-dom';
import DoctorHeader from '../Components/DashboardHeader';
import DoctorSidebar from '../components/DoctorSidebar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DoctorSidebar />
      <DoctorHeader />
      <main className="ml-60 pt-20 px-8 pb-8">

        <div className="max-w-full mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout; 