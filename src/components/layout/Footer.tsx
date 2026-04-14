import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 relative z-20 mt-auto border-t border-[#444b41]/50 bg-[#1e201c]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-mint flex items-center justify-center">
            <span className="text-navy font-bold text-xs font-mono">P</span>
          </div>
          <span className="font-mono text-white font-bold text-xl tracking-tighter">
            ACCT<span className="text-mint">.</span>
          </span>
        </div>
        <div className="text-gray-500 text-sm font-mono flex items-center gap-4">
          <Link href="#" className="hover:text-mint transition-colors">이용약관</Link>
          <Link href="#" className="hover:text-mint transition-colors">개인정보처리방침</Link>
          <span>© 2024 PASS.</span>
        </div>
      </div>
    </footer>
  );
}
