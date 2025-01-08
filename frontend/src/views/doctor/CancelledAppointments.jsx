import React from 'react';

const CancelledAppointments = () => {
  // Sample data for cancelled appointments
  const appointments = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      date: "2024-03-18",
      time: "11:00 AM",
      service: "Dental Consultation",
      phone: "+252612345680",
      paymentStatus: "refunded",
      status: "cancelled",
      reason: "Patient request",
      amount: 60
    },
    {
      id: 2,
      patientName: "Michael Brown",
      date: "2024-03-19",
      time: "02:30 PM",
      service: "General Checkup",
      phone: "+252612345681",
      paymentStatus: "cancelled",
      status: "cancelled",
      reason: "Emergency reschedule",
      amount: 45
    }
  ];

  const getStatusBadge = (status) => {
    return (
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
        Cancelled
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Cancelled Appointments</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Patient Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Reason
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {appointment.patientName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {appointment.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{appointment.service}</div>
                  <div className="text-sm text-gray-500">${appointment.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{appointment.date}</div>
                  <div className="text-sm text-gray-500">{appointment.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{appointment.reason}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(appointment.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CancelledAppointments; 