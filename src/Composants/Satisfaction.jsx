import React from "react";
import {  FaShieldVirus } from "react-icons/fa";

const SatisfactionGuarantee = () => {
  const guarantees = [
    {
      title: "Des services adaptés à vos besoins",
      description:
        "Nous vous offrons des solutions personnalisées pour simplifier votre quotidien et répondre à vos attentes.",
        badge: "Happiness pledge"
    },
    {
      title: "Des experts locaux qualifiés",
      description:
        "Chaque prestataire est soigneusement sélectionné pour garantir un service fiable et de haute qualité.",
    },
    {
      title: "Un support client réactif",
      description:
        "Notre équipe est disponible pour vous accompagner et répondre à toutes vos questions, quand vous en avez besoin.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-16 text-start">
        <span className="text-[#2B4C29]">Votre satisfaction</span>
        {" "}
        <span className="text-blue-500">garantie</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {guarantees.map((guarantee, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="flex items-start space-x-3">
              {guarantee.icon}
              <h3 className="text-xl font-bold text-[#2B4C29]">
                {guarantee.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {guarantee.description}
            </p>
            {guarantee.badge && (
              <div className="flex items-center space-x-2 text-green-700">
                <FaShieldVirus className="w-5 h-5" />
                <span className="text-sm font-medium">{guarantee.badge}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SatisfactionGuarantee;