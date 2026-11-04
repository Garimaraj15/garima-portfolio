"use client";

import React, { useState } from "react";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import { FaLayerGroup, FaChartPie, FaLaptopCode, FaBrain } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", count: projectsData.length, icon: <FaLayerGroup /> },
    {
      name: "Data Analytics & BI",
      count: projectsData.filter((p) => p.category === "Data Analytics & BI").length,
      icon: <FaChartPie />,
    },
    {
      name: "Full-Stack & GenAI",
      count: projectsData.filter((p) => p.category === "Full-Stack & GenAI").length,
      icon: <FaLaptopCode />,
    },
    {
      name: "Machine Learning",
      count: projectsData.filter((p) => p.category === "Machine Learning").length,
      icon: <FaBrain />,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div id="projects" className="relative z-40 my-16 lg:my-28">
      {/* Background ambient lighting */}
      <div className="w-[350px] h-[350px] bg-teal-500/10 rounded-full absolute -top-10 left-1/4 filter blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex justify-center my-6 lg:mb-10">
        <div className="flex items-center gap-3">
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-gradient-to-r from-violet-900/80 to-[#1a1443] border border-violet-500/40 text-white py-2 px-6 text-lg sm:text-2xl font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            FEATURED 3D PROJECTS
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></span>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-8">
        Interactive BI analytics dashboards, GenAI market intelligence platforms, and high-performance full-stack web applications.
      </p>

      {/* FILTER TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md ${
              selectedCategory === cat.name
                ? "bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-600 text-gray-950 font-bold shadow-[0_0_20px_rgba(22,242,179,0.4)] scale-105"
                : "bg-[#0d1224]/80 text-gray-400 border border-violet-900/40 hover:text-white hover:border-teal-500"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat.name
                  ? "bg-gray-950 text-white font-bold"
                  : "bg-[#111633] text-gray-400"
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* PROJECTS RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;