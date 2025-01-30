// import React, { useState } from 'react';
// import axios from 'axios';
// import { format } from 'date-fns';
// import { 
//   FaRegCalendarAlt, 
//   FaRegClock,
//   FaPhone,
//   FaInfoCircle 
// } from 'react-icons/fa';
import Calendar from './Calendar';
import ServiceSelection from './ServiceSelection';
import TimeSelection from './TimeSelection';
import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { FaPhone, FaInfoCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ReservationCard = () => {
  const [openSection, setOpenSection] = useState('date');
  const [reservation, setReservation] = useState({
    service: null,
    date: null,
    time: '',
    phone: '',
    details: ''
  });

  const services = [
    { id: 1, name: "Fuite d'eau", price: 60000 },
    { id: 2, name: "WC bouché", price: 45000 },
    { id: 3, name: "Chauffe-eau", price: 75000 },
    { id: 4, name: "Robinetterie", price: 35000 },
    { id: 5, name: "Installation neuve", price: 100000 }
  ];

  const handleSubmit = async () => {
    if (!/^(70|76|77|78|75)\d{7}$/.test(reservation.phone)) {
      alert('Numéro de téléphone invalide');
      return;
    }

    try {
      await axios.post('https://backendtache21.onrender.com/api/demandes-services', {
        service_type: reservation.service.name,
        service_price: reservation.service.price,
        phone_number: reservation.phone,
        details: reservation.details,
        intervention_date: reservation.date,
        intervention_time: reservation.time,
        status: 'pending'
      });
      alert('Demande envoyée');
    } catch (error) {
      alert('Erreur lors de la soumission');
    }
  };

  return (
    <div className="border rounded-xl p-4 shadow-lg bg-white sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="space-y-3">
        {/* Summary Bar */}
        <div className="flex items-center justify-between text-sm">
          <div>
            {reservation.date && format(reservation.date, 'dd MMM')} {reservation.time && `à ${reservation.time}`}
          </div>
          <div>
            {reservation.service?.price?.toLocaleString()} FCFA
          </div>
        </div>

        {/* Date & Time Section */}
        <div className="border rounded-lg">
          <button 
            onClick={() => setOpenSection(openSection === 'date' ? '' : 'date')}
            className="w-full p-3 flex justify-between items-center"
          >
            <span>Date et heure</span>
            {openSection === 'date' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSection === 'date' && (
            <div className="p-3 border-t">
              <Calendar onDateSelect={(date) => {
                setReservation(prev => ({ ...prev, date }));
                setOpenSection('time');
              }} />
            </div>
          )}
        </div>

        {/* Time Selection */}
        {reservation.date && (
          <div className="border rounded-lg">
            <button 
              onClick={() => setOpenSection(openSection === 'time' ? '' : 'time')}
              className="w-full p-3 flex justify-between items-center"
            >
              <span>Créneau horaire</span>
              {openSection === 'time' ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 'time' && (
              <div className="p-3 border-t">
                <TimeSelection 
                  onTimeSelect={(time) => {
                    setReservation(prev => ({ ...prev, time }));
                    setOpenSection('service');
                  }}
                  selectedTime={reservation.time}
                />
              </div>
            )}
          </div>
        )}

        {/* Service Selection */}
        {reservation.time && (
          <div className="border rounded-lg">
            <button 
              onClick={() => setOpenSection(openSection === 'service' ? '' : 'service')}
              className="w-full p-3 flex justify-between items-center"
            >
              <span>Type d'intervention</span>
              {openSection === 'service' ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 'service' && (
              <div className="p-3 border-t">
                <ServiceSelection 
                  services={services}
                  onServiceChange={(service) => {
                    setReservation(prev => ({ ...prev, service }));
                    setOpenSection('details');
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* Contact Details */}
        {reservation.service && (
          <div className="border rounded-lg">
            <button 
              onClick={() => setOpenSection(openSection === 'details' ? '' : 'details')}
              className="w-full p-3 flex justify-between items-center"
            >
              <span>Vos coordonnées</span>
              {openSection === 'details' ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 'details' && (
              <div className="p-3 border-t space-y-4">
                <div>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <FaPhone className="w-4 h-4" />
                    VOTRE NUMÉRO
                  </div>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded mt-2"
                    placeholder="77 123 45 67"
                    value={reservation.phone}
                    onChange={(e) => setReservation(prev => ({ 
                      ...prev, 
                      phone: e.target.value.replace(/\D/g, '').slice(0, 9) 
                    }))}
                  />
                </div>

                <div>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <FaInfoCircle className="w-4 h-4" />
                    DÉTAILS
                  </div>
                  <textarea
                    className="w-full p-2 border rounded mt-2"
                    rows="4"
                    placeholder="Détails du problème"
                    value={reservation.details}
                    onChange={(e) => setReservation(prev => ({ ...prev, details: e.target.value }))}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        {reservation.service && reservation.phone && (
          <button 
            onClick={handleSubmit}
            className="w-full bg-rose-600 text-white py-3 rounded-lg"
          >
            Demander une intervention
          </button>
        )}

        <div className="text-center text-xs text-gray-500">
          Devis gratuit • Déplacement inclus dans Dakar
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;