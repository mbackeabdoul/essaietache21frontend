import React from 'react';
import plombier from '../src/images/plombier.png'

const CommentCaMarche = () => {
  return (
    <div className="relative w-full h-auto md:h-[600px] bg-[#fff9e6] my-2">
      <div className="relative max-w-[1200px] mx-auto h-full px-4 md:px-0">
        <div className="hidden md:block absolute right-0 top-0 h-full w-3/5">
          <img
            src={plombier}
            alt="Personne utilisant l'application" 
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        <div className="md:hidden w-full pt-8 pb-4">
          <img
            src={plombier}
            alt="Personne utilisant l'application" 
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>

        <div className="relative md:absolute left-0 md:left-8 top-0 md:top-1/2 md:-translate-y-1/2 bg-white p-6 md:p-12 rounded-lg w-full md:w-[500px] shadow-lg">
          <h2 className="text-2xl font-medium text-green-900 mb-8 md:mb-12">
            Comment ça marche
          </h2>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e8e6ff] flex items-center justify-center">
                <span className="text-xl font-medium">1</span>
              </div>
              <p className="text-gray-800 text-lg">
                Choisissez un prestataire local en fonction du prix, des compétences et des avis.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4f4ea] flex items-center justify-center">
                <span className="text-xl font-medium">2</span>
              </div>
              <p className="text-gray-800 text-lg">
                Planifiez un service selon vos disponibilités.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e1f9f5] flex items-center justify-center">
                <span className="text-xl font-medium">3</span>
              </div>
              <p className="text-gray-800 text-lg">
                Discutez, payez et évaluez directement depuis la plateforme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCaMarche;