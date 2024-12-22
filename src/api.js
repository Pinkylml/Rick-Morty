import axios from 'axios';
const API_URL = 'https://rickandmortyapi.com/api/character/';

export const getCharacters = async (filters = {}, page = 1) => {
  try {
    let url = API_URL;
    
    // Crear el objeto de filtros con operadores lógicos
    const params = new URLSearchParams();
    
    // Añadir el parámetro de página
    params.append('page', page);
    
    // Añadir filtros de nombre
    if (filters.name) {
      params.append('name', filters.name);
    }

    // Añadir filtros de estado (con OR lógico para múltiples valores)
    if (filters.status && filters.status.length) {
      filters.status.forEach(status => params.append('status', status));
    }

    // Añadir filtros de especie (con OR lógico para múltiples valores)
    if (filters.species && filters.species.length) {
      filters.species.forEach(specie => params.append('species', specie));
    }

    // Añadir filtros de género (con OR lógico para múltiples valores)
    if (filters.gender && filters.gender.length) {
      filters.gender.forEach(gender => params.append('gender', gender));
    }

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