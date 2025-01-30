export const validateField = (name, value) => {
    let error = '';
  
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          error = 'Ce champ est obligatoire';
        } else if (value.length < 2) {
          error = 'Minimum 2 caractères requis';
        }
        break;
  
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          error = 'L\'email est obligatoire';
        } else if (!emailRegex.test(value)) {
          error = 'Format d\'email invalide';
        }
        break;
  
      case 'phone':
        const phoneRegex = /^[0-9+\s-]{8,}$/;
        if (!value) {
          error = 'Le numéro de téléphone est obligatoire';
        } else if (!phoneRegex.test(value)) {
          error = 'Format de téléphone invalide';
        }
        break;
  
      case 'password':
        if (!value) {
          error = 'Le mot de passe est obligatoire';
        } else if (value.length < 8) {
          error = 'Le mot de passe doit contenir au moins 8 caractères';
        }
        break;
  
      case 'serviceCategory':
        if (!value) {
          error = 'Veuillez sélectionner une catégorie';
        }
        break;
  
      case 'description':
        if (!value.trim()) {
          error = 'La description est obligatoire';
        } else if (value.length < 50) {
          error = 'La description doit contenir au moins 50 caractères';
        }
        break;
  
      default:
        break;
    }
  
    return error;
  };