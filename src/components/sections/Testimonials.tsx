"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    text: "\"예전엔 문제 찾다가 의욕이 떨어지는 게 제일 힘들었어요. 이제는 앱 켜면 바로 어제 풀던 문제가 이어져서 — 공부가 습관이 됐습니다.\"",
    name: "김○○ 님",
    spec: "23세 / 공인회계사 1차 준비 중"
  },
  {
    text: "\"해설이 교수님 설명보다 더 친절해요. 틀린 문제 복습하는 게 이제 두렵지 않아요.\"",
    name: "이○○ 님",
    spec: "26세 / 세무사·회계사 병행 준비"
  },
  {
    text: "\"저처럼 혼자 공부하는 사람한테 진짜 필요한 게 다 있어요. 스터디 없어도 되겠다 싶었어요.\"",
    name: "박○○ 님",
    spec: "24세 / 지방 거주, 독학 준비생"
  }
];

export default function Testimonials() {
  return (
    <section className="section-wrapper bg-gradient-to-b from-transparent to-navy/80 py-32 px-6">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center mb-6"
          >
            <span className="px-5 py-2 rounded-full border border-yellow-accent/30 bg-yellow-accent/5 text-yellow-accent font-mono text-sm font-bold tracking-widest shadow-[0_0_15px_rgba(232,228,186,0.15)] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-yellow-accent animate-pulse" />
              고객 후기
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            같은 고민을 먼저 겪은 분들의 리얼 보이스
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative glass-morphism rounded-[2.5rem] p-10 flex flex-col hover:border-mint/50 hover:bg-white/5 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-yellow-accent/10 group-hover:text-yellow-accent/20 transition-colors">
                <Quote size={48} />
              </div>
              <div className="relative z-10 flex-grow mb-12">
                <p className="text-gray-300 text-xl leading-relaxed font-medium">
                  {review.text.split("—").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="text-white font-bold block mt-2">— {arr[i+1]}</span>}
                      {i < arr.length - 1 && ""}
                    </span>
                  ))[0]}
                </p>
              </div>
              <div className="relative z-10 pt-8 border-t border-white/10">
                <p className="text-mint font-bold text-2xl mb-1">{review.name}</p>
                <p className="text-gray-400 text-sm font-mono tracking-wide">{review.spec}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
