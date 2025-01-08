import React, { useState } from 'react';
import { FiSearch, FiFilter, FiPlus, FiEdit2, FiTrash2, FiPhone, FiMail, FiCalendar } from 'react-icons/fi';

const DoctorPatients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Mock data - replace with actual API calls
  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 32,
      gender: "Female",
      phone: "+1 234-567-8900",
      email: "sarah.j@email.com",
      lastVisit: "2024-02-15",
      nextAppointment: "2024-03-20",
      status: "active",
      medicalHistory: ["Hypertension", "Diabetes"],
      recentPrescriptions: ["Metformin", "Lisinopril"],
    },
    {
      id: 2,
      name: "Michael Brown",
      age: 45,
      gender: "Male",
      phone: "+1 234-567-8901",
      email: "michael.b@email.com",
      lastVisit: "2024-02-10",
      nextAppointment: null,
      status: "inactive",
      medicalHistory: ["Asthma"],
      recentPrescriptions: ["Albuterol"],
    },
    // Add more mock patients as needed
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patient Management</h1>
          <p className="mt-1 text-sm text-gray-500">Manage and view patient information</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <FiPlus className="mr-2" />
          Add New Patient
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="sm:w-48">
          <select
            className="w-full py-2 px-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterStatus}
            onChange={handleFilterChange}
          >
            <option value="all">All Patients</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Patient List and Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient List */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {patients.map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => handlePatientClick(patient)}
                  className={`px-6 py-4 cursor-pointer hover:bg-gray-50 ${
                    selectedPatient?.id === patient.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">{patient.name.charAt(0)}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        <div className="text-sm text-gray-500">
                          {patient.age} years • {patient.gender}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        patient.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {patient.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patient Details */}
        <div className="lg:col-span-1">
          {selectedPatient ? (
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-lg font-medium text-gray-900">Patient Details</h2>
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                    <FiEdit2 />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                    <FiTrash2 />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Contact Information</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-sm">
                      <FiPhone className="mr-2 text-gray-400" />
                      {selectedPatient.phone}
                    </div>
                    <div className="flex items-center text-sm">
                      <FiMail className="mr-2 text-gray-400" />
                      {selectedPatient.email}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Appointments</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-sm">
                      <FiCalendar className="mr-2 text-gray-400" />
                      Last Visit: {selectedPatient.lastVisit}
                    </div>
                    {selectedPatient.nextAppointment && (
                      <div className="flex items-center text-sm">
                        <FiCalendar className="mr-2 text-gray-400" />
                        Next Appointment: {selectedPatient.nextAppointment}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Medical History</h3>
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedPatient.medicalHistory.map((condition, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Recent Prescriptions</h3>
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedPatient.recentPrescriptions.map((prescription, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
                        >
                          {prescription}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
              Select a patient to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorPatients; 