import React from 'react';
import { Label, FileInput } from 'flowbite-react';

export const DocumentUpload = ({ handleFileChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="idCard" value="Pièce d'identité (optionnel)" />
        <FileInput
          id="idCard"
          name="idCard"
          onChange={(e) => handleFileChange(e, 'idCard')}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="certificate" value="Certificat professionnel (optionnel)" />
        <FileInput
          id="certificate"
          name="certificate"
          onChange={(e) => handleFileChange(e, 'certificate')}
          className="mt-2"
        />
      </div>
    </div>
  );
};