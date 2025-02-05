import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    prenom: '',
    nom: '',
    email: '',
    photo: null
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les données du profil
  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/profile');
      setProfile(response.data);
      setLoading(false);
    } catch (err) {
      setError('Erreur lors du chargement du profil');
      setLoading(false);
    }
  };

  // Gérer les modifications
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gérer l'upload de photo
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('photo', file);
      
      try {
        const response = await axios.post('http://localhost:3000/api/profile/photo', formData);
        setProfile(prev => ({
          ...prev,
          photo: response.data.photoUrl
        }));
      } catch (err) {
        setError('Erreur lors de l\'upload de la photo');
      }
    }
  };

  // Sauvegarder les modifications
  const handleSave = async () => {
    try {
      await axios.put('http://localhost:3000/api/profile', profile);
      setIsEditing(false);
    } catch (err) {
      setError('Erreur lors de la sauvegarde');
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-xl mx-auto p-8">
      <div className="flex gap-12">
        <div className="flex-1">
          <div className="space-y-6">
            {/* Prénom */}
            <div>
              <label className="block text-gray-600 mb-2">Prénom</label>
              <input
                type="text"
                name="prenom"
                className="w-full p-2 border rounded-lg bg-gray-50"
                value={profile.prenom}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>

            {/* Nom */}
            <div>
              <label className="block text-gray-600 mb-2">Nom</label>
              <input
                type="text"
                name="nom"
                className="w-full p-2 border rounded-lg bg-gray-50"
                value={profile.nom}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-lg bg-gray-50"
                  value={profile.email}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
                {!isEditing && (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 text-sm"
                  >
                    Modifier
                  </button>
                )}
              </div>
            </div>

            {/* Boutons */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => {
                  setIsEditing(false);
                  fetchProfileData();
                }}
                className="flex-1 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-700"
              >
                Annuler
              </button>
              <button 
                onClick={handleSave}
                className="flex-1 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        </div>

        {/* Section Photo */}
        <div className="w-40">
          <div className="w-24 h-24 bg-gray-100 rounded-full mb-4 mx-auto flex items-center justify-center overflow-hidden">
            {profile.photo ? (
              <img 
                src={profile.photo} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUser className="w-12 h-12 text-gray-400" />
            )}
          </div>
          <input
            type="file"
            id="photo"
            className="hidden"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
          <label 
            htmlFor="photo"
            className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg text-sm hover:bg-blue-800 cursor-pointer block text-center"
          >
            Télécharger une photo
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;