import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from "../public/logo.png"
import Image from 'next/image';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("login");
  const [email, setEmail] = useState("");
const handleLogout=()=>{
  localStorage.removeItem('email');
}
  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === '1') {
      setDarkMode(true);
    }
    if(localStorage.getItem('email')!=undefined){
      setText("logout")
    }
    else{
      setText("login");
      setEmail(localStorage.getItem('email'));

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
            <div className="relative mx-auto text-xl h-16 w-36 bg-white rounded-full flex items-center justify-center">
              <Image className="h-12 w-24 object-contain" src={logo} alt="Logo" />
            </div>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/home"  className="mr-14 hover:text-yellow-400">Home</Link > 
            <Link href="/about"  className="mr-14 hover:text-yellow-400">About</Link >
            <Link href="/contact"  className="mr-14 hover:text-yellow-400">Contact</Link >
          </nav>
          <label className="inline-flex items-center cursor-pointer">
          {email ? <Link href='/login'>
                        <button className="cursor-pointer inline-flex items-center   border-0 py-4 mr-3 px-4 focus:outline-none  rounded text-base mt-4 md:mt-0" style={{color: "#F59E0B", marginRight: "1rem", fontWeight: "700" }}>Login</button></Link>
                        :<Link href='/login'> 
                        <button onClick={handleLogout} className="cursor-pointer inline-flex items-center   border-0 py-4 mr-3 px-4 focus:outline-none  rounded text-base mt-4 md:mt-0" style={{color: "#F59E0B", marginRight: "1rem", fontWeight: "700" }}>Logout</button></Link>
                       }
                 
          {/* <Link href="/login"   className="mr-14 hover:text-yellow-400">{text}</Link > */}
            <input type="checkbox" checked={darkMode} onChange={handleDarkModeChange} className="sr-only peer" />
            <div className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                 after:bg-yellow-600 after:border-gray-300  after:rounded-full after:h-5 after:w-5 after:transition-all ${darkMode ? 'bg-gray-600' : 'bg-gray-300 peer-checked:bg-gray-600'}`}></div>
            <span className="ms-3 text-sm font-medium">Dark Mode</span>
          </label>
        </div>
      </header>
      <hr style={{ backgroundColor: "black", boxShadow: "0 2px 3px rgba(0, 0, 0, 1.5)" }} />
    </div>
  )
}

export default Navbar;
