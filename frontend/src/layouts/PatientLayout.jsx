import React from 'react';
import { Outlet } from 'react-router-dom';
import PatientHeader from '../components/PatientHeader';
import PatientSidebar from '../components/PatientSidebar';

const PatientLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PatientSidebar />
      <PatientHeader />
      <main className="ml-64 pt-28 px-8 pb-8">
        <div className="max-w-full mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientLayout; 