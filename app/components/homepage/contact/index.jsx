"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail, MdOutlineMarkEmailRead } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <div id="contact" className="my-16 lg:my-28 relative text-white">
      {/* Background glow */}
      <div className="w-[300px] h-[300px] bg-teal-500/10 rounded-full absolute bottom-10 right-10 filter blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex justify-center my-6 lg:mb-12">
        <div className="flex items-center gap-3">
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-gradient-to-r from-violet-900/80 to-[#1a1443] border border-violet-500/40 text-white py-2 px-6 text-lg sm:text-2xl font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            GET IN TOUCH
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-violet-500"></span>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-10">
        Interested in collaborating, discussing data analytics pipelines, or exploring software engineering roles? Send a message!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* CONTACT FORM */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* DIRECT CONTACT INFO */}
        <div className="lg:col-span-5 flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-[#090d21]/95 border border-violet-900/40 backdrop-blur-xl shadow-xl">
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 pb-3 border-b border-gray-800">
            <span>Direct Channels</span>
            <span className="h-2 w-2 rounded-full bg-[#16f2b3] animate-pulse"></span>
          </h3>

          <div className="flex flex-col gap-4">
            <Link
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#0d1224] border border-gray-800 hover:border-[#16f2b3] transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-violet-950/80 text-[#16f2b3] group-hover:scale-110 transition-transform">
                <MdAlternateEmail size={20} />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-mono">Email Address</p>
                <p className="text-xs sm:text-sm text-gray-200 font-semibold group-hover:text-[#16f2b3]">
                  {personalData.email}
                </p>
              </div>
            </Link>

            <Link
              href={`tel:${personalData.phone}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#0d1224] border border-gray-800 hover:border-cyan-400 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-violet-950/80 text-cyan-400 group-hover:scale-110 transition-transform">
                <IoMdCall size={20} />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-mono">Phone Number</p>
                <p className="text-xs sm:text-sm text-gray-200 font-semibold group-hover:text-cyan-400">
                  {personalData.phone}
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0d1224] border border-gray-800">
              <div className="p-2.5 rounded-lg bg-violet-950/80 text-pink-400">
                <CiLocationOn size={20} />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-mono">Location</p>
                <p className="text-xs sm:text-sm text-gray-200 font-semibold">
                  {personalData.address}
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS ROW */}
          <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-mono">Social Profiles:</span>
            <div className="flex items-center gap-3">
              <Link
                target="_blank"
                href={personalData.github}
                className="p-2.5 rounded-xl bg-[#111633] text-gray-300 hover:text-[#16f2b3] border border-gray-800 hover:border-[#16f2b3] transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <IoLogoGithub size={18} />
              </Link>

              <Link
                target="_blank"
                href={personalData.linkedIn}
                className="p-2.5 rounded-xl bg-[#111633] text-gray-300 hover:text-cyan-400 border border-gray-800 hover:border-cyan-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <BiLogoLinkedin size={18} />
              </Link>

              <Link
                target="_blank"
                href={personalData.leetcode}
                className="p-2.5 rounded-xl bg-[#111633] text-gray-300 hover:text-amber-400 border border-gray-800 hover:border-amber-400 transition-all hover:scale-110"
                aria-label="LeetCode"
              >
                <SiLeetcode size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;