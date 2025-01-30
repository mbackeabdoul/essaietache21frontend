import React, { useState, useEffect } from 'react';

const StickyBookingCard = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.getElementById('end-sticky-section');
      const card = document.getElementById('booking-card');
      
      if (targetSection && card) {
        const targetTop = targetSection.getBoundingClientRect().top;
        const cardHeight = card.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Si la section cible est visible et plus haute que le bas de la carte
        setIsSticky(targetTop > cardHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Contenu principal */}
        <div className="md:col-span-2 space-y-6">
          {/* Votre contenu principal ici */}
          <div className="h-[800px] bg-gray-100 p-4">
            Contenu défilant
          </div>
          
          {/* Section qui marque la fin du sticky */}
          <div id="end-sticky-section" className="h-[400px] bg-gray-200 p-4">
            Section finale
          </div>
        </div>

        {/* Carte de réservation */}
        <div 
          id="booking-card"
          className={`border rounded-xl p-6 shadow-lg bg-white h-fit ${
            isSticky ? 'sticky top-4' : ''
          }`}
        >
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-semibold">130 €</span>
              <span className="text-gray-600"> / nuit</span>
            </div>

            {/* Détails de la réservation */}
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Détails de la réservation</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>5 nuits</span>
                  <span>650 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Frais de service</span>
                  <span>110 €</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t mt-2">
                  <span>Total</span>
                  <span>760 €</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700">
              Réserver
            </button>

            <p className="text-center text-sm text-gray-500">
              Aucun montant ne vous sera débité pour le moment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBookingCard;