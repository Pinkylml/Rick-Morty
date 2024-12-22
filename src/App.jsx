import React, { useState, useEffect } from 'react';
import { getCharacters } from './api';
import { CharacterList } from './components/CharacterList';
import { Filters } from './components/Filters';
import { motion } from 'framer-motion';
import { Graphs } from './components/Graphs';
import { Pagination } from './components/Pagination';


function App() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalInfo, setTotalInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCharacters(filters, currentPage); // Añadimos currentPage aquí
      if (data) {
        setCharacters(data.results);
        setTotalPages(data.info.pages); 
        setTotalInfo(data.info); 
      }
      setLoading(false);
    };

    fetchData();
  }, [filters, currentPage]); // Añadimos currentPage como dependencia
  return (
    <div className="p-4 container mx-auto">
      <Filters setFilters={setFilters} setCurrentPage={setCurrentPage} />

      {loading ? (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Loading...</p>
        </motion.div>
      ) : (
        <>

          <Graphs characters={characters} totalInfo={totalInfo} />

          <CharacterList characters={characters} />
          <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          />
        </>

      )}
    </div>
  );
}

export default App;
