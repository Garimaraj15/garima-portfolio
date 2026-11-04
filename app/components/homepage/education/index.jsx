"use client";

import React from "react";
import { educations } from "@/utils/data/educations";
import { FaGraduationCap, FaUniversity, FaAward } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";

function Education() {
  return (
    <div id="education" className="relative z-40 my-16 lg:my-28">
      {/* Background glow */}
      <div className="w-[300px] h-[300px] bg-pink-600/10 rounded-full absolute bottom-10 left-10 filter blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex justify-center my-6 lg:mb-12">
        <div className="flex items-center gap-3">
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-gradient-to-r from-violet-900/80 to-[#1a1443] border border-violet-500/40 text-white py-2 px-6 text-lg sm:text-2xl font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            ACADEMIC BACKGROUND
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {educations.map((item, index) => (
          <div
            key={item.id}
            className="relative rounded-2xl p-[1px] bg-gradient-to-b from-violet-500/30 via-teal-500/20 to-pink-500/20 shadow-lg hover:shadow-[0_0_25px_rgba(22,242,179,0.25)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="rounded-2xl bg-[#090d21]/95 backdrop-blur-xl p-6 flex flex-col justify-between h-full border border-violet-900/30">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
                  <span className="p-2 rounded-lg bg-violet-950/80 text-[#16f2b3]">
                    <FaGraduationCap size={18} />
                  </span>
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#16f2b3] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-gray-300 mt-2 flex items-center gap-1.5">
                  <FaUniversity className="text-violet-400 flex-shrink-0" />
                  <span>{item.institution}</span>
                </p>

                {item.highlights && (
                  <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
                    {item.highlights}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono">Performance</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/50 shadow-sm">
                  {item.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;