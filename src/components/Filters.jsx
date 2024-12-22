// src/components/Filters.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Filters = ({ setFilters }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState(''); // Nuevo estado para el género

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({
      name,
      status,
      species,
      gender, // Añadir género a los filtros
    });
  };

  const clearFilters = () => {
    setName('');
    setStatus('');
    setSpecies('');
    setGender(''); // Limpiar el género también
    setFilters({});
  };

  return (
    <div className="max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Find Your Favorite Characters</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search by name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <select
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Humanoid">Humanoid</option>
          </select>
          {/* Filtro de género */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Genders</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        
        <div className="flex justify-center gap-4">
          <button 
            type="submit" 
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Search
          </button>
          <button 
            type="button" 
            onClick={clearFilters}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Clear Filters
          </button>
        </div>
      </form>

      {(name || status || species || gender) && ( // Agregar el filtro de género en la verificación
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {name && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Name: {name}
              </span>
            )}
            {status && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Status: {status}
              </span>
            )}
            {species && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Species: {species}
              </span>
            )}
            {gender && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                Gender: {gender}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
