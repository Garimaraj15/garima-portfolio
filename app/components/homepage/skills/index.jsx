"use client";

import React, { useState } from "react";
import { skillsData, skillCategories } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaChartBar, FaBrain, FaLayerGroup, FaServer, FaCheck } from "react-icons/fa";

function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryIcons = [
    <FaChartBar key="bi" className="text-emerald-400" />,
    <FaBrain key="genai" className="text-cyan-400" />,
    <FaLayerGroup key="fullstack" className="text-violet-400" />,
    <FaServer key="db" className="text-pink-400" />
  ];

  return (
    <div id="skills" className="relative z-40 my-16 lg:my-28">
      {/* Glow Backdrop */}
      <div className="w-[300px] h-[300px] bg-violet-600/10 rounded-full absolute top-10 left-1/2 -translate-x-1/2 filter blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex justify-center my-6 lg:mb-12">
        <div className="flex items-center gap-3">
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-gradient-to-r from-violet-900/80 to-[#1a1443] border border-violet-500/40 text-white py-2 px-6 text-lg sm:text-2xl font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            SKILLS & TECHNOLOGIES
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></span>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-8">
        Proven expertise across Business Intelligence, Machine Learning & GenAI, Full-Stack Architecture, and Relational Data Systems.
      </p>

      {/* CATEGORY SWITCHER TABS */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {skillCategories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategoryIndex(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md ${
              activeCategoryIndex === idx
                ? "bg-gradient-to-r from-violet-600 to-teal-500 text-white shadow-[0_0_20px_rgba(22,242,179,0.3)] scale-105"
                : "bg-[#0d1224]/80 text-gray-400 border border-violet-900/40 hover:text-white hover:border-violet-600"
            }`}
          >
            {categoryIcons[idx % categoryIcons.length]}
            <span>{cat.category}</span>
          </button>
        ))}
      </div>

      {/* ACTIVE CATEGORY SKILLS GRID */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#090d21]/90 border border-violet-800/40 shadow-2xl backdrop-blur-xl mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-2">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>{skillCategories[activeCategoryIndex].category}</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {skillCategories[activeCategoryIndex].description}
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
            {skillCategories[activeCategoryIndex].skills.length} Key Competencies
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillCategories[activeCategoryIndex].skills.map((skillItem, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#0d1224] border border-gray-800/80 hover:border-[#16f2b3] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(22,242,179,0.2)] group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-gray-200 group-hover:text-white">
                  {skillItem.name}
                </span>
                <span className="text-[10px] font-mono font-medium text-[#16f2b3] bg-[#16f2b3]/10 px-2 py-0.5 rounded">
                  {skillItem.level}
                </span>
              </div>
              {skillItem.desc && (
                <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                  {skillItem.desc}
                </p>
              )}
              <div className="mt-3 flex items-center gap-1 text-[11px] text-gray-500">
                <FaCheck size={10} className="text-emerald-400" />
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTINUOUS 3D MARQUEE STRIP */}
      <div className="w-full pt-4">
        <div className="flex justify-center -translate-y-[1px] mb-4">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>
        </div>

        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const imgAsset = skillsImage(skill);
            return (
              <div
                className="w-32 sm:w-36 h-28 flex flex-col items-center justify-center m-2 sm:m-3 rounded-xl p-[1px] bg-gradient-to-b from-violet-700/30 to-teal-500/20 hover:scale-105 transition-all duration-300 cursor-pointer group"
                key={id}
              >
                <div className="h-full w-full rounded-xl bg-[#090d21] border border-[#1f223c] group-hover:border-violet-500 flex flex-col items-center justify-center gap-2 p-3">
                  <div className="h-9 w-9 relative flex items-center justify-center">
                    {imgAsset ? (
                      <Image
                        src={imgAsset.src || imgAsset}
                        alt={skill}
                        width={36}
                        height={36}
                        className="object-contain filter group-hover:drop-shadow-[0_0_8px_#16f2b3]"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-violet-900/60 flex items-center justify-center text-xs font-bold text-white">
                        {skill.slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-300 group-hover:text-white text-xs font-semibold text-center truncate w-full">
                    {skill}
                  </p>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;