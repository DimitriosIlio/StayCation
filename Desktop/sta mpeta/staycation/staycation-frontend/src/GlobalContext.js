// GlobalContext.js
import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numAdults, setNumAdults] = useState('1');
  const [numChildren, setNumChildren] = useState('0');
  const [numRooms, setNumRooms] = useState('1');

  return (
    <GlobalContext.Provider value={{
      searchQuery, setSearchQuery,
      checkInDate, setCheckInDate,
      checkOutDate, setCheckOutDate,
      numAdults, setNumAdults,
      numChildren, setNumChildren,
      numRooms, setNumRooms
    }}>
      {children}
    </GlobalContext.Provider>
  );
};