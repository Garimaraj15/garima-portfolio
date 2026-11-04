"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaLaptopCode, FaDatabase, FaGraduationCap, FaAward } from "react-icons/fa";
import { MdCheckCircle, MdOutlineSchool } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";

function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-28 relative">
      {/* Section Header */}
      <div className="flex justify-center my-6 lg:mb-12">
        <div className="flex items-center gap-3">
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-gradient-to-r from-violet-900/80 to-[#1a1443] border border-violet-500/40 text-white py-2 px-6 text-lg sm:text-2xl font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            ABOUT ME
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT / PROFILE CARD WITH 3D GLOW */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative group">
            {/* Outer animated 3D gradient ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#16f2b3] via-violet-600 to-pink-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative p-6 rounded-2xl bg-[#090d21] border border-violet-500/40 shadow-2xl flex flex-col items-center text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#16f2b3]/60 mb-5 shadow-inner">
                <Image
                  src={personalData.profile}
                  alt="Garima Raj"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Garima Raj</span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#16f2b3] shadow-[0_0_8px_#16f2b3]"></span>
              </h3>
              
              <p className="text-xs text-cyan-300 font-mono mt-1">
                Data Analyst & Software Developer
              </p>

              <div className="w-full mt-4 pt-4 border-t border-gray-800 flex flex-col gap-2 text-left text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <MdOutlineSchool className="text-violet-400" size={16} />
                  <span>Heritage Institute of Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-emerald-400" size={16} />
                  <span>B.Tech CSE (Data Science) • 7.97 CGPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaAward className="text-amber-400" size={16} />
                  <span>VOIS Data Analytics Intern</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT / DUAL SPECIALIZATION & DETAILED BIO */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1224]/80 border border-violet-800/40 backdrop-blur-xl shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-gray-800">
              <p className="font-semibold text-[#16f2b3] text-lg sm:text-xl flex items-center gap-2">
                <span>Problem Solver & Data Storyteller</span>
              </p>
              <span className="text-xs font-mono text-gray-400 bg-violet-950/60 px-3 py-1 rounded-full border border-violet-700/40">
                Kolkata, India 🇮🇳
              </span>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
              I am a dedicated Computer Science & Engineering (Data Science) undergraduate at 
              <strong className="text-white"> Heritage Institute of Technology, Kolkata</strong>.
              I bridge the gap between <strong className="text-emerald-300">Data Analytics & Business Intelligence</strong> and 
              <strong className="text-cyan-300"> Full-Stack Software Engineering with Generative AI</strong>.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-3">
              Whether transforming 1,000+ unorganized civic records into actionable Power BI & Tableau dashboards with predictive SLA models, 
              or engineering real-time full-stack platforms with <strong className="text-pink-300">FastAPI, React, and Google Gemini</strong>, 
              I focus on delivering data-backed, user-centric, and high-impact technology solutions.
            </p>

            {/* DUAL PILLARS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* PILLAR 1: DATA ANALYTICS & BI */}
              <div className="p-4 rounded-xl bg-[#080c1d] border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 group">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                  <FaChartLine size={16} />
                  <span>Data Analytics & BI Focus</span>
                </div>
                <ul className="text-xs text-gray-300 space-y-1.5 font-normal">
                  <li className="flex items-center gap-1.5">
                    <MdCheckCircle className="text-emerald-400 flex-shrink-0" size={14} />
                    <span>Power BI, Tableau, Looker Studio dashboards</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MdCheckCircle className="text-emerald-400 flex-shrink-0" size={14} />
                    <span>Advanced Excel: VBA, PowerQuery, XLOOKUP</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MdCheckCircle className="text-emerald-400 flex-shrink-0" size={14} />
                    <span>ETL pipelines, EDA & SLA predictive modeling</span>
                  </li>
                </ul>
              </div>

              {/* PILLAR 2: FULL STACK & GENAI */}
              <div className="p-4 rounded-xl bg-[#080c1d] border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-2">
                  <FaLaptopCode size={16} />
                  <span>Full-Stack & GenAI Focus</span>
                </div>
                <ul className="text-xs text-gray-300 space-y-1.5 font-normal">
                  <li className="flex items-center gap-1.5">
                    <MdCheckCircle className="text-cyan-400 flex-shrink-0" size={14} />
                    <span>React.js, FastAPI, Flask & REST APIs</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MdCheckCircle className="text-cyan-400 flex-shrink-0" size={14} />
                    <span>Google Gemini & OpenAI API integration</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MdCheckCircle className="text-cyan-400 flex-shrink-0" size={14} />
                    <span>PostgreSQL, MySQL & Selenium testing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="mt-6 pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4 text-gray-400 font-mono">
                <span>DSA: 250+ LeetCode</span>
                <span>•</span>
                <span>Aptitude: 97.92%ile</span>
              </div>

              <Link
                href="#experience"
                className="inline-flex items-center gap-1 text-[#16f2b3] hover:underline font-semibold"
              >
                <span>View Internship & Experience</span>
                <BsArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;