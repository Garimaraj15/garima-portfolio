"use client";

import React, { useState, useRef, useEffect } from "react";
import { personalData } from "@/utils/data/personal-data";
import { RiTerminalBoxFill } from "react-icons/ri";
import { FaPlay, FaTrashAlt, FaCode } from "react-icons/fa";

function TerminalSection() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ Garima-OS v2.5 Interactive Terminal Initialized. Type 'help' or click quick commands below.",
    },
  ]);

  const terminalEndRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory = [...history, { type: "user", text: `$ ${cmd}` }];

    switch (cleanCmd) {
      case "help":
        newHistory.push({
          type: "response",
          text: `Available Commands:
• 'about'          - Background & dual specialization
• 'skills'         - Key technical skills & tools
• 'projects'       - List top projects & live links
• 'experience'     - VOIS internship & Walmart details
• 'honors'         - Hackathon wins & 97.92%ile rank
• 'stats'          - Quick metrics (LeetCode, CGPA)
• 'contact'        - Email, phone, & profile links
• 'clear'          - Clear the terminal screen`,
        });
        break;

      case "about":
        newHistory.push({
          type: "response",
          text: `Garima Raj: B.Tech CSE (Data Science) @ Heritage Institute of Technology (7.97 CGPA).
Specialization in Data Analytics & BI (Power BI, Tableau, Advanced Excel, SQL) and Full-Stack Engineering with GenAI (FastAPI, React, Google Gemini, OpenAI).`,
        });
        break;

      case "skills":
        newHistory.push({
          type: "response",
          text: `[BI & Analytics]: Power BI, Tableau, Advanced Excel (VBA/Macros/PowerQuery), SQL
[GenAI & ML]: Google Gemini API, OpenAI API, Scikit-Learn, Pandas, NumPy, TensorFlow
[Full Stack]: React.js, FastAPI, Flask, PostgreSQL, MySQL, Tailwind CSS, Selenium
[Core CS]: 250+ LeetCode DSA Problems, DBMS, OOP, Operating Systems`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "response",
          text: `1. Smart Civic Issue Analytics Dashboard (Power BI, Python, SQL, Streamlit)
2. StockSikh AI Market Learning Platform (React, FastAPI, Gemini API, Yahoo Finance)
3. Military Inventory Tracker (Advanced Excel, VBA, Gemini API)
4. Women Safety SOS Platform - Her Voice (React, Flask, OpenAI, Selenium) [HackHeritage Winner 🏆]
5. RetailSphere Smart Retail Assistant (React, Flask, MySQL)
6. Popular Tweets Sentiment Analysis Dashboard (Tableau, Excel, Python)
7. Online Shopping Intention Prediction Model (MLP Neural Net, 92.21% Acc)`,
        });
        break;

      case "experience":
        newHistory.push({
          type: "response",
          text: `• VOIS & Vodafone Idea Foundation — Data Analytics Intern (Aug 2026 – Present)
• Walmart USA — Software Engineering Virtual Intern (Jan 2025)
• HackHeritage 3.0 — 1st Place Champion / Hackathon Winner (2025)`,
        });
        break;

      case "honors":
      case "achievements":
        newHistory.push({
          type: "response",
          text: `🏆 1st Place Winner — HackHeritage 3.0 Hackathon
🎯 97.92 Percentile — Naukri Campus Young Turks 2025
🚀 Top Finalist Team — Odoo Hackathon 2025 (~19k registrations)
💡 250+ DSA Problems Solved on LeetCode
🌟 Zonal Winner — Logitech & Aspire For Her (Women Who Master)
🛍️ Shortlisted — Flipkart GRiD 7.0 & Flipkart Runway Season 5 OA`,
        });
        break;

      case "stats":
        newHistory.push({
          type: "response",
          text: `📊 LeetCode Solved: 250+
🎯 Young Turks Aptitude: 97.92%ile
📈 Datasets Analyzed: 1,000+ Records
🎓 CGPA: 7.97 / 10.0 (Data Science)
🧠 ML Accuracy: 92.21% (Online Shopping Prediction)`,
        });
        break;

      case "contact":
        newHistory.push({
          type: "response",
          text: `📧 Email: ${personalData.email}
📱 Phone: ${personalData.phone}
📍 Location: ${personalData.address}
🌐 GitHub: ${personalData.github}
💼 LinkedIn: ${personalData.linkedIn}
💡 LeetCode: ${personalData.leetcode}`,
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `Command '${cmd}' not recognized. Type 'help' to inspect supported commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const quickCommands = ["help", "about", "skills", "projects", "experience", "honors", "stats", "contact"];

  return (
    <div id="terminal" className="relative z-40 my-16 lg:my-28">
      {/* Section Header */}
      <div className="flex justify-center my-6 lg:mb-10">
        <div className="flex items-center gap-3">
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-gradient-to-r from-violet-900/80 to-[#1a1443] border border-violet-500/40 text-white py-2 px-6 text-lg sm:text-2xl font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            INTERACTIVE CLI TERMINAL
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></span>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-8">
        Run live interactive commands to inspect analytics models, project schemas, and verified credentials.
      </p>

      <div className="max-w-4xl mx-auto rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/30 via-violet-500/30 to-pink-500/30 shadow-2xl">
        <div className="rounded-2xl bg-[#070b19] border border-violet-900/40 backdrop-blur-xl p-4 sm:p-6 font-mono text-xs sm:text-sm">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-amber-500"></div>
              <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
              <span className="ml-2 text-xs text-gray-400">garima@portfolio: ~ (bash)</span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="text-xs text-gray-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
            >
              <FaTrashAlt size={11} />
              <span>Clear</span>
            </button>
          </div>

          {/* Quick Command Chips */}
          <div className="flex flex-wrap gap-2 mb-4 pb-3 border-b border-gray-800/80">
            <span className="text-[11px] text-gray-500 self-center">Quick Run:</span>
            {quickCommands.map((qCmd) => (
              <button
                key={qCmd}
                onClick={() => executeCommand(qCmd)}
                className="px-2.5 py-1 rounded-md bg-[#111633] text-cyan-300 hover:bg-violet-600 hover:text-white text-xs border border-violet-900/50 transition-all"
              >
                ${qCmd}
              </button>
            ))}
          </div>

          {/* Terminal Console Output */}
          <div className="h-64 sm:h-72 overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-gray-800">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === "system" && (
                  <p className="text-emerald-400 leading-relaxed">{item.text}</p>
                )}
                {item.type === "user" && (
                  <p className="text-amber-300 font-bold">{item.text}</p>
                )}
                {item.type === "response" && (
                  <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {item.text}
                  </pre>
                )}
                {item.type === "error" && (
                  <p className="text-rose-400">{item.text}</p>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Line */}
          <form onSubmit={handleFormSubmit} className="mt-4 pt-3 border-t border-gray-800 flex items-center gap-2">
            <span className="text-[#16f2b3] font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'projects', 'skills')..."
              className="flex-1 bg-transparent text-white outline-none placeholder-gray-600 text-xs sm:text-sm"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1 transition-all"
            >
              <FaPlay size={9} />
              <span>Run</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TerminalSection;
