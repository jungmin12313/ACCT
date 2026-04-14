"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const stats = [
  {
    value: "92",
    suffix: "%",
    label: "평균 문제 탐색 시간 ",
    highlight: "단축"
  },
  {
    value: "78",
    suffix: "%",
    label: "회원의 ",
    highlight: "2주 내 풀이 루틴",
    suffixLabel: " 형성"
  },
  {
    value: "8,400",
    suffix: "+",
    label: "기출문제 DB, 매 시험 후 ",
    highlight: "즉시 업데이트"
  }
];

export default function Stats() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-navy">
      <div className="max-w-6xl mx-auto w-full relative">
        <div className="absolute inset-0 bg-mint/5 blur-3xl rounded-full transform -translate-y-1/4 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#2a2d28]/90 via-[#2a2d28]/70 to-[#2a2d28]/90 backdrop-blur-xl border border-[#444b41]/80 rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#444b41]/60">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0 group px-4"
              >
                <div className="w-12 h-12 rounded-full bg-mint/10 border border-mint/20 flex items-center justify-center text-mint mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-mint/20">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div className="text-5xl lg:text-6xl font-extrabold text-white font-mono mb-4 tracking-tighter drop-shadow-lg">
                  {stat.value}<span className="text-mint">{stat.suffix}</span>
                </div>
                <p className="text-gray-400 text-lg font-medium max-w-[240px] leading-snug">
                  {stat.label}
                  <span className="text-gray-200">{stat.highlight}</span>
                  {stat.suffixLabel}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
