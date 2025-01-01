import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './Components/HomePage';
import LoginView from './views/auth/loginView';
import RegisterView from './views/auth/RegisterView';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;