export const storage = {
    set: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    },
    
    get: (key) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
      }
    },
    
    remove: (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing from localStorage:', error);
      }
    },
    
    clear: () => {
      try {
        localStorage.clear();
      } catch (error) {
        console.error('Error clearing localStorage:', error);
      }
    }
  };



//   import { validateField } from '../utils/validation';
// import { SERVICE_CATEGORIES } from '../utils/constants';
// import { formatPhoneNumber } from '../utils/helpers';
// import { ERROR_MESSAGES } from '../utils/errorMessages';
// import { validateFile } from '../utils/fileHelpers';
// import { handleApiError } from '../utils/api';
// import { storage } from '../utils/localStorage';