"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const stats = [
  {
    value: "92",
    unit: "%",
    label: "평균 문제 탐색 시간",
    suffix: "단축"
  },
  {
    value: "78",
    unit: "%",
    label: "회원의",
    suffix: "2주 내 풀이 루틴 형성"
  },
  {
    value: "8,400",
    unit: "+",
    label: "기출문제 DB, 매 시험 후",
    suffix: "즉시 업데이트"
  }
];

export default function Stats() {
  return (
    <section className="section-wrapper bg-navy/60 py-24 border-y border-white/5">
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4">
        <div className="relative glass-morphism rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-mint/5 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#444b41]/60 relative z-10 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0 group px-4 w-full"
              >
                <div className="w-14 h-14 rounded-full bg-mint/15 border border-mint/30 flex items-center justify-center text-mint mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:bg-mint/25 shadow-mint">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-mono mb-6 tracking-tighter drop-shadow-xl">
                  {stat.value}<span className="text-mint text-3xl md:text-4xl lg:text-5xl ml-1">{stat.unit}</span>
                </div>
                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-[240px] leading-snug">
                  {stat.label} <span className="text-gray-200 font-bold block mt-1">{stat.suffix}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
