import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Import components
import HomePage from './Components/HomePage';
import LoginView from './views/auth/loginView';
import RegisterView from './views/auth/RegisterView';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Routes>
            {/* Public Routes */}
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
