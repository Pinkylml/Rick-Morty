// src/api.js
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const getCharacters = async (filters = {}) => {
  try {
    let url = API_URL;
    
    // Agregar filtros a la URL
    const params = new URLSearchParams(filters);
    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return null;
  }
};
