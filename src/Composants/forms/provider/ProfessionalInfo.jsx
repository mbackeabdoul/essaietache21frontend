import React from 'react';
import { Label, TextInput, Select, Textarea } from 'flowbite-react';

export const ProfessionalInfo = ({ formData, handleChange }) => {
  const serviceCategories = [
    'Plomberie',
    'Électricité',
    'Coiffure',
    'Enseignement',
    'Jardinage',
    'Ménage',
    'Maintenance',
    'Autre'
  ];

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="businessName" value="Nom de l'entreprise (optionnel)" />
        <TextInput
          id="businessName"
          type="text"
          value={formData.businessName}
          onChange={handleChange}
          name="businessName"
        />
      </div>

      <div>
        <Label htmlFor="serviceCategory" value="Catégorie de service" />
        <Select
          id="serviceCategory"
          required
          value={formData.serviceCategory}
          onChange={handleChange}
          name="serviceCategory"
        >
          <option value="">Sélectionnez une catégorie</option>
          {serviceCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="description" value="Description de vos services" />
        <Textarea
          id="description"
          required
          rows={4}
          value={formData.description}
          onChange={handleChange}
          name="description"
        />
      </div>
    </div>
  );
};

