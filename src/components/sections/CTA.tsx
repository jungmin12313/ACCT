"use client";

import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Lock, Timer } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta-section" className="py-24 px-6 relative bg-gradient-to-b from-transparent to-navy/90">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full bg-gradient-to-b from-[#2a2d28]/80 to-[#1e201c]/90 backdrop-blur-2xl border border-[#444b41]/60 rounded-[2.5rem] p-10 md:p-16 lg:p-24 shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col items-center text-center group"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-mint to-transparent opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-mint/5 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-mint/10" />

          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="inline-flex items-center justify-center mb-8">
              <span className="px-5 py-2 rounded-full border border-mint/30 bg-mint/5 text-mint font-mono text-sm font-bold tracking-widest shadow-mint flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-mint animate-pulse" />
                마무리
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.3] drop-shadow-xl">
              오늘, 문제 찾는 시간 대신 —<br className="hidden md:block" />
              <span className="text-gradient">문제 푸는 시간</span>을 가져보세요.
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 font-medium max-w-2xl leading-relaxed">
              딱 5문제만 풀어보세요.<br className="block md:hidden" /> 회원가입 없이도 시작할 수 있습니다.
            </p>

            <div className="flex flex-col items-center w-full relative">
              <Link href="/register">
                <button className="relative z-10 inline-flex items-center justify-center px-8 md:px-12 py-5 md:py-6 font-bold text-navy bg-mint rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 shadow-[0_10px_30px_rgba(146,220,115,0.2)] hover:shadow-mint-strong active:scale-95 group/btn">
                  <span className="relative z-20 text-xl md:text-2xl flex items-center gap-3">
                    지금 바로 신청하기
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-7 transition-transformed duration-300 group-hover/btn:translate-x-1.5" />
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 z-10" />
                </button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-[#444b41]/40 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-6 gap-y-4 relative z-10">
              <div className="flex items-center gap-2.5 text-gray-400 hover:text-gray-200 transition-colors duration-300">
                <CreditCard className="w-5 h-5" />
                <span className="font-mono text-sm tracking-wide">카드 등록 없음</span>
              </div>
              <span className="hidden md:block text-[#444b41] font-bold">·</span>
              <div className="flex items-center gap-2.5 text-gray-400 hover:text-gray-200 transition-colors duration-300">
                <Lock className="w-5 h-5" />
                <span className="font-mono text-sm tracking-wide">개인정보 최소 수집</span>
              </div>
              <span className="hidden md:block text-[#444b41] font-bold">·</span>
              <div className="flex items-center gap-2.5 text-gray-400 hover:text-gray-200 transition-colors duration-300">
                <Timer className="w-5 h-5" />
                <span className="font-mono text-sm tracking-wide">30초면 시작 가능</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
