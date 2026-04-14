"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, User, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-transparent to-navy pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="z-10 w-full max-w-md"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-mint transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">홈으로 돌아가기</span>
        </Link>

        <div className="glass-morphism rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-white mb-3">무료로 시작하기</h1>
            <p className="text-gray-400">딱 30초면 기출문제를 풀 수 있습니다.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400 ml-1">이름</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-mint transition-colors" />
                <input 
                  type="text" 
                  placeholder="홍길동"
                  className="w-full bg-[#1a1c18] border border-[#444b41] rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-mint transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400 ml-1">이메일</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-mint transition-colors" />
                <input 
                  type="email" 
                  placeholder="example@acct.com"
                  className="w-full bg-[#1a1c18] border border-[#444b41] rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-mint transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400 ml-1">비밀번호</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-mint transition-colors" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-[#1a1c18] border border-[#444b41] rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-mint transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-mint text-navy font-bold py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-mint mt-4 text-lg">
              지금 바로 풀기 시작 →
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-[#444b41]/40 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-mint" />
              <span>신규 가입 시 5문제 무료 이용권 즉시 증정</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-mint" />
              <span>시험 직전 오답 노트 무제한 생성</span>
            </div>
          </div>
        </div>
        
        <p className="text-center mt-8 text-gray-500 text-sm">
          이미 계정이 있으신가요? <button className="text-mint hover:underline font-bold">로그인하기</button>
        </p>
      </motion.div>
    </main>
  );
}
