// src/LiffProvider.js
import liff from '@line/liff';
import { createContext, useContext, useEffect, useState } from 'react';

// Create a context to hold the LIFF object and profile
const LiffContext = createContext({});

export const LiffProvider = ({ children }) => {
  const [liffObject, setLiffObject] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeLiff = async () => {
      try {
        setLoading(true);
        await liff.init({ liffId: "2007867112-RYAXp20O" });
        
        setLiffObject(liff);

        if (liff.isLoggedIn()) {
          const userProfile = await liff.getProfile();
          setProfile(userProfile);
        }
      } catch (e) {
        console.error('LIFF Initialization failed', e);
        setError(e.toString());
      } finally {
        setLoading(false);
      }
    };

    initializeLiff();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <LiffContext.Provider value={{ liffObject, profile, loading, error }}>
      {children}
    </LiffContext.Provider>
  );
};

// Create a custom hook to easily access the context
export const useLiff = () => useContext(LiffContext);