import React from 'react';
import { FaTrophy, FaTools, FaMapMarkerAlt } from 'react-icons/fa';

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaTrophy className="w-8 h-8 text-yellow-400" />,
      title: "Garantie satisfaction",
      description: "Intervention garantie avec assurance décennale."
    },
    {
      icon: <FaTools className="w-8 h-8 text-blue-500" />,
      title: "Dépannage rapide",
      description: "Intervention en moins d'une heure selon urgence."
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8 text-blue-500" />,
      title: "Secteur d'intervention",
      description: "Dakar et sa proche banlieue."
    }
  ];

  return (
    <div>
      {features.map((feature, index) => (
        <div key={index} className={`flex gap-4 items-center p-4 ${index !== features.length - 1 ? 'border-b' : ''}`}>
          {feature.icon}
          <div>
            <h3 className="font-medium">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ServiceFeatures;