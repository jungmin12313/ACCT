"use client";

import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Lock, Timer } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-wrapper bg-gradient-to-b from-transparent to-navy py-32 px-6">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full bg-gradient-to-b from-[#2a2d28]/90 to-[#1e201c]/95 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-16 lg:p-24 shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col items-center text-center group"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-mint to-transparent opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-mint/5 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-mint/10" />

          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="inline-flex items-center justify-center mb-10">
              <span className="px-6 py-2.5 rounded-full border border-mint/30 bg-mint/10 text-mint font-mono text-sm font-bold tracking-widest shadow-mint flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-mint animate-pulse" />
                마무리
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.2] drop-shadow-2xl">
              오늘, 문제 찾는 시간 대신 —<br className="hidden md:block" />
              <span className="text-gradient">문제 푸는 시간</span>을 가져보세요.
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-16 font-medium max-w-2xl leading-relaxed">
              딱 5문제만 풀어보세요. <br className="hidden md:block" /> 회원가입 없이도 시작할 수 있습니다.
            </p>

            <div className="flex flex-col items-center w-full relative">
              <Link href="/register">
                <button className="relative z-10 inline-flex items-center justify-center px-10 md:px-14 py-6 md:py-7 font-bold text-navy bg-mint rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.05] hover:shadow-mint-strong active:scale-95 group/btn min-w-[280px]">
                  <span className="relative z-20 text-2xl md:text-3xl flex items-center gap-4">
                    지금 바로 신청하기
                    <ArrowRight className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 z-10" />
                </button>
              </Link>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-10 gap-y-6 relative z-10 font-mono text-gray-400">
              <div className="flex items-center gap-3 hover:text-gray-200 transition-colors">
                <CreditCard className="w-6 h-6" />
                <span className="text-base tracking-wide">카드 등록 없음</span>
              </div>
              <div className="flex items-center gap-3 hover:text-gray-200 transition-colors">
                <Lock className="w-6 h-6" />
                <span className="text-base tracking-wide">개인정보 보호</span>
              </div>
              <div className="flex items-center gap-3 hover:text-gray-200 transition-colors">
                <Timer className="w-6 h-6" />
                <span className="text-base tracking-wide">30초면 충분</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
