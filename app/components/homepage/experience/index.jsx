"use client";

import React from "react";
import { experiences } from "@/utils/data/experience";
import { BsBriefcaseFill, BsCalendarCheck, BsGeoAltFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";

function Experience() {
  return (
    <div id="experience" className="relative z-40 my-16 lg:my-28">
      {/* Background glow */}
      <div className="w-[300px] h-[300px] bg-violet-600/10 rounded-full absolute top-10 right-10 filter blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex justify-center my-6 lg:mb-12">
        <div className="flex items-center gap-3">
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-gradient-to-r from-violet-900/80 to-[#1a1443] border border-violet-500/40 text-white py-2 px-6 text-lg sm:text-2xl font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            EXPERIENCE & INTERNSHIPS
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></span>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-10">
        Industry internships and high-stakes hackathons solving real-world data and software challenges.
      </p>

      {/* TIMELINE LIST */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {experiences.map((item, index) => (
          <div
            key={item.id}
            className="relative rounded-2xl p-[1px] bg-gradient-to-r from-violet-500/30 via-teal-500/20 to-pink-500/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-300 group"
          >
            <div className="rounded-2xl bg-[#090d21]/90 backdrop-blur-xl p-6 sm:p-8 border border-violet-900/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-gray-800 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-violet-950/80 border border-violet-700/50 text-[#16f2b3]">
                      <BsBriefcaseFill size={16} />
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#16f2b3] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-cyan-300 mt-1 pl-9">
                    {item.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:self-start">
                  {item.type && (
                    <span className="text-[11px] font-semibold text-violet-300 bg-violet-950/80 px-2.5 py-0.5 rounded-full border border-violet-800/40">
                      {item.type}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
                    <BsCalendarCheck size={12} />
                    <span>{item.duration}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              {item.description && Array.isArray(item.description) && (
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-gray-300">
                  {item.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle size={13} className="text-[#16f2b3] mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills used */}
              {item.skills && (
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-[11px] font-mono text-gray-400 mr-1">Skills:</span>
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#111633] text-gray-300 border border-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;