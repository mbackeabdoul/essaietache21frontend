// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import LocalServiceModel from './Composants/LocalServiceModel';
// import ServicesDisplay from './Composants/ServicesDisplay';
// import ServiceDetails from './Composants/ServiceDetails';

// function App() {
//  return (
//    <Router>
//      <Routes>
//        {/* Route par défaut */}
//        <Route path="/" element={<ServicesDisplay />} />
       
//        {/* Routes pour les services */}
//        <Route path="/add-service" element={<LocalServiceModel />} />
//        <Route path="/services" element={<ServicesDisplay />} />
//        <Route path="/service/:id" element={<ServiceDetails />} />

//        {/* Redirection si aucune route ne correspond */}
//        <Route path="*" element={<Navigate to="/" replace />} />
//      </Routes>
//    </Router>
//  );
// }

// export default App;

// import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import LocalServiceModel from './Composants/LocalServiceModel';
// import ServicesDisplay from './Composants/ServicesDisplay';
// import ServiceDetails from './Composants/ServiceDetails';

// import ProfessionelDetails from './Composants/ProfessionelDetail';
// import DemandeServiceDetails from './Composants/DemandeServiceDetails';
// import PrestataireDashboard from './Composants/PrestataireDashboard';
import Portfolio from './Composants/Portfolio';

function App() {
 return (
    <div>
      {/* <ProfessionelDetails/>
      <PrestataireDashboard /> */}
      <Portfolio />
      {/* <DemandeServiceDetails /> */}
    </div>
  //  <Router>
  //    <Routes>
  //      {/* Route par défaut */}
  //      <Route path="/" element={<ServicesDisplay />} />
       
  //      {/* Routes pour les services */}
  //      <Route path="/add-service" element={<LocalServiceModel />} />
  //      <Route path="/services" element={<ServicesDisplay />} />
  //      <Route path="/service/:id" element={<ServiceDetails />} />

  //      {/* Redirection si aucune route ne correspond */}
  //      <Route path="*" element={<Navigate to="/" replace />} />
  //    </Routes>
  //  </Router>
 );
}

export default App;





// import React, { useState, useEffect } from 'react';
// import { FaUser, FaEnvelope, FaEdit, FaSave, FaCamera, FaUserCircle, FaTimes } from 'react-icons/fa';

// const ProfileModal = ({ isOpen, onClose }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     id: '',
//     prenom: '',
//     nom: '',
//     email: '',
//     photo: null
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [updateSuccess, setUpdateSuccess] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       getProfile();
//     }
//   }, [isOpen]);

//   const getProfile = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await fetch('https://backendtache21.onrender.com/api/clients/profil-client', {
//         method: 'GET',
//         headers: { 
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });
      
//       if (!response.ok) {
//         throw new Error(`Erreur HTTP: ${response.status}`);
//       }
      
//       const data = await response.json();
//       setProfile(data);
//       if (data.photo) setImagePreview(data.photo);
//       setError(null);
//     } catch (error) {
//       console.error('Erreur getProfile:', error);
//       setError('Impossible de récupérer les informations du profil.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//     setUpdateSuccess(false);
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem('token');
      
//       const payload = {
//         prenom: profile.prenom,
//         nom: profile.nom,
//         email: profile.email
//       };
  
//       const response = await fetch(
//         'https://backendtache21.onrender.com/api/clients/mettre-a-jour-client',
//         {
//           method: 'PUT',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(payload)
//         }
//       );
  
//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error('Détails de l\'erreur:', errorText);
//         throw new Error(`Erreur HTTP: ${response.status}`);
//       }
  
//       await getProfile();
  
//       setIsEditing(false);
//       setError(null);
//       setUpdateSuccess(true);
  
//       setTimeout(() => {
//         setUpdateSuccess(false);
//       }, 3000);
//     } catch (error) {
//       console.error('Erreur handleSave:', error);
//       setError('Erreur lors de la mise à jour du profil. Veuillez réessayer.');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         setError('L\'image ne doit pas dépasser 5MB');
//         return;
//       }

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//         setProfile(prev => ({
//           ...prev,
//           photo: file
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   if (!isOpen) return null;

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white p-8 rounded-xl shadow-lg">
//           <div className="text-gray-800 text-xl">Chargement...</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white w-full max-w-2xl mx-4 rounded-2xl shadow-2xl relative">
//         {/* Bouton de fermeture */}
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
//         >
//           <FaTimes size={24} />
//         </button>

//         {/* Contenu du modal */}
//         <div className="p-8">
//           {/* Messages d'erreur et de succès */}
//           {error && (
//             <div className="bg-red-100 text-red-700 p-4 rounded-xl mb-4 flex justify-between items-center">
//               <span>{error}</span>
//               <button onClick={() => setError(null)}>×</button>
//             </div>
//           )}

//           {updateSuccess && (
//             <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-4 flex justify-between items-center">
//               <span>Profil mis à jour avec succès!</span>
//               <button onClick={() => setUpdateSuccess(false)}>×</button>
//             </div>
//           )}

//           <div className="flex flex-col md:flex-row gap-8">
//             {/* Section photo de profil */}
//             <div className="flex flex-col items-center">
//               <div className="relative mb-6">
//                 <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-indigo-500">
//                   {imagePreview ? (
//                     <img 
//                       src={imagePreview} 
//                       alt="Profile" 
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-gray-100">
//                       <FaUserCircle className="w-28 h-28 text-gray-400" />
//                     </div>
//                   )}
//                 </div>

//                 {isEditing && (
//                   <label className="absolute bottom-0 right-0 cursor-pointer">
//                     <input
//                       type="file"
//                       className="hidden"
//                       accept="image/*"
//                       onChange={handleImageChange}
//                     />
//                     <div className="p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors">
//                       <FaCamera size={16} />
//                     </div>
//                   </label>
//                 )}
//               </div>

//               <button
//                 onClick={isEditing ? handleSave : handleEdit}
//                 className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
//               >
//                 {isEditing ? (
//                   <>
//                     <FaSave />
//                     <span>Enregistrer</span>
//                   </>
//                 ) : (
//                   <>
//                     <FaEdit />
//                     <span>Modifier</span>
//                   </>
//                 )}
//               </button>
//             </div>

//             {/* Section informations */}
//             <div className="flex-1">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                 Mes Informations
//               </h2>

//               {isEditing ? (
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     name="prenom"
//                     value={profile.prenom}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                     placeholder="Prénom"
//                   />
//                   <input
//                     type="text"
//                     name="nom"
//                     value={profile.nom}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                     placeholder="Nom"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     value={profile.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                     placeholder="Email"
//                   />
//                 </div>
//               ) : (
//                 <div className="space-y-4 bg-gray-100 p-6 rounded-lg">
//                   <div>
//                     <h3 className="text-sm text-gray-600">Nom complet</h3>
//                     <p className="text-lg font-semibold">{profile.prenom} {profile.nom}</p>
//                   </div>
//                   <div>
//                     <h3 className="text-sm text-gray-600">Email</h3>
//                     <p className="text-lg">{profile.email}</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Composant parent pour gérer l'ouverture/fermeture du modal
// const ProfilCli = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div>
//       <button 
//         onClick={() => setIsModalOpen(true)}
//         className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//       >
//         Voir mon profil
//       </button>
//       <ProfileModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//       />
//     </div>
//   );
// };

// export default ProfilCli;