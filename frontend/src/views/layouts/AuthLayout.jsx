import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const AuthLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;