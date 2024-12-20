// src/components/CharacterCard.jsx
import React from 'react';

export const CharacterCard = ({ character }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={character.image}
        alt={character.name}
      />
      <div className="mt-2">
        <h3 className="text-xl font-semibold">{character.name}</h3>
        <p className="text-gray-600">{character.status}</p>
        <p className="text-gray-400 text-sm">{character.species}</p>
      </div>
    </div>
  );
};
