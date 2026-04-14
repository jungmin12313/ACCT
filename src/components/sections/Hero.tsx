"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
            기출문제,<br className="hidden md:block" /> 이제 찾아 헤매지 마세요.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={scrollToCTA}
            className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-bold text-navy bg-mint rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-mint active:scale-95"
          >
            <span className="relative z-10 text-lg md:text-xl flex items-center gap-2">
              지금 바로 신청하기
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          
          <div className="mt-5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-mint animate-pulse shadow-[0_0_10px_rgba(146,220,115,0.8)]" />
            <p className="text-mint text-base font-mono font-bold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              무료로 시작하기 · 카드 등록 없음
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs font-mono tracking-widest uppercase text-gray-400">Scroll</span>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
