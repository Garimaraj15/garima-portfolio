import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Garima Raj | Data Analyst & Full-Stack GenAI Developer",
  description: "3D Portfolio of Garima Raj, Data Analyst specializing in Power BI, Tableau, Advanced Excel & SQL, alongside Full-Stack Development and Generative AI (React, FastAPI, Gemini API).",
  keywords: [
    "Garima Raj",
    "Data Analyst Portfolio",
    "Business Intelligence",
    "Power BI Dashboard",
    "Tableau",
    "Advanced Excel VBA",
    "Full-Stack Developer",
    "Google Gemini AI",
    "React.js",
    "FastAPI",
    "3D Portfolio"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#060918] text-white selection:bg-[#16f2b3] selection:text-gray-900`}>
        <ToastContainer theme="dark" />
        <Navbar />
        <main className="min-h-screen relative mx-auto px-4 sm:px-8 lg:max-w-[76rem] xl:max-w-[84rem] 2xl:max-w-[96rem]">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
