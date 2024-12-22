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
      const data = await getCharacters(filters, currentPage);
      if (data) {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
        setTotalInfo(data.info);
      } else {
        setCharacters([])
      }
      setLoading(false);

    };

    fetchData();
  }, [filters, currentPage]);
  return (
    <div className="p-10 container mx-auto bg-gradient-to-tr from-pink-500 via-purple-500  to-indigo-500 ">
      <Filters setFilters={setFilters} setCurrentPage={setCurrentPage} />

      {loading ? (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <p>Loading...</p>
        </motion.div>
      ) : (
        <>
          {characters.length === 0 ? (
            <p>There is no characters available</p>
          ) : (
            <>
              <CharacterList characters={characters} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
              <Graphs characters={characters} totalInfo={totalInfo} />
            </>

          )
          }
        </>

      )}
    </div>
  );
}

export default App;
