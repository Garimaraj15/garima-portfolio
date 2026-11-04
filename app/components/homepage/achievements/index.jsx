"use client";

import React, { useState } from "react";
import { achievementsData } from "@/utils/data/achievements-data";
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaAward, FaCheckCircle } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

function AchievementsSection() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Hackathon", "Certification", "Aptitude & Problem Solving"];

  const filteredItems =
    filter === "All"
      ? achievementsData
      : achievementsData.filter(
          (item) => item.category.toLowerCase().includes(filter.toLowerCase()) || filter === "All"
        );

  const getCategoryIcon = (category) => {
    const cat = category.toLowerCase();
    if (cat.includes("hackathon")) return <FaTrophy className="text-amber-400" />;
    if (cat.includes("certification")) return <FaCertificate className="text-emerald-400" />;
    if (cat.includes("aptitude") || cat.includes("coding")) return <FaMedal className="text-cyan-400" />;
    return <FaStar className="text-pink-400" />;
  };

  return (
    <div id="achievements" className="relative z-40 my-16 lg:my-28">
      {/* Glow */}
      <div className="w-[350px] h-[350px] bg-amber-500/10 rounded-full absolute -top-10 right-1/4 filter blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex justify-center my-6 lg:mb-10">
        <div className="flex items-center gap-3">
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-gradient-to-r from-violet-900/80 to-[#1a1443] border border-violet-500/40 text-white py-2 px-6 text-lg sm:text-2xl font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            HONORS & CERTIFICATIONS
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></span>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-8">
        Hackathon championships, national competitive exam rankings, and verified industry credentials.
      </p>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md ${
              filter === cat
                ? "bg-gradient-to-r from-amber-500 to-pink-500 text-gray-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-105"
                : "bg-[#0d1224]/80 text-gray-400 border border-violet-900/40 hover:text-white hover:border-amber-500/50"
            }`}
          >
            {cat === "All" ? "All Honors" : cat}
          </button>
        ))}
      </div>

      {/* ACHIEVEMENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl p-[1px] bg-gradient-to-b from-amber-500/20 via-violet-500/20 to-pink-500/20 shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="rounded-2xl bg-[#090d21]/95 backdrop-blur-xl p-6 flex flex-col justify-between h-full border border-violet-900/30">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-[#111633] text-lg">
                      {getCategoryIcon(item.category)}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      {item.category}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/70 border border-amber-800/50 px-2.5 py-0.5 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-cyan-300 mt-1">
                  {item.issuer}
                </p>

                <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Highlights Pill Tags */}
              <div className="mt-4 pt-3 border-t border-gray-800/80 flex flex-wrap items-center gap-1.5">
                {item.highlights?.map((hl, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-gray-300 bg-[#111633] px-2 py-0.5 rounded border border-gray-800"
                  >
                    <FaCheckCircle size={9} className="text-[#16f2b3]" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsSection;
