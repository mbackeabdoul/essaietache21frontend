import React, { useState, useEffect } from "react";
// import Layout from "../components/Layout";
import { FaUsers, FaClock } from "react-icons/fa";

const Accueil = () => {
  const [clients, setClients] = useState([]);

  // Récupérer les clients à partir de l'API (GET)
  useEffect(() => {
    fetch("https://votre-api.com/clients")
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Erreur lors du chargement des clients :", error));
  }, []);

  // Fonction pour supprimer un client par son ID (DELETE)
  const supprimerClient = (id) => {
    fetch(`https://votre-api.com/clients/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Mise à jour de l'état pour refléter la suppression
          setClients(clients.filter((client) => client.id !== id));
        } else {
          console.error("Erreur lors de la suppression du client");
        }
      })
      .catch((error) => console.error("Erreur lors de la suppression du client :", error));
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 mt-10">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <FaUsers className="text-4xl text-blue-500 mr-4" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Nombre de demandes</h2>
              <p className="text-3xl font-bold text-gray-800">{clients.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <FaClock className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Demandes en attente</h2>
              <p className="text-3xl font-bold text-gray-800">
                {clients.filter(client => client.demande === "En attente").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-semibold text-gray-800 p-6 bg-gray-50 border-b">Clients récents</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prenom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localisation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Demande</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clients.map(client => (
                <tr key={client.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{client.prenom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{client.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{client.localisation}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded">{client.demande}</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => supprimerClient(client.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
