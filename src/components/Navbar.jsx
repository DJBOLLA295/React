import React, { useState } from 'react';
import Link from './Link';
import logoImage from '../img/logo.avif';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-verde'>
      <div className="flex justify-around items-center">
        <img src={logoImage} alt="Logo" className="
        w-[50px] 
        xs:w-[60px]  h-auto
        sm:w-[120px] 
        md:w-[70px] 
        lg:w-[80px] 
        xl:w-[90px] 
        2xl:w-[100px]
        3xl:w-[110px]" />
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="h-6 w-6 fill-current text-teal-500" viewBox="0 0 24 24">
      {isOpen ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.829-4.829-4.828a1 1 0 0 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 1 1 1.414 1.414l-4.829 4.828 4.829 4.829z"
        />
      ) : (
        <path
          fillRule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
        />
      )}
    </svg>
          </button>
        </div>
        <div
          className={`flex flex-col md:flex-row space-x-0 md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">Chi siamo</Link>
          <Link to="/contact">Contatti</Link>
          <Link to="/services">Servizi</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;