import React from 'react';

const DemandeServiceDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
          <h2 className="text-2xl font-bold">Détails de la Demande</h2>
          <p className="text-blue-100 mt-2">Demande de service #1245</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <p className="text-gray-500 text-sm">Nom du Client</p>
              <p className="text-lg font-semibold text-gray-800">Dupont Marie</p>
            </div>
            <div className="bg-blue-50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <p className="text-gray-500 text-sm">Téléphone</p>
              <p className="text-lg font-semibold text-gray-800">06 12 34 56 78</p>
            </div>
            <div className="bg-green-50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <p className="text-gray-500 text-sm">Adresse</p>
              <p className="text-lg font-semibold text-gray-800">10 rue de la Paix, Paris</p>
            </div>
            <div className="bg-red-50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-2">Description</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Besoin d'une réparation de plomberie urgente. La fuite s'aggrave et nécessite une intervention rapide.</p>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <button className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition transform hover:scale-105 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Accepter</span>
            </button>
            <button className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition transform hover:scale-105 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Refuser</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandeServiceDetails;