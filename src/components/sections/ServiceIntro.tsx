"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📂",
    title: "과목·연도별 정리",
    description: "\"재무회계 2019년 1차\" — ",
    highlight: "3초 안에 찾습니다"
  },
  {
    icon: "✍️",
    title: "해설 완전 제공",
    description: "답만 아니라 ",
    highlight: "왜 틀렸는지까지 알려드립니다"
  },
  {
    icon: "📊",
    title: "오답 분석 리포트",
    description: "내 취약 단원을 ",
    highlight: "자동으로 짚어드립니다"
  },
  {
    icon: "📱",
    title: "모바일 최적화",
    description: "통학 버스에서도, 점심시간에도 ",
    highlight: "끊김 없이"
  }
];

export default function ServiceIntro() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-navy via-[#1e201c]/95 to-navy">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            공부에만 집중할 수 있도록,<br className="hidden md:block" /> 나머지는 저희가 다 했습니다.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#2a2d28]/60 backdrop-blur-md border border-[#444b41]/60 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-[#2a2d28]/80 hover:border-mint/40 hover:shadow-mint overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1e201c] border border-[#444b41] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:border-mint/40 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                  <span className="text-mint font-medium">{feature.highlight}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
