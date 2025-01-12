import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Import components
import HomePage from './Components/HomePage';
import LoginView from './views/auth/LoginView';
import RegisterView from './views/auth/RegisterView';
import DoctorDashboard from './views/doctor/DoctorDashboard';

// Patient components
import PatientDashboard from './views/patient/PatientDashboard';
import BookAppointment from './views/patient/BookAppointment';
import AppointmentConfirmation from './views/patient/AppointmentConfirmation';
import PaymentSection from './views/patient/PaymentSection';

// Doctor components
import DoctorAnalytics from './views/doctor/DoctorAnalytics';
import DoctorPatients from './views/doctor/DoctorPatients';
import AllAppointments from './views/doctor/AllAppointments';
import CompletedAppointments from './views/doctor/CompletedAppointments';
import CancelledAppointments from './views/doctor/CancelledAppointments';
import DailyReports from './views/doctor/reports/DailyReports';
import WeeklyReports from './views/doctor/reports/WeeklyReports';
import MonthlyReports from './views/doctor/reports/MonthlyReports';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            
            {/* Auth routes - Keep these at the top level */}
            <Route path="/doctor/login" element={<LoginView userType="doctor" />} />
            <Route path="/doctor/register" element={<RegisterView userType="doctor" />} />
            <Route path="/patient/login" element={<LoginView userType="patient" />} />
            <Route path="/patient/register" element={<RegisterView userType="patient" />} />

            {/* Doctor routes */}
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            
            {/* Patient routes */}
            <Route path="/patient/dashboard" element={<PatientDashboard />} />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
