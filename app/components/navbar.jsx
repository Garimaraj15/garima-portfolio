"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaAward } from "react-icons/fa";
import { RiTerminalBoxFill } from "react-icons/ri";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT", href: "/#about" },
    { label: "EXPERIENCE", href: "/#experience" },
    { label: "SKILLS", href: "/#skills" },
    { label: "PROJECTS", href: "/#projects" },
    { label: "HONORS", href: "/#achievements" },
    { label: "TERMINAL", href: "/#terminal" },
    { label: "EDUCATION", href: "/#education" },
    { label: "CONTACT", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#070b19]/80 backdrop-blur-xl border-b border-violet-900/30 transition-all">
      <div className="flex items-center justify-between py-4 max-w-7xl mx-auto px-4 sm:px-8">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#16f2b3] via-cyan-400 to-violet-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Garima Raj
          </Link>
          <span className="hidden sm:inline-block text-[10px] font-mono font-bold bg-[#16f2b3]/10 text-[#16f2b3] border border-[#16f2b3]/30 px-2 py-0.5 rounded-full">
            3D Portfolio
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden lg:flex items-center space-x-1 font-medium text-xs tracking-wider">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="px-3 py-2 text-gray-300 hover:text-[#16f2b3] transition-colors rounded-lg hover:bg-violet-950/40"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#111633] text-gray-300 hover:text-white border border-gray-800 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="lg:hidden bg-[#090d21]/95 border-b border-violet-900/50 backdrop-blur-2xl px-6 py-4 transition-all">
          <ul className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-lg text-gray-300 hover:text-[#16f2b3] hover:bg-violet-950/60 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;