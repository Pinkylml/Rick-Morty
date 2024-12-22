// src/components/CharacterCard.jsx
import React from 'react';

export const CharacterCard = ({ character }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className='relative group'>
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={character.image}
          alt={character.name}
        />
        <div className="absolute bottom-10 left-0 w-full bg-gradient-to-tl from-indigo-400 to-purple-800 p-4 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-1000">

          <h3 className="text-xl font-semibold">{character.name}</h3>
          <p className="text-gray-100">{character.status}</p>
          <p className="text-gray-200 ">{character.species}</p>
          <p className="text-gray-300 text-sm">{character.gender}</p>
        </div>
      </div>
    </div>
  );
};
