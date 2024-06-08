import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === '1') {
      setDarkMode(true);
    }
  }, []);

  const handleDarkModeChange = () => {
    setDarkMode(prevDarkMode => {
        window.location.reload();
      const newMode = !prevDarkMode;

      localStorage.setItem('mode', newMode ? '1' : '0');
      return newMode;
    });
  };

  return (
    <div>
      <header className={`text-gray-600 body-font ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
        <div className="container mx-auto flex flex-wrap p-5 sticky top-0 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl"><img src="https://betterzila.com/wp-content/uploads/2022/10/betterzila-logov2.png" alt="" /></span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-14 hover:text-gray-900">Home</a>
            <a className="mr-14 hover:text-gray-900">Dashboard</a>
            <a className="mr-14 hover:text-gray-900">About</a>
            <a className="mr-14 hover:text-gray-900">Contact</a>
          </nav>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={darkMode} onChange={handleDarkModeChange} className="sr-only peer" />
            <div className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow-600 after:border-gray-300  after:rounded-full after:h-5 after:w-5 after:transition-all ${darkMode ? 'bg-gray-600' : 'bg-gray-300 peer-checked:bg-gray-600'}`}></div>
            <span className="ms-3 text-sm font-medium">Dark Mode</span>
          </label>
        </div>
      </header>
      <hr style={{ backgroundColor: "black", boxShadow: "0 2px 3px rgba(0, 0, 0, 1.5)" }} />
    </div>
  )
}

export default Navbar;
