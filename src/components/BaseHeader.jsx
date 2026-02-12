import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import logosrc from '../assets/TRIPSHALA.png'
export default function BaseHeader({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = links || [
    { key: "home", label: "Home", to: "/" },
    {
      key: "packages",
      label: "PACKAGES",
      hasDropdown: true,
      subLinks: [
        { label: "Camps", to: "/packages/camp" },
        { label: "Treks", to: "/packages/trek" },
        { label: "Rafting", to: "/packages/rafting" },
      ],
    },
    { key: "gallery", label: "Gallery", to: "/gallery" },
    { key: "about", label: "About", to: "/aboutus" },
    { key: "contact", label: "Contact", to: "/contact" },
  ];

  // Updated logo path
 

  return (
    /* Changed from absolute to sticky with bg-white and shadow */
    <nav className="sticky top-0 left-0 right-0 z-[100] px-6 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 md:h-24 relative">
        
        {/* LOGO - Adjusted size for better fit on white bg */}
        <div className="flex-shrink-0 relative z-[110]">
          <NavLink to="/">
            <img
              src={logosrc}
              alt="Tripshala"
              /* Adjusted height from 40 to 24/28 for a cleaner look */
              className="h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105"
            />
          </NavLink>
        </div>

        {/* DESKTOP LINKS - Changed text-white to text-slate-800 */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-black uppercase tracking-widest">
          {navLinks.map((l) => (
            <li 
              key={l.key}
              className="relative group py-4"
              onMouseEnter={() => l.hasDropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => l.hasDropdown && setIsDropdownOpen(false)}
            >
              {l.hasDropdown ? (
                /* Changed text to dark charcoal and hover to brand orange */
                <div className={`flex items-center gap-1 cursor-pointer transition-all ${isDropdownOpen ? "text-[#F7A325]" : "text-[#1A1D1F] hover:text-[#F7A325]"}`}>
                  {l.label}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </div>
              ) : (
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `transition-all duration-200 ${
                      isActive ? "text-[#F7A325]" : "text-[#1A1D1F] hover:text-[#F7A325]"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              )}

              {/* Dropdown Menu (Desktop) */}
              {l.hasDropdown && isDropdownOpen && (
                <div 
                  className="absolute top-[90%] left-0 w-52 z-[120]"
                  onMouseEnter={() => setIsDropdownOpen(true)} 
                >
                  <div className="h-4 w-full bg-transparent" />
                  {/* Changed dropdown to match the white theme or keep charcoal for contrast */}
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 py-2 overflow-hidden">
                    {l.subLinks.map((sub) => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        className="block px-6 py-3 text-[11px] font-black tracking-widest text-[#1A1D1F] hover:bg-[#F7A325] hover:text-white transition-all duration-200 uppercase"
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION - Mobile Menu Button color adjusted */}
        <div className="flex items-center gap-4 relative z-[110]">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-[#1A1D1F] hover:text-[#F7A325] transition p-2 focus:outline-none"
          >
            <FiMenu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white text-slate-900 z-[150] shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-10">
          <div className="flex justify-between items-center mb-12">
            <span className="font-black text-[#00796B] italic text-2xl tracking-tighter uppercase">tripshalla</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-900 p-2">
              <FiX className="w-8 h-8" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-xl font-black uppercase tracking-widest">
            {navLinks.map((l) => (
              <li key={l.key} className="border-b border-slate-50 pb-4">
                {l.hasDropdown ? (
                  <div className="flex flex-col gap-4">
                    <span className="text-slate-400 text-xs tracking-[0.2em]">{l.label}</span>
                    <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#F7A325]">
                      {l.subLinks.map((sub) => (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg font-black text-slate-900 hover:text-[#F7A325]"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={l.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block transition-all ${isActive ? "text-[#F7A325] translate-x-2" : "text-slate-900 hover:text-[#F7A325]"}`
                    }
                  >
                    {l.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}