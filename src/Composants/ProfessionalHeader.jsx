import React from 'react';
import { FaAward, FaStar } from 'react-icons/fa';

const ProfessionalHeader = ({ title, stats }) => {
  return (
    <>
      <div className="space-y-4 mb-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex items-center gap-2 text-sm">
          <span>Intervention express</span>
          <span>•</span>
          <span>Intervention 7j/7</span>
          <span>•</span>
          <span>Devis gratuit</span>
        </div>
      </div>

      <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <FaAward className="text-yellow-400 w-5 h-5" />
            <span className="font-medium">Artisan Certifié</span>
          </div>
          <p className="text-gray-600 mt-1">
            Un des plombiers les mieux notés de votre région
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end">
            <span className="font-semibold">{stats.rating}</span>
            <FaStar className="text-yellow-400 w-5 h-5" />
          </div>
          <span className="text-gray-600">{stats.interventions} Interventions</span>
        </div>
      </div>
    </>
  );
};
export default ProfessionalHeader ;