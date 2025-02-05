import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LocalServiceModel from './Composants/LocalServiceModel';
import ServicesDisplay from './Composants/ServicesDisplay';
import ServiceDetails from './Composants/ServiceDetails';

function App() {
 return (
   <Router>
     <Routes>
       {/* Route par défaut */}
       <Route path="/" element={<ServicesDisplay />} />
       
       {/* Routes pour les services */}
       <Route path="/add-service" element={<LocalServiceModel />} />
       <Route path="/services" element={<ServicesDisplay />} />
       <Route path="/service/:id" element={<ServiceDetails />} />

       {/* Redirection si aucune route ne correspond */}
       <Route path="*" element={<Navigate to="/" replace />} />
     </Routes>
   </Router>
 );
}

export default App;