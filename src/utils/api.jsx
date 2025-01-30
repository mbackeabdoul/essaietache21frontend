export const handleApiError = (error) => {
    if (!error.response) {
      return ERROR_MESSAGES.NETWORK_ERROR;
    }
  
    switch (error.response.status) {
      case 400:
        return error.response.data.message || 'Données invalides';
      case 401:
        return 'Non autorisé';
      case 404:
        return 'Ressource non trouvée';
      case 500:
        return ERROR_MESSAGES.SERVER_ERROR;
      default:
        return 'Une erreur est survenue';
    }
  };
  
  // Si vous utilisez axios, vous pouvez aussi ajouter une configuration de base
  export const apiConfig = {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 10000
  };
  