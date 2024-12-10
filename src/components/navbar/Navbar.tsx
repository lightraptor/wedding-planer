"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logobg from "../../assets/wedding-logo.png";
import { ROUTES } from "../../defines";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-[#515252]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-9 pb-3">
        <div className="flex items-center justify-between h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-[70%] md:w-[30%]">
            <Link to="/" className="flex flex-col items-start">
              <img src={Logobg} alt="" className="w-full object-cover" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 font-sans font-light text-base mb-4">
            {Object.values(ROUTES).map((route) => {
              return (
                <Link
                  key={route.label}
                  to={route.path}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {route.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                to="/service"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                SERVICE
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
