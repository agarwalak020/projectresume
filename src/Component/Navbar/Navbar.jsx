import React, { useState } from 'react';
import logo from './logo.png';
import './Navbar.css';
import '../Home/Home.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
    <nav className="  py-5" id="navbg" >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="">
                <img src={logo} alt='logo' className=' w-44 h-32'/>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* <Link to="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Resume Score</Link> */}
              <Link to="/templates" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Templates</Link>
              <Link to="/about" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>
              <Link to="/contact" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Contact Us</Link>
              <Link to="/login" className="text-white px-2 py-2 text-lg font-semibold  rounded-xl " id='home_fourth'>Log in</Link>
              <Link to="/signup" className="text-white hover:text-yellow-500 px-2 py-2 text-lg font-semibold border-2 rounded-xl">Sign up</Link>
            </div>
             <div className="flex sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div> 
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Resume</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">CV</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Cover Letter</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Advice</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Login</a>
              <a href="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
