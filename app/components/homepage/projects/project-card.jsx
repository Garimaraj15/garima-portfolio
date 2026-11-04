"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsGithub, BsArrowUpRight, BsLayersFill } from "react-icons/bs";
import { FaExternalLinkAlt, FaAward, FaCode, FaCheckCircle } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl p-[1px] bg-gradient-to-b from-violet-500/30 via-teal-500/20 to-pink-500/20 shadow-xl hover:shadow-[0_0_35px_rgba(22,242,179,0.25)] transition-all duration-500 flex flex-col h-full group"
    >
      <div className="rounded-2xl bg-[#090d21]/95 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between h-full border border-violet-900/30">
        <div>
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-gray-800/80">
            <div className="flex items-center space-x-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400"></div>
              <span className="text-[11px] font-mono text-gray-400 pl-1">
                {project.category}
              </span>
            </div>

            {project.badge && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-800/60 px-2.5 py-0.5 rounded-full shadow-sm">
                {project.badge}
              </span>
            )}
          </div>

          {/* Project Title & Timeline */}
          <div className="flex flex-col gap-1 mb-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#16f2b3] transition-colors duration-300">
                {project.name}
              </h3>
            </div>
            {project.timeline && (
              <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                <MdOutlineDateRange size={13} className="text-violet-400" />
                <span>{project.timeline}</span>
                <span className="mx-1">•</span>
                <span className="text-cyan-300 font-medium">{project.role}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Key Bullet Highlights if available */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4 p-3 rounded-xl bg-[#050814]/80 border border-gray-800/60">
              <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 block mb-1.5 font-semibold">
                Key Accomplishments
              </span>
              <ul className="space-y-1 text-xs text-gray-300">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <FaCheckCircle size={11} className="text-[#16f2b3] mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tools.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#111633] text-cyan-300 border border-violet-900/50 hover:border-teal-400 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#16f2b3] to-teal-500 text-gray-950 font-bold text-xs hover:shadow-[0_0_15px_#16f2b3] transition-all duration-300"
              >
                <span>Live View</span>
                <FaExternalLinkAlt size={10} />
              </Link>
            )}

            {project.code && (
              <Link
                href={project.code}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#111633] text-gray-200 hover:text-white border border-gray-700 hover:border-violet-500 font-semibold text-xs transition-all duration-300"
              >
                <BsGithub size={13} className="text-pink-400" />
                <span>GitHub</span>
              </Link>
            )}
          </div>

          <span className="text-[11px] font-mono text-gray-500">
            ID: #{project.id}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;