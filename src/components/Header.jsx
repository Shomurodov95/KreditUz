// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/kredit1.jpg"
            alt="Kredit Uz logo"
            className="w-[160px] h-[55px] transition-transform duration-300" 
          />
        </Link>

        
        <nav className="flex items-center gap-3 sm:gap-5">
          <Link
            to="/calculator"
            className={`relative 
              text-xs sm:text-sm md:text-base
              font-semibold transition-colors duration-300 ${
                location.pathname === "/calculator"
                  ? "text-blue-700"
                  : "text-black hover:text-blue-700"
              }`}
          >
            Kalkulyator
            {location.pathname === "/calculator" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 rounded-full"></span>
            )}
          </Link>

          <a
            href="https://t.me/shakh107"
            className="text-xs sm:text-sm md:text-base hover:text-blue-700 text-black"
          >
            Bog‘lanish
          </a>
        </nav>
      </div>
    </header>
  );
}
