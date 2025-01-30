// src/hooks/useForm.jsx
import { useState, useCallback } from 'react';

// Règles de validation de base
const validationRules = {
  required: (value) => !value && 'Ce champ est obligatoire',
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return value && !emailRegex.test(value) && 'Email invalide';
  },
  phone: (value) => {
    const phoneRegex = /^[0-9+\s-]{8,}$/;
    return value && !phoneRegex.test(value) && 'Numéro de téléphone invalide';
  },
  minLength: (length) => (value) => 
    value && value.length < length && `Minimum ${length} caractères requis`
};

export const useForm = (initialValues, validationSchema) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gestion des champs de type texte, select, etc.
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));

    // Validation à la saisie si le champ a été touché
    if (touched[name]) {
      validateField(name, value);
    }
  }, [touched]);

  // Gestion des fichiers
  const handleFileChange = useCallback((e, fieldName) => {
    const file = e.target.files[0];
    setValues(prev => ({
      ...prev,
      [fieldName]: file
    }));

    // Validation du fichier si nécessaire
    if (touched[fieldName]) {
      validateField(fieldName, file);
    }
  }, [touched]);

  // Gestion du focus perdu (blur)
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, values[name]);
  }, [values]);

  // Validation d'un champ spécifique
  const validateField = useCallback((fieldName, value) => {
    if (validationSchema && validationSchema[fieldName]) {
      const fieldRules = validationSchema[fieldName];
      let fieldError = '';

      for (const rule in fieldRules) {
        if (validationRules[rule]) {
          const validationResult = typeof fieldRules[rule] === 'object' 
            ? validationRules[rule](fieldRules[rule].value)(value)
            : validationRules[rule](value);

          if (validationResult) {
            fieldError = fieldRules[rule].message || validationResult;
            break;
          }
        }
      }

      setErrors(prev => ({
        ...prev,
        [fieldName]: fieldError
      }));

      return !fieldError;
    }
    return true;
  }, [validationSchema]);

  // Validation du formulaire complet
  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    for (const fieldName in values) {
      const isFieldValid = validateField(fieldName, values[fieldName]);
      if (!isFieldValid) {
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  // Réinitialisation du formulaire
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  // Définir une valeur spécifique
  const setValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Définir plusieurs valeurs à la fois
  const setMultipleValues = useCallback((newValues) => {
    setValues(prev => ({
      ...prev,
      ...newValues
    }));
  }, []);

  // Gestion de la soumission
  const handleSubmit = useCallback((submitCallback) => async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = validateForm();
    if (isValid && submitCallback) {
      try {
        await submitCallback(values);
        resetForm();
      } catch (error) {
        setErrors(prev => ({
          ...prev,
          submit: error.message
        }));
      }
    }
    setIsSubmitting(false);
  }, [values, validateForm, resetForm]);

  // Vérifier si le formulaire est valide
  const isValid = useCallback(() => {
    return Object.keys(errors).length === 0;
  }, [errors]);

  // Vérifier si un champ a été modifié
  const isDirty = useCallback(() => {
    return JSON.stringify(values) !== JSON.stringify(initialValues);
  }, [values, initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleFileChange,
    handleBlur,
    handleSubmit,
    validateField,
    validateForm,
    resetForm,
    setValue,
    setMultipleValues,
    setValues,
    setErrors,
    isValid,
    isDirty
  };
};

// Exemple d'utilisation :
/*
const validationSchema = {
  firstName: {
    required: true,
    minLength: {
      value: 2,
      message: 'Le prénom doit contenir au moins 2 caractères'
    }
  },
  email: {
    required: true,
    email: true
  },
  phone: {
    required: true,
    phone: true
  }
};

const MyForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = useForm({
    firstName: '',
    email: '',
    phone: ''
  }, validationSchema);

  const onSubmit = async (formData) => {
    // Traitement du formulaire
    await submitToAPI(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.firstName && <span>{errors.firstName}</span>}
      
      // ... autres champs
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  );
};
*/