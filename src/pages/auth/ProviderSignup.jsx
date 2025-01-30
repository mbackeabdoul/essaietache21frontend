import React, { useState } from 'react';
import { Card, Button, Steps, Alert } from 'flowbite-react';
import PersonalInfo from '../..Composants/forms/provider/PersonalInfo';
import ProfessionalInfo from '../../Composants/forms/provider/ProfessionalInfo'
import DocumentUpload from '../Composants/forms/provider/DocumentUpload';
// import { useForm } from '../../hooks/useForm';

const ProviderSignup = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    values: formData,
    errors,
    handleChange,
    handleBlur,
    validateForm,
    setValues: setFormData
  } = useFormValidation({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    businessName: '',
    serviceCategory: '',
    description: '',
    idCard: null,
    certificate: null
  });

  const canProceedToNextStep = () => {
    switch (step) {
      case 1:
        return !errors.firstName && !errors.lastName && !errors.email &&
               !errors.phone && !errors.password && formData.firstName &&
               formData.lastName && formData.email && formData.phone &&
               formData.password;
      case 2:
        return !errors.serviceCategory && !errors.description &&
               formData.serviceCategory && formData.description;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (canProceedToNextStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // En cas de succès
      console.log('Form submitted successfully:', formData);
      
      // Redirection ou message de succès
      // history.push('/dashboard'); // Si vous utilisez react-router

    } catch (error) {
      setSubmitError('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        {submitError && (
          <Alert color="failure" className="mb-4">
            {submitError}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-8">
            <Steps>
              <Steps.Item
                completed={step > 1}
                active={step === 1}
              >
                Informations personnelles
              </Steps.Item>
              <Steps.Item
                completed={step > 2}
                active={step === 2}
              >
                Informations professionnelles
              </Steps.Item>
              <Steps.Item
                active={step === 3}
              >
                Documents
              </Steps.Item>
            </Steps>
          </div>

          {step === 1 && (
            <PersonalInfo
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          )}

          {step === 2 && (
            <ProfessionalInfo
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          )}

          {step === 3 && (
            <DocumentUpload
              handleFileChange={(e, field) => {
                const file = e.target.files[0];
                setFormData(prev => ({
                  ...prev,
                  [field]: file
                }));
              }}
            />
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button
                color="gray"
                onClick={() => setStep(step - 1)}
                disabled={isSubmitting}
              >
                Précédent
              </Button>
            )}
            
            {step < 3 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceedToNextStep() || isSubmitting}
                className="ml-auto"
              >
                Suivant
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto"
              >
                {isSubmitting ? 'Inscription en cours...' : 'S\'inscrire'}
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ProviderSignup;