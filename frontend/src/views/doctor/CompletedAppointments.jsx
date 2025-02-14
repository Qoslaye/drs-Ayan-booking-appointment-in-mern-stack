import React from 'react';

const CompletedAppointments = () => {
  // Sample data for completed appointments
  const appointments = [
    {
      id: 1,
      patientName: "Emma Wilson",
      date: "2024-03-15",
      time: "10:00 AM",
      service: "Regular Checkup",
      phone: "+252612345682",
      paymentStatus: "paid",
      status: "completed",
      diagnosis: "Healthy",
      amount: 55
    },
    {
      id: 2,
      patientName: "James Anderson",
      date: "2024-03-16",
      time: "03:30 PM",
      service: "Follow-up",
      phone: "+252612345683",
      paymentStatus: "paid",
      status: "completed",
      diagnosis: "Recovery in progress",
      amount: 40
    }
  ];

  const getStatusBadge = (status) => {
    return (
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Completed
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Completed Appointments</h2>
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
                Diagnosis
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
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
                  <div className="text-sm text-gray-900">{appointment.diagnosis}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(appointment.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedAppointments; 