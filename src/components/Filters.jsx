// src/components/Filters.jsx
import React, { useState } from 'react';

export const Filters = ({ setFilters }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({
      name,
      status,
      species,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-4">
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
};
