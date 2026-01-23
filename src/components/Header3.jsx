import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

const Header3 = () => {
  return (
    <nav className="w-full bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <NavLink to="/" className="flex items-center gap-2">
          {/* Replace with your actual Travlla logo image */}
          <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">LOGO</span>
          </div>
          <span className="text-2xl font-bold text-orange-500 tracking-tight italic">
            travlla
          </span>
        </NavLink>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex items-center space-x-8 text-slate-700 font-medium text-sm uppercase tracking-wide">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "text-emerald-700" : "hover:text-emerald-600 transition-colors"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" className={({isActive}) => isActive ? "text-emerald-700" : "hover:text-emerald-600 transition-colors"}>
            About
          </NavLink>
        </li>
        <li className="relative group flex items-center gap-1 cursor-pointer hover:text-emerald-600 transition-colors">
          Packages <FiChevronDown />
        </li>
        <li>
          <NavLink to="/destination" className="hover:text-emerald-600 transition-colors">
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/tour" className="hover:text-emerald-600 transition-colors">
            Tour
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-emerald-600 transition-colors">
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Right Side: Currency & Login */}
      <div className="flex items-center space-x-6 text-slate-700 text-sm font-medium">
        <div className="flex items-center gap-2 cursor-pointer border-r border-slate-200 pr-6">
          <img 
            src="https://flagcdn.com/in.svg" 
            alt="India Flag" 
            className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
          />
          <span>INR ₹</span>
          <FiChevronDown className="text-slate-400" />
        </div>
        
        <NavLink to="/login" className="hover:text-emerald-600 transition-colors">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Header3;