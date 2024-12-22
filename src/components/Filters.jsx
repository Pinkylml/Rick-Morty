import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Filters = ({ setFilters, setCurrentPage }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState([]); // Estado para múltiples selecciones
  const [species, setSpecies] = useState([]); // Estado para múltiples selecciones
  const [gender, setGender] = useState([]); // Estado para múltiples selecciones

  // Función para manejar la selección múltiple
  const handleCheckboxChange = (e, setter, type) => {
    const value = e.target.value;

    setter((prev) => {
      // Si ya está seleccionado, lo eliminamos, si no, lo añadimos
      return prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1)
    setFilters({
      name,
      status: status.length ? status : undefined,
      species: species.length ? species : undefined,
      gender: gender.length ? gender : undefined,
    });
  };

  const clearFilters = () => {
    setName('');
    setStatus([]);
    setSpecies([]);
    setGender([]);
    setFilters({});
    setCurrentPage(1);
  };

  // Verificar si hay filtros aplicados
  const hasActiveFilters = name || status.length || species.length || gender.length;

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
            className="p-2 text-fuchsia-900 text-sm border rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          {/* Filtro de estado con checkboxes */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Status:</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Alive"
                checked={status.includes('Alive')}
                onChange={(e) => handleCheckboxChange(e, setStatus, 'status')}
                className="mr-2"
              />
              Alive
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Dead"
                checked={status.includes('Dead')}
                onChange={(e) => handleCheckboxChange(e, setStatus, 'status')}
                className="mr-2"
              />
              Dead
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="unknown"
                checked={status.includes('unknown')}
                onChange={(e) => handleCheckboxChange(e, setStatus, 'status')}
                className="mr-2"
              />
              Unknown
            </label>
          </div>

          {/* Filtro de especie con checkboxes */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Species:</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Human"
                checked={species.includes('Human')}
                onChange={(e) => handleCheckboxChange(e, setSpecies, 'species')}
                className="mr-2"
              />
              Human
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Alien"
                checked={species.includes('Alien')}
                onChange={(e) => handleCheckboxChange(e, setSpecies, 'species')}
                className="mr-2"
              />
              Alien
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Humanoid"
                checked={species.includes('Humanoid')}
                onChange={(e) => handleCheckboxChange(e, setSpecies, 'species')}
                className="mr-2"
              />
              Humanoid
            </label>
          </div>

          {/* Filtro de género con checkboxes */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Gender:</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Female"
                checked={gender.includes('Female')}
                onChange={(e) => handleCheckboxChange(e, setGender, 'gender')}
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Male"
                checked={gender.includes('Male')}
                onChange={(e) => handleCheckboxChange(e, setGender, 'gender')}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Genderless"
                checked={gender.includes('Genderless')}
                onChange={(e) => handleCheckboxChange(e, setGender, 'gender')}
                className="mr-2"
              />
              Genderless
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Unknown"
                checked={gender.includes('Unknown')}
                onChange={(e) => handleCheckboxChange(e, setGender, 'gender')}
                className="mr-2"
              />
              Unknown
            </label>
          </div>
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

      {/* Mostrar filtros activos o mensaje si no hay filtros */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Active Filters:</h3>
        <div className="flex flex-wrap gap-2">
          {hasActiveFilters ? (
            <>
              {name && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Name: {name}
                </span>
              )}
              {status.length > 0 && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Status: {status.join(', ')}
                </span>
              )}
              {species.length > 0 && (
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Species: {species.join(', ')}
                </span>
              )}
              {gender.length > 0 && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Gender: {gender.join(', ')}
                </span>
              )}
            </>
          ) : (
            <span className="text-gray-500 text-sm">No filters applied</span> // Mensaje cuando no hay filtros
          )}
        </div>
      </div>
    </div>
  );
};
