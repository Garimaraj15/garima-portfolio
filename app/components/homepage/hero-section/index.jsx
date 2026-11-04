"use client";

import React, { useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsArrowRightCircle } from "react-icons/bs";
import { MdDownload, MdAutoAwesome } from "react-icons/md";
import { RiContactsFill, RiTerminalBoxFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { FaAward, FaChartBar, FaBrain, FaCode } from "react-icons/fa";
import Canvas3D from "./canvas-3d";

function HeroSection() {
  const [activeTab, setActiveTab] = useState("analyst");

  const tabContents = {
    analyst: {
      filename: "AnalyticsPipeline.py",
      code: `import pandas as pd
import numpy as np

class CivicDataAnalytics:
    def __init__(self, records_count=1000):
        self.records = records_count
        self.accuracy = 0.9221
        self.sla_breach_detector = "Active"

    def generate_kpis(self):
        return {
            "resolution_rate": "98.4%",
            "sla_compliance": "94.7%",
            "severity_scoring": "Engineered"
        }
# Garima Raj: Data Analyst & BI Developer`,
    },
    fullstack: {
      filename: "StocksikhServer.py",
      code: `from fastapi import FastAPI
from google import gemini_api

app = FastAPI(title="StockSikh AI")

@app.get("/api/analysis/{ticker}")
async def get_market_intelligence(ticker: str):
    rsi = calculate_rsi(ticker)
    ma50, ma20 = get_moving_averages(ticker)
    ai_guidance = gemini_api.generate_explanation(ticker, rsi)
    return {"signal": "BUY", "advisor": ai_guidance}
# Powered by FastAPI + Google Gemini API`,
    },
    profile: {
      filename: "GarimaProfile.json",
      code: `{
  "name": "Garima Raj",
  "role": "Data Analyst | Full-Stack & GenAI",
  "institution": "Heritage Institute of Technology",
  "cgpa": 7.97,
  "leetcode_solved": 250,
  "young_turks_percentile": "97.92%",
  "hackathons": ["Winner HackHeritage 3.0", "Top Finalist Odoo 2025"],
  "status": "Available for Opportunities 🚀"
}`,
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center py-8 lg:py-16 overflow-hidden">
      {/* 3D Interactive WebGL Canvas */}
      <Canvas3D />

      <div className="grid grid-cols-1 items-center lg:grid-cols-12 lg:gap-8 gap-y-10 z-10">
        {/* LEFT COLUMN: BIO & ACTIONS */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          {/* Glowing Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs sm:text-sm font-medium text-emerald-400 backdrop-blur-md mb-5 shadow-[0_0_20px_rgba(22,242,179,0.15)] animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            <span>Open to Data Analytics & Full-Stack Opportunities</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-tight text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#16f2b3] via-cyan-400 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
              {personalData.name}
            </span>
          </h1>

          <div className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200">
            <span className="text-pink-500 font-mono">&lt;</span>
            <span className="text-[#16f2b3]">{personalData.designation}</span>
            <span className="text-pink-500 font-mono"> /&gt;</span>
          </div>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
            B.Tech CSE (Data Science) @ Heritage Institute of Technology (7.97 CGPA).
            Specializing in <span className="text-emerald-300 font-semibold">Power BI, Tableau, Advanced Excel & SQL</span> for 
            decision-making analytics alongside <span className="text-cyan-300 font-semibold">React, FastAPI, and GenAI (Gemini / OpenAI)</span> for 
            scalable full-stack platforms.
          </p>

          {/* SOCIAL BADGES & LEETCODE */}
          <div className="my-6 flex flex-wrap items-center gap-3">
            <Link
              href={personalData.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d1224]/80 border border-violet-700/40 text-gray-300 hover:text-white hover:border-[#16f2b3] hover:shadow-[0_0_15px_rgba(22,242,179,0.3)] transition-all duration-300 text-sm backdrop-blur-md"
            >
              <BsGithub size={18} className="text-pink-400" />
              <span>GitHub</span>
            </Link>

            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d1224]/80 border border-violet-700/40 text-gray-300 hover:text-white hover:border-[#38bdf8] hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 text-sm backdrop-blur-md"
            >
              <BsLinkedin size={18} className="text-cyan-400" />
              <span>LinkedIn</span>
            </Link>

            <Link
              href={personalData.leetcode}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d1224]/80 border border-violet-700/40 text-gray-300 hover:text-white hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-300 text-sm backdrop-blur-md"
            >
              <SiLeetcode size={18} className="text-amber-400" />
              <span className="font-semibold text-amber-300">250+ Solved</span>
            </Link>

            <Link
              href="#achievements"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d1224]/80 border border-violet-700/40 text-gray-300 hover:text-white hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300 text-sm backdrop-blur-md"
            >
              <FaAward size={16} className="text-pink-400" />
              <span>97.92%ile Rank</span>
            </Link>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#16f2b3] via-teal-500 to-violet-600 text-gray-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(22,242,179,0.4)] hover:shadow-[0_0_35px_rgba(22,242,179,0.7)] hover:scale-105 transition-all duration-300"
            >
              <span>Explore 3D Projects</span>
              <BsArrowRightCircle size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#0d1224]/90 border border-violet-500/50 hover:border-pink-500 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-violet-950/40 hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-md"
            >
              <span>Download Resume</span>
              <MdDownload size={18} className="text-pink-400" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-all"
            >
              <RiContactsFill size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D INTERACTIVE CODE TERMINAL CARD */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-pink-500/30 shadow-[0_0_40px_rgba(139,92,246,0.25)] hover:shadow-[0_0_60px_rgba(22,242,179,0.35)] transition-all duration-500 transform hover:-translate-y-1">
            <div className="rounded-2xl bg-[#090d1f]/95 backdrop-blur-xl p-4 sm:p-6 overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-800/80">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="ml-2 text-xs font-mono text-gray-400">Garima-OS ~ v2.5</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                  <MdAutoAwesome className="text-cyan-300" />
                  <span>3D Engine Live</span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex space-x-2 mt-3 mb-4 overflow-x-auto pb-1 text-xs font-mono scrollbar-none">
                <button
                  onClick={() => setActiveTab("analyst")}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === "analyst"
                      ? "bg-violet-600/40 text-[#16f2b3] border border-violet-500/50 shadow-sm"
                      : "bg-[#111633] text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <FaChartBar size={11} />
                  <span>Analytics.py</span>
                </button>
                <button
                  onClick={() => setActiveTab("fullstack")}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === "fullstack"
                      ? "bg-violet-600/40 text-[#16f2b3] border border-violet-500/50 shadow-sm"
                      : "bg-[#111633] text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <FaBrain size={11} />
                  <span>StockSikh.py</span>
                </button>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === "profile"
                      ? "bg-violet-600/40 text-[#16f2b3] border border-violet-500/50 shadow-sm"
                      : "bg-[#111633] text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <FaCode size={11} />
                  <span>Profile.json</span>
                </button>
              </div>

              {/* Code Display Area */}
              <div className="bg-[#050814] rounded-xl p-4 border border-gray-800/80 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
                <pre className="text-gray-300">
                  <code>{tabContents[activeTab].code}</code>
                </pre>
              </div>

              {/* Card Footer Features */}
              <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-emerald-400 font-semibold">VOIS Intern @ Active</span>
                </div>
                <Link
                  href="#terminal"
                  className="flex items-center gap-1 text-violet-400 hover:text-cyan-300 transition-colors"
                >
                  <RiTerminalBoxFill size={14} />
                  <span>Launch Interactive CLI</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D FLOATING QUICK STATS METRICS BAR */}
      <div className="mt-14 pt-6 border-t border-violet-900/40 grid grid-cols-2 sm:grid-cols-4 gap-4 z-10">
        <div className="p-4 rounded-2xl bg-[#0d1224]/80 border border-violet-800/30 backdrop-blur-md hover:border-[#16f2b3] hover:scale-105 transition-all duration-300 group shadow-lg">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#16f2b3] group-hover:drop-shadow-[0_0_10px_#16f2b3]">
            250+
          </div>
          <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
            DSA Problems Solved
          </div>
          <div className="text-[11px] text-gray-500">LeetCode Problem Solving</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0d1224]/80 border border-violet-800/30 backdrop-blur-md hover:border-pink-500 hover:scale-105 transition-all duration-300 group shadow-lg">
          <div className="text-2xl sm:text-3xl font-extrabold text-pink-400 group-hover:drop-shadow-[0_0_10px_#ec4899]">
            97.92%
          </div>
          <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
            National Aptitude Rank
          </div>
          <div className="text-[11px] text-gray-500">Naukri Campus Young Turks</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0d1224]/80 border border-violet-800/30 backdrop-blur-md hover:border-cyan-400 hover:scale-105 transition-all duration-300 group shadow-lg">
          <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 group-hover:drop-shadow-[0_0_10px_#38bdf8]">
            1,000+
          </div>
          <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
            Records Processed
          </div>
          <div className="text-[11px] text-gray-500">ETL Pipelines & Analytics</div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0d1224]/80 border border-violet-800/30 backdrop-blur-md hover:border-violet-400 hover:scale-105 transition-all duration-300 group shadow-lg">
          <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 group-hover:drop-shadow-[0_0_10px_#a855f7]">
            1st Place
          </div>
          <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
            HackHeritage 3.0 Winner
          </div>
          <div className="text-[11px] text-gray-500">24-hr Full-Stack Hackathon</div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;