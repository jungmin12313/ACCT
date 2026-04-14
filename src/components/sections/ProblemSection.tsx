"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const painPoints = [
  "기출문제 PDF를 찾다가 결국 카페 게시글 수십 개를 뒤졌다",
  "어렵게 찾은 파일은 연도가 뒤섞이고, 해설은 없고",
  "\"오늘은 꼭 문제 풀어야지\" 했는데 자료 정리만 하다 하루가 끝났다",
  "시험은 다가오는데, 내가 제대로 공부하고 있는 건지조차 모르겠다"
];

export default function ProblemSection() {
  return (
    <section className="section-wrapper bg-navy/40 backdrop-blur-sm border-y border-white/5 py-32">
      <div className="max-w-4xl w-full mx-auto text-center mb-20 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center mb-8"
        >
          <span className="px-6 py-2.5 rounded-full border border-mint/30 bg-mint/10 text-mint font-mono text-sm font-bold tracking-widest shadow-mint">
            혹시 이런 경험 있으신가요?
          </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight"
        >
          공부 의지가 없는 게 아닙니다.<br className="hidden md:block" /> 환경이 문제였습니다.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1.5 bg-mint/50 mx-auto rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto relative z-10 px-4">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group glass-morphism rounded-[2rem] p-8 md:p-10 flex items-start gap-6 hover:border-mint/50 hover:bg-white/5 transition-all duration-300 w-full"
          >
            <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <XCircle className="w-6 h-6 text-red-400" />
            </div>
            <p className="text-gray-200 text-xl md:text-2xl font-semibold leading-relaxed drop-shadow-sm text-left">
              {point}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
