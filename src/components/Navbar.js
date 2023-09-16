// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-black p-4 font-serif text-3xl h-48 fixed">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-extrabold font-serif text-7xl">
            FlavorWagon Express
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/home" className="text-white hover:text-gray-300 pr-3 text-4xl">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-white hover:text-gray-300 pr-3 text-4xl">
                  MENU
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-white hover:text-gray-300 pr-3 text-4xl">
                  CART
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:text-gray-300 pr-3 text-4xl">
                  LOGIN
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white hover:text-gray-300 pr-3 text-4xl">
                  REGISTER
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
