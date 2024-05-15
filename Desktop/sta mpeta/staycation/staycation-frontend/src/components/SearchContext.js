// SearchContext.js
/*import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}; 

export const useSearch = () => useContext(SearchContext); */

/* searchContext.js */

/*import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext); */ 

import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    query: '',
    checkInDate: '',
    checkOutDate: '',
    numAdults: '1',
    numChildren: '0',
    numRooms: '1',
  });

  return (
    <SearchContext.Provider value={{ searchCriteria, setSearchCriteria }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

