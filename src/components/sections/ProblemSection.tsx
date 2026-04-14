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
    <section className="py-24 px-6 relative bg-gradient-to-b from-transparent to-navy/80">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center mb-6"
        >
          <span className="px-5 py-2 rounded-full border border-mint/30 bg-mint/5 text-mint font-mono text-sm font-bold tracking-widest shadow-mint">
            혹시 이런 경험 있으신가요?
          </span>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          공부 의지가 없는 게 아닙니다.<br className="hidden md:block" /> 환경이 문제였습니다.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-morphism rounded-3xl p-8 flex items-start gap-4 hover:border-mint/30 transition-colors group"
          >
            <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
              {point}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
