import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { FaPhone, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Calendar from './Calendar';

const API_URL = 'http://localhost:5000/api/demandes';

// Par défaut, on met un prestataireId de test
const DEFAULT_PRESTATAIRE_ID = '65789012345'; 

const ReservationCard = () => {
  const [openSection, setOpenSection] = useState('date');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [reservation, setReservation] = useState({
    typeService: '',
    numeroTelephone: '',
    descriptionAdresse: '',
    date: null,
    prestataireId: DEFAULT_PRESTATAIRE_ID  // On initialise avec une valeur par défaut
  });

  const services = [
    { id: 1, name: "Fuite d'eau" },
    { id: 2, name: "WC bouché" },
    { id: 3, name: "Chauffe-eau" },
    { id: 4, name: "Robinetterie" },
    { id: 5, name: "Installation neuve" }
  ];

  const handleSubmit = async () => {
    // Validation
    if (!/^(70|76|77|78|75)\d{7}$/.test(reservation.numeroTelephone)) {
      setSubmitStatus({
        type: 'error',
        message: 'Le numéro de téléphone est invalide'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const formattedDate = reservation.date ? new Date(reservation.date).toISOString() : null;
      
      const requestData = {
        typeService: reservation.typeService,
        numeroTelephone: reservation.numeroTelephone,
        descriptionAdresse: reservation.descriptionAdresse,
        date: formattedDate,
        prestataireId: reservation.prestataireId // On s'assure d'envoyer le prestataireId
      };

      console.log('Sending data:', requestData); // Pour le débogage

      const response = await axios.post(API_URL, requestData);
      
      console.log('Response:', response.data); // Pour le débogage

      setSubmitStatus({
        type: 'success',
        message: 'Votre demande a été envoyée avec succès!'
      });

      // Réinitialiser le formulaire tout en gardant le prestataireId
      setReservation({
        typeService: '',
        numeroTelephone: '',
        descriptionAdresse: '',
        date: null,
        prestataireId: DEFAULT_PRESTATAIRE_ID
      });
      setOpenSection('date');
      
    } catch (error) {
      console.error('Error details:', error);
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Une erreur est survenue lors de l\'envoi de votre demande'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Le reste du JSX reste le même que précédemment
  return (
    <div className="border rounded-xl p-4 shadow-lg bg-white sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      {/* ... Le reste du code JSX reste identique ... */}
      <div className="space-y-3">
        {submitStatus.message && (
          <div className={`p-3 rounded-lg ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Summary Bar */}
        <div className="flex items-center justify-between text-sm">
          <div>
            {reservation.date && format(reservation.date, 'dd MMM yyyy')}
          </div>
          <div>
            {reservation.typeService && `Service: ${reservation.typeService}`}
          </div>
        </div>

        {/* Date Selection */}
        <div className="border rounded-lg">
          <button 
            onClick={() => setOpenSection(openSection === 'date' ? '' : 'date')}
            className="w-full p-3 flex justify-between items-center"
          >
            <span>Date d'intervention</span>
            {openSection === 'date' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSection === 'date' && (
            <div className="p-3 border-t">
              <Calendar 
                onDateSelect={(date) => {
                  setReservation(prev => ({ ...prev, date }));
                  setOpenSection('service');
                }}
              />
            </div>
          )}
        </div>

        {/* Service Selection */}
        {reservation.date && (
          <div className="border rounded-lg">
            <button 
              onClick={() => setOpenSection(openSection === 'service' ? '' : 'service')}
              className="w-full p-3 flex justify-between items-center"
            >
              <span>Type de service</span>
              {openSection === 'service' ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 'service' && (
              <div className="p-3 border-t">
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setReservation(prev => ({ ...prev, typeService: service.name }));
                        setOpenSection('details');
                      }}
                      className={`w-full p-3 text-left border rounded-lg hover:bg-gray-50 ${
                        reservation.typeService === service.name ? 'border-rose-500' : 'border-gray-200'
                      }`}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Contact Details */}
        {reservation.typeService && (
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
                    value={reservation.numeroTelephone}
                    onChange={(e) => setReservation(prev => ({ 
                      ...prev, 
                      numeroTelephone: e.target.value.replace(/\D/g, '').slice(0, 9) 
                    }))}
                  />
                </div>

                <div>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    ADRESSE
                  </div>
                  <textarea
                    className="w-full p-2 border rounded mt-2"
                    rows="4"
                    placeholder="Votre adresse complète"
                    value={reservation.descriptionAdresse}
                    onChange={(e) => setReservation(prev => ({ ...prev, descriptionAdresse: e.target.value }))}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        {reservation.typeService && reservation.numeroTelephone && reservation.descriptionAdresse && (
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors disabled:bg-gray-400"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Demander une intervention'}
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