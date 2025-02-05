import React from 'react';
import { FaUser, FaEnvelope, FaPen } from 'react-icons/fa';

const AdminProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête de page */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-semibold text-gray-900">Mon Profil</h1>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border">
          {/* En-tête du profil */}
          <div className="px-8 py-6 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <FaUser className="w-10 h-10 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Bienvenue,</p>
                  <h2 className="text-2xl font-bold text-gray-900">Jean Dupont</h2>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow">
                <FaPen className="w-4 h-4" />
                Modifier
              </button>
            </div>
          </div>

          {/* Informations du profil */}
          <div className="px-8 py-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Nom complet
                </label>
                <div className="text-gray-900 text-lg">Jean Dupont</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Nom complet
                </label>
                <div className="text-gray-900 text-lg">Jean Dupont</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Adresse email
                </label>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900 text-lg">admin@servicelocaux.com</span>
                </div>
              </div>
              
              <div className="border-t pt-6 mt-8">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Dernière modification le 2 Février 2025</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Compte actif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;