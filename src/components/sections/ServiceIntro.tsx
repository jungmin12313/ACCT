"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📂",
    title: "과목·연도별 정리",
    desc: "\"재무회계 2019년 1차\" —",
    highlight: "3초 안에 찾습니다"
  },
  {
    icon: "✍️",
    title: "해설 완전 제공",
    desc: "답만 아니라",
    highlight: "왜 틀렸는지까지 알려드립니다"
  },
  {
    icon: "📊",
    title: "오답 분석 리포트",
    desc: "내 취약 단원을",
    highlight: "자동으로 짚어드립니다"
  },
  {
    icon: "📱",
    title: "모바일 최적화",
    desc: "통학 버스에서도, 점심시간에도",
    highlight: "끊김 없이"
  }
];

export default function ServiceIntro() {
  return (
    <section className="section-wrapper bg-gradient-to-b from-navy via-navy/95 to-transparent py-32">
      <div className="max-w-6xl w-full mx-auto relative z-10 px-4">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center mb-6"
          >
            <span className="px-5 py-2 rounded-full border border-mint/30 bg-mint/5 text-mint font-mono text-sm font-bold tracking-widest shadow-mint flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-mint" />
              서비스 소개
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            공부에만 집중할 수 있도록,<br className="hidden md:block" /> 나머지는 저희가 다 했습니다.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto px-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#2a2d28]/60 backdrop-blur-md border border-[#444b41]/60 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-[#2a2d28]/80 hover:border-mint/50 hover:shadow-mint w-full overflow-hidden"
            >
              <div className="relative z-10 text-left">
                <div className="w-16 h-16 rounded-2xl bg-[#1e201c] border border-[#444b41] flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-3 group-hover:border-mint/50 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  <span className="text-gray-200">"{feature.desc}"</span> — <br className="hidden lg:block" />
                  <span className="text-mint font-bold italic">{feature.highlight}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
