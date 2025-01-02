import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './Components/HomePage';
import LoginView from './views/auth/LoginView';
import RegisterView from './views/auth/RegisterView';
import PatientDashboard from './views/patient/PatientDashboard';
import BookAppointment from './views/patient/BookAppointment';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/book-appointment" element={<BookAppointment />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;