import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const ServicesDisplay = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://essaietache21backend.onrender.com/api/services');
        console.log('Services récupérés:', response.data);
        setServices(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des services:', error);
        setMessage('Impossible de charger les services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const renderImage = (imageUrl) => {
    if (!imageUrl) {
      return 'https://via.placeholder.com/300x200?text=No+Image';
    }

    // Si l'URL est une URL Cloudinary, on la retourne directement
    return imageUrl;
  };

  const handleImageError = (e) => {
    console.error('Erreur de chargement d\'image:', e.target.src);
    e.target.src = 'https://via.placeholder.com/300x200?text=Error+Loading+Image';
  };

  const handleDeleteService = async (serviceId) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce service ?')) {
      return;
    }

    try {
      await axios.delete(`https://essaietache21backend.onrender.com/api/services/${serviceId}`);
      setServices(prev => prev.filter(service => service._id !== serviceId));
      setMessage('Service supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression du service:', error);
      setMessage('Erreur lors de la suppression du service');
    }
  };

  const handleAddService = () => {
    navigate('/add-service');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Mes Services</h1>
        <button 
          onClick={handleAddService}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
        >
          <FaPlus className="mr-2" /> Ajouter un Service
        </button>
      </div>

      {message && (
        <div className={`
          mb-6 p-4 rounded-lg text-center 
          ${message.includes('succès') 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'}
        `}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div 
            key={service._id} 
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <div className="h-48 overflow-hidden">
              {service.photos && service.photos.length > 0 ? (
                <img 
                  src={renderImage(service.photos[0])}
                  alt={service.nom} 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  Pas d'image
                </div>
              )}
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">{service.nom}</h2>
              <p className="text-sm text-gray-600 mb-2">{service.categorie}</p>
              <p className="text-sm text-gray-500 line-clamp-3">{service.description}</p>
            </div>

            <div className="flex justify-between p-4 border-t">
              <button 
                onClick={() => navigate(`/service/${service._id}`)}
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <FaEye className="mr-2" /> Voir
              </button>

              <button 
                onClick={() => navigate(`/edit-service/${service._id}`)}
                className="text-green-500 hover:text-green-700 flex items-center"
              >
                <FaEdit className="mr-2" /> Éditer
              </button>

              <button 
                onClick={() => handleDeleteService(service._id)}
                className="text-red-500 hover:text-red-700 flex items-center"
              >
                <FaTrash className="mr-2" /> Suppr.
              </button>
            </div>
          </div>
        ))}
      </div>

      {services.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          Vous n'avez pas encore ajouté de services.
          <button 
            onClick={handleAddService}
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            <FaPlus className="mr-2" /> Ajouter un Service
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesDisplay;