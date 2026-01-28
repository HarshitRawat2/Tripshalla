// BaseHeader.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function BaseHeader({ links }) {
  const navLinks = links || [
    { key: "home", label: "Home", to: "/" },
    { key: "about", label: "About", to: "/aboutus" },
    { key: "destination", label: "Destination", to: "/destination" },
    { key: "tour", label: "Tour", to: "/tour" },
    { key: "gallery", label: "Gallery", to: "/gallery" },
    { key: "contact", label: "Contact", to: "/contact" },
  ];

  const logoSrc = "/src/assets/Logo3.png";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 relative">
        
        {/* BIG LOGO */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img
              src={logoSrc}
              alt="Travlla"
              className="h-28 md:h-40 w-auto object-contain drop-shadow-2xl"
            />
          </NavLink>
        </div>

        {/* LINKS */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          {navLinks.map((l) => (
            <li key={l.key}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `transition-all duration-200 ${
                    isActive ? "text-amber-400" : "text-white hover:text-amber-400"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
           <button className="text-white hover:text-amber-400 transition">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
           </button>
        </div>
      </div>
    </nav>
  );
}