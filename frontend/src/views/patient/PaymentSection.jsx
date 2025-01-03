import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const PaymentSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const appointmentData = location.state?.appointmentData;
  const [paymentType, setPaymentType] = useState(''); // 'local' or 'online'
  const [onlinePaymentMethod, setOnlinePaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [selectedLocalMethod, setSelectedLocalMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!appointmentData) {
    return navigate('/patient/book-appointment');
  }

  const localPaymentMethods = [
    { id: 'evc', name: 'Evc Plus', color: 'rgb(0, 166, 81)' },  // EVC Plus green
    { id: 'zaad', name: 'Zaad', color: 'rgb(0, 166, 81)' },    // Zaad blue
    { id: 'sahal', name: 'Sahal', color: 'rgb(0, 166, 81)' },  // Sahal orange
    { id: 'edahab', name: 'E-dahab', color: 'rgb(0, 166, 81)' } // E-dahab light blue
  ];

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      navigate('/patient/appointment-confirmation', { 
        state: { 
          appointmentData: {
            ...appointmentData,
            paymentType,
            ...(paymentType === 'local' && { 
              localPaymentMethod: selectedLocalMethod,
              phoneNumber: `+252${phoneNumber}`
            }),
            ...(paymentType === 'online' && { 
              onlinePaymentMethod 
            })
          }
        } 
      });
    }, 1500);
  };

  const handleSkip = () => {
    navigate('/patient/appointment-confirmation', { 
      state: { 
        appointmentData: {
          ...appointmentData,
          paymentStatus: 'pending',
          skipPayment: true
        }
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar isAuthenticated={true} />
      
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 relative">
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 flex items-center text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <span className="text-sm mr-1">Skip</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Payment Details
          </h2>

          {/* Payment Method Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              Payment method
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentType('local')}
                className={`p-4 border-2 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  paymentType === 'local'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <span className="text-gray-900 dark:text-white font-medium">Local Payment</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentType('online')}
                className={`p-4 border-2 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  paymentType === 'online'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <span className="text-gray-900 dark:text-white font-medium">Online Payments</span>
              </button>
            </div>
          </div>

          {paymentType && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Appointment Summary */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Appointment Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Consultation Fee:</span>
                    <span className="text-gray-900 dark:text-white font-medium">$50.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Booking Fee:</span>
                    <span className="text-gray-900 dark:text-white font-medium">$5.00</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600 my-2 pt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-900 dark:text-white font-semibold">Total Amount:</span>
                      <span className="text-gray-900 dark:text-white font-semibold">$55.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Forms */}
              <div>
                {paymentType === 'local' ? (
                  <div className="space-y-4">
                    {/* Local Payment Methods */}
                    <div className="space-y-2">
                      {localPaymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setSelectedLocalMethod(method.id)}
                          className={`w-full p-4 text-left border rounded-lg transition-all duration-200 relative overflow-hidden ${
                            selectedLocalMethod === method.id
                              ? 'border-2'
                              : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                          }`}
                          style={{
                            borderColor: selectedLocalMethod === method.id ? method.color : undefined,
                            backgroundColor: selectedLocalMethod === method.id ? `${method.color}10` : undefined
                          }}
                        >
                          <span className="text-gray-900 dark:text-white font-medium" style={{
                            color: selectedLocalMethod === method.id ? method.color : undefined
                          }}>
                            {method.name}
                          </span>
                          {selectedLocalMethod === method.id && (
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                              <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke={method.color} 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth="2" 
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Phone Number Input */}
                    {selectedLocalMethod && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Enter your phone number
                          </label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                              +252
                            </span>
                            <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="Enter your phone number"
                              className="flex-1 px-4 py-2 rounded-r-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>

                        <button
                          onClick={handlePayment}
                          disabled={!phoneNumber || loading}
                          className={`w-full px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 ${
                            loading
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                          }`}
                        >
                          {loading ? (
                            <div className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </div>
                          ) : (
                            'Accept'
                          )}
                        </button>
                      </div>
                    )}

                    {/* Information Message */}
                    {selectedLocalMethod && (
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          Please ensure your phone number is correct for payment verification.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Payment Method
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="onlinePaymentMethod"
                            value="card"
                            checked={onlinePaymentMethod === 'card'}
                            onChange={(e) => setOnlinePaymentMethod(e.target.value)}
                            className="h-4 w-4 text-blue-600 dark:text-blue-400"
                          />
                          <span className="text-gray-700 dark:text-gray-300">Credit/Debit Card</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="onlinePaymentMethod"
                            value="paypal"
                            checked={onlinePaymentMethod === 'paypal'}
                            onChange={(e) => setOnlinePaymentMethod(e.target.value)}
                            className="h-4 w-4 text-blue-600 dark:text-blue-400"
                          />
                          <span className="text-gray-700 dark:text-gray-300">PayPal</span>
                        </label>
                      </div>
                    </div>

                    {onlinePaymentMethod === 'card' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Pay Now'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* Back Button */}
          {paymentType && (
            <div className="mt-6">
              <button
                type="button"
                onClick={() => navigate('/patient/book-appointment')}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
              >
                ← Back to appointment details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentSection; 