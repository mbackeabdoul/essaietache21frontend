export const allowedFileTypes = {
    image: ['image/jpeg', 'image/png', 'image/jpg'],
    document: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  };
  
  export const validateFile = (file, type = 'document') => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (file.size > maxSize) {
      return {
        isValid: false,
        error: ERROR_MESSAGES.FILE_TOO_LARGE
      };
    }
  
    if (!allowedFileTypes[type].includes(file.type)) {
      return {
        isValid: false,
        error: ERROR_MESSAGES.INVALID_FILE_TYPE
      };
    }
  
    return {
      isValid: true,
      error: null
    };
  };
  