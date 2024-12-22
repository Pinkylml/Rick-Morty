import React, { useState, useEffect } from 'react';
import { getCharacters } from './api';
import { CharacterList } from './components/CharacterList';
import { Filters } from './components/Filters';
import { motion } from 'framer-motion';
import { Graphs } from './components/Graphs';


function App() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCharacters(filters);
      if (data) {
        setCharacters(data.results);
      }
      console.log(data.results)
      setLoading(false);
    };

    fetchData();
  }, [filters]);

  return (
    <div className="p-4 container mx-auto">
      <Filters setFilters={setFilters} />
      
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
          <Graphs characters={characters} />
          <CharacterList characters={characters} />
        </>
       
      )}
    </div>
  );
}

export default App;
