import React from 'react';
import { FaWrench } from 'react-icons/fa';

const ServiceSelection = ({ services, onServiceChange }) => {
  return (
    <div>
      <div className="text-xs text-gray-500">TYPE D'INTERVENTION</div>
      <div className="flex items-center gap-2 mt-1">
        <FaWrench className="w-4 h-4 text-gray-500" />
        <select 
          className="w-full p-2 border rounded"
          onChange={(e) => onServiceChange(services.find(s => s.id === parseInt(e.target.value)))}
        >
          <option value="">Sélectionner un service</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.name} - {service.price.toLocaleString()} FCFA
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ServiceSelection;