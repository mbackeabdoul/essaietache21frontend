import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { FaCheck, FaTimes, FaClock } from 'react-icons/fa';

const API_URL = 'http://localhost:5000/api/demandes';

const PrestataireDashboard = ({ prestataireId }) => {
  const [demandes, setDemandes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('pending'); // pending, accepted, rejected

  useEffect(() => {
    fetchDemandes();
  }, [prestataireId]);

  const fetchDemandes = async () => {
    try {
      const response = await axios.get(`${API_URL}?prestataireId=${prestataireId}`);
      setDemandes(response.data);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des demandes');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (demandeId, newStatus) => {
    try {
      await axios.put(`${API_URL}/${demandeId}`, { status: newStatus });
      fetchDemandes(); // Rafraîchir la liste
      alert('Statut mis à jour avec succès');
    } catch (err) {
      alert('Erreur lors de la mise à jour du statut');
      console.error('Error:', err);
    }
  };

  const filteredDemandes = demandes.filter(demande => demande.status === activeTab);

  const getStatusBadge = (status) => {
    const badges = {
      pending: <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center gap-1">
        <FaClock className="inline" /> En attente
      </span>,
      accepted: <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm flex items-center gap-1">
        <FaCheck className="inline" /> Acceptée
      </span>,
      rejected: <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm flex items-center gap-1">
        <FaTimes className="inline" /> Refusée
      </span>
    };
    return badges[status] || null;
  };

  if (isLoading) {
    return <div className="flex justify-center p-8">Chargement...</div>;
  }

  if (error) {
    return <div className="text-red-600 p-8">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord Prestataire</h1>
      
      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'pending' 
              ? 'bg-yellow-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          En attente
        </button>
        <button
          onClick={() => setActiveTab('accepted')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'accepted' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Acceptées
        </button>
        <button
          onClick={() => setActiveTab('rejected')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'rejected' 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Refusées
        </button>
      </div>

      {/* Demandes List */}
      <div className="space-y-4">
        {filteredDemandes.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Aucune demande {activeTab === 'pending' ? 'en attente' : activeTab === 'accepted' ? 'acceptée' : 'refusée'}
          </div>
        ) : (
          filteredDemandes.map(demande => (
            <div key={demande._id} className="border rounded-lg p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{demande.typeService}</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    📞 {demande.numeroTelephone}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    📍 {demande.descriptionAdresse}
                  </p>
                  <p className="text-gray-600 text-sm">
                    📅 {format(new Date(demande.date), 'PPP', { locale: fr })}
                  </p>
                </div>
                <div className="space-y-2">
                  {getStatusBadge(demande.status)}
                  {demande.status === 'pending' && (
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => handleStatusUpdate(demande._id, 'accepted')}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Accepter
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(demande._id, 'rejected')}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Refuser
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PrestataireDashboard;