import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      author: "Mamadou Diallo",
      rating: 5,
      type: "Dépannage urgent",
      content: "M. Moustapha Ndiaye est intervenu rapidement pour une fuite d'eau urgente. Très professionnel et efficace. Il a tout réparé en moins d'une heure et m'a donné des conseils pour éviter que ça ne se reproduise..."
    },
    {
      id: 2,
      author: "Fatou Sow",
      rating: 5,
      type: "Installation sanitaire",
      content: "Excellent travail pour l'installation complète de ma salle de bain. Prix raisonnable et finitions impeccables. Je recommande vivement!"
    },
    {
      id: 3,
      author: "Abdou Faye",
      rating: 5,
      type: "Maintenance préventive",
      content: "M. Ndiaye a fait un diagnostic complet de ma plomberie. Il est très minutieux et honnête dans ses recommandations. Le rapport qualité-prix est excellent..."
    },
    {
      id: 4,
      author: "Aminata Diop",
      rating: 5,
      type: "Réparation robinetterie",
      content: "Service rapide et professionnel. M. Ndiaye est arrivé à l'heure prévue et a résolu le problème efficacement. J'apprécie particulièrement sa ponctualité et son expertise..."
    }
  ];

  return (
    <div className="w-full px-4 md:px-8 py-8 md:py-12">
      <h1 className="text-xl md:text-2xl text-blue-800 font-medium mb-8 md:mb-16">
        Découvrez les avis de nos clients satisfaits
      </h1>
      
      <div className="flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          {reviews.slice(0, 2).map((review) => (
            <div key={review.id} className="w-full md:w-[500px]">
              <div>
                <span className="text-lg font-medium">{review.author}</span>
                <div className="flex gap-1 text-yellow-400 my-2">
                  {"★".repeat(review.rating)}
                </div>
              </div>
              <p className="text-gray-700 my-4 line-clamp-4">
                {review.content}
              </p>
              <span className="text-blue-600 font-medium">{review.type}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          {reviews.slice(2, 4).map((review) => (
            <div key={review.id} className="w-full md:w-[500px]">
              <div>
                <span className="text-lg font-medium">{review.author}</span>
                <div className="flex gap-1 text-yellow-400 my-2">
                  {"★".repeat(review.rating)}
                </div>
              </div>
              <p className="text-gray-700 my-4 line-clamp-4">
                {review.content}
              </p>
              <span className="text-blue-600 font-medium">{review.type}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <button className="text-gray-600 text-sm hover:underline">
          Afficher les 26 commentaires
        </button>
      </div>
    </div>
  );
};

export default Testimonials;