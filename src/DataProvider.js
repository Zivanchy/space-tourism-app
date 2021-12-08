import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const APIContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('../data.json');
      const returnedData = await response.data;
      setData(returnedData);
      console.log(returnedData);
      setLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <APIContext.Provider value={[data, isLoading]}>
      {props.children}
    </APIContext.Provider>
  );
};
