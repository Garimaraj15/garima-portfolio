"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin, BsHeartFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="relative border-t bg-[#070b19] border-[#252a48] text-white mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-[#16f2b3] to-violet-400 bg-clip-text text-transparent"
            >
              Garima Raj
            </Link>
            <p className="text-xs text-gray-400 mt-1 max-w-sm">
              Data Analyst | Business Intelligence & Full-Stack GenAI Developer
            </p>
          </div>

          {/* Quick Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href={personalData.github}
              target="_blank"
              className="p-2.5 rounded-xl bg-[#111633] text-gray-400 hover:text-white hover:border-[#16f2b3] border border-gray-800 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <BsGithub size={18} />
            </Link>

            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="p-2.5 rounded-xl bg-[#111633] text-gray-400 hover:text-cyan-400 hover:border-cyan-400 border border-gray-800 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={18} />
            </Link>

            <Link
              href={personalData.leetcode}
              target="_blank"
              className="p-2.5 rounded-xl bg-[#111633] text-gray-400 hover:text-amber-400 hover:border-amber-400 border border-gray-800 transition-all hover:scale-110"
              aria-label="LeetCode"
            >
              <SiLeetcode size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>
            © {new Date().getFullYear()} Garima Raj. Built with Next.js, React & 3D WebGL Canvas.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <BsHeartFill className="text-pink-500" size={11} />
            <span>for Data & Innovation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;