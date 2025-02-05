import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaFileAlt, FaDownload, FaImages } from 'react-icons/fa';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await axios.get(`https://essaietache21backend.onrender.com/api/services/${id}`);
        setService(response.data);
        // Définir la première image comme image sélectionnée par défaut
        if (response.data.photos && response.data.photos.length > 0) {
          setSelectedImage(response.data.photos[0]);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du service:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);

  const downloadCertification = (certUrl) => {
    // Créer un lien temporaire pour télécharger le fichier
    const link = document.createElement('a');
    link.href = certUrl;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!service) {
    return <div className="text-center mt-10">Service non trouvé</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Galerie d'images */}
        <div>
          <div className="mb-4">
            {selectedImage ? (
              <img 
                src={selectedImage} 
                alt="Image sélectionnée" 
                className="w-full h-96 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Image+non+disponible';
                }}
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                Pas d'image disponible
              </div>
            )}
          </div>

          {/* Miniatures des photos */}
          {service.photos && service.photos.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {service.photos.map((photo, index) => (
                <img 
                  key={index}
                  src={photo} 
                  alt={`Miniature ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer 
                    ${selectedImage === photo ? 'border-4 border-blue-500' : 'opacity-70 hover:opacity-100'}`}
                  onClick={() => setSelectedImage(photo)}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/80x80?text=N/A';
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Détails du service */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{service.nom}</h1>
          <p className="text-xl text-gray-600 mb-4">{service.categorie}</p>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mt-6 mb-3">Description</h2>
            <p>{service.description || 'Aucune description disponible'}</p>
          </div>

          {/* Section Certifications */}
          {service.certifications && service.certifications.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FaFileAlt className="mr-2" /> Certifications
              </h2>
              <div className="space-y-2">
                {service.certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                  >
                    <div className="flex items-center">
                      <FaFileAlt className="mr-3 text-blue-500" />
                      <span>
                        {cert.split('/').pop()} {/* Extraire le nom du fichier */}
                      </span>
                    </div>
                    <button 
                      onClick={() => window.open(cert, '_blank')}
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <FaDownload className="mr-2" /> Télécharger
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;