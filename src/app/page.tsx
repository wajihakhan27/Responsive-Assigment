"use client";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation Menu */}

      <nav className="bg-slate-700 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Responsive  Website</h1>
          {/* Burger Menu for Small Devices */}
          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
          {/* Horizontal Menu for Larger Devices */}
          <ul
            className={`${isMenuOpen ? "block" : "hidden"
              } md:flex space-y-4 md:space-y-0 md:space-x-6`}
          >
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Responsive Layout */}

      <div className=" w-full ">
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {/* First Div: Responsive Width */}
          <div className="bg-cyan-300 text-orange-800  h-40 md:h-80 w-full md:w-full lg:w-1/2 text-center font-bold">
            Wajiha Salman
          </div>
          {/* Second Row on Medium: Two Divs */}
          <div className="bg-pink-200 text-center font-bold text-orange-800  h-40 md:h-80 lg:flex-1 md:w-1/2">
            Wajiha Salman
          </div>
          <div className="bg-yellow-200   text-orange-800  text-center font-bold h-40 md:h-80 lg:flex-1 md:w-1/2">
            Wajiha Salman
          </div>
        </div>
      </div>

    </div>
  );
}
