"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "\"예전엔 문제 찾다가 의욕이 떨어지는 게 제일 힘들었어요. 이제는 앱 켜면 바로 어제 풀던 문제가 이어져서 — 공부가 습관이 됐습니다.\"",
    name: "김○○ 님",
    info: "23세 / 공인회계사 1차 준비 중"
  },
  {
    text: "\"해설이 교수님 설명보다 더 친절해요. 틀린 문제 복습하는 게 이제 두렵지 않아요.\"",
    name: "이○○ 님",
    info: "26세 / 세무사·회계사 병행 준비"
  },
  {
    text: "\"저처럼 혼자 공부하는 사람한테 진짜 필요한 게 다 있어요. 스터디 없어도 되겠다 싶었어요.\"",
    name: "박○○ 님",
    info: "24세 / 지방 거주, 독학 준비생"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-navy to-transparent">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center mb-6"
          >
            <span className="px-5 py-2 rounded-full border border-mint/30 bg-mint/5 text-mint font-mono text-sm font-bold tracking-widest shadow-mint flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-yellow-accent shadow-[0_0_8px_rgba(232,228,186,0.6)]" />
              고객 후기
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            같은 고민을 먼저 겪은 분들이<br className="hidden md:block" /> 말합니다
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#2a2d28]/60 backdrop-blur-md border border-[#444b41]/60 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-[#2a2d28]/80 hover:border-mint/40 hover:shadow-mint flex flex-col"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500 text-yellow-accent">
                <Quote className="w-16 h-16 transform -translate-y-2 translate-x-2" />
              </div>
              <div className="relative z-10 flex-grow">
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-medium">
                  {item.text}
                </p>
              </div>
              <div className="relative z-10 mt-auto pt-6 border-t border-[#444b41]/50">
                <p className="text-mint font-bold text-lg mb-1">{item.name}</p>
                <p className="text-gray-400 text-sm font-mono tracking-wide">{item.info}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
