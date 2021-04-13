import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
// import {
//   songOne,
// } from '../utils/data';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [song, setSong] = useState(null);
  const [mapLocation, setMapLocation] = useState(null);

  const handleSong = (track) => {
    setSong(track);
    setMapLocation(track.mapLocation);
  };

  const handleMapLocation = (location) => {
    setMapLocation(location);
  };

  return (
    <DataContext.Provider
      value={{
        song,
        mapLocation,
        handleSong,
        handleMapLocation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

// get state
export const useSong = () => {
  const { song } = useContext(DataContext);
  return song;
};

export const useMapLocation = () => {
  const { mapLocation } = useContext(DataContext);
  return mapLocation;
};

// get handlers
export const useHandleSong = () => {
  const { handleSong } = useContext(DataContext);
  return handleSong;
};

export const useHandleMapLocation = () => {
  const { handleMapLocation } = useContext(DataContext);
  return handleMapLocation;
};
