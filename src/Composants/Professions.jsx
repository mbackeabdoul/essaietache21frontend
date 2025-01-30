import React from "react";
import { 
  FaTools,
  FaVideo,
  FaTruck,
  FaBroom,
  FaTree,
  FaWrench,
  FaPaintRoller,
  FaFire
} from "react-icons/fa";

const Professions = () => {
  const services = [
    { icon: <FaTools />, label: "Mécaniciens" },
    { icon: <FaVideo />, label: "Montage" },
    { icon: <FaTruck />, label: "Mobile" },
    { icon: <FaBroom />, label: "Nettoyage" },
    { icon: <FaTree />, label: "Aide extérieure" },
    { icon: <FaWrench />, label: "Réparations à domicile" },
    { icon: <FaPaintRoller />, label: "Peinture" },
    { icon: <FaFire />, label: "Tendance" }
  ];

  return (
    <div className="w-full border-b border-gray-200 my-5">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto">
          <div className="flex whitespace-nowrap px-4">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center py-4 px-6 text-gray-600">
                <div className="w-12 h-12 flex items-center justify-center">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <span className="text-sm font-medium mt-2">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professions;
