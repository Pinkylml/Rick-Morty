// src/components/CharacterList.jsx
import React from 'react';
import { CharacterCard } from './CharacterCard';
import { motion } from 'framer-motion';

export const CharacterList = ({ characters }) => {
  return (
   <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((character) => (
        <motion.div
          key={character.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,  scale: 1 }}
          //transition={{ duration: 0.3 }}
          transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          //style={box}
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.95}}
    
        >
          <CharacterCard character={character} />
        </motion.div>
      ))}
    </div>
  );
};




