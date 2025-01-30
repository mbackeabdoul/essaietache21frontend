import React from 'react';
import { Label, TextInput, Alert } from 'flowbite-react';

export const PersonalInfo = ({ formData, errors, handleChange, handleBlur }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" value="Prénom" />
          <TextInput
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            color={errors.firstName ? "failure" : "gray"}
            helperText={errors.firstName}
          />
        </div>
        <div>
          <Label htmlFor="lastName" value="Nom" />
          <TextInput
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            color={errors.lastName ? "failure" : "gray"}
            helperText={errors.lastName}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" value="Email" />
        <TextInput
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          color={errors.email ? "failure" : "gray"}
          helperText={errors.email}
        />
      </div>

      <div>
        <Label htmlFor="phone" value="Téléphone" />
        <TextInput
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          color={errors.phone ? "failure" : "gray"}
          helperText={errors.phone}
        />
      </div>

      <div>
        <Label htmlFor="password" value="Mot de passe" />
        <TextInput
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          color={errors.password ? "failure" : "gray"}
          helperText={errors.password}
        />
      </div>
    </div>
  );
};
