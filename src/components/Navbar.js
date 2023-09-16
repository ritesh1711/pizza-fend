import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-black p-4 font-serif text-3xl fixed w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-extrabold font-serif text-5xl sm:text-6xl">
            FlavorWagon Express
          </Link>
          <nav className="flex space-x-4">
            <Link to="/home" className="text-white hover:text-gray-300 text-4xl sm:text-5xl">
              HOME
            </Link>
            <Link to="/menu" className="text-white hover:text-gray-300 text-4xl sm:text-5xl">
              MENU
            </Link>
            <Link to="/cart" className="text-white hover:text-gray-300 text-4xl sm:text-5xl">
              CART
            </Link>
            <Link to="/login" className="text-white hover:text-gray-300 text-4xl sm:text-5xl">
              LOGIN
            </Link>
            <Link to="/register" className="text-white hover:text-gray-300 text-4xl sm:text-5xl">
              REGISTER
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
