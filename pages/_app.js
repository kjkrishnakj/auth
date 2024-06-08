import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === '1') {
      setDarkMode(true);
    }
  }, []);

  const handleDarkModeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('mode', newMode ? '1' : '0');
  };

  return (
    <>
      <Navbar darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
      <Component {...pageProps} darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
    </>
  );
}

export default MyApp;
