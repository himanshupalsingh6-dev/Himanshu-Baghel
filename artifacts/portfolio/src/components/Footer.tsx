import { Link } from 'wouter';
import { Hexagon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <Hexagon className="text-white w-5 h-5 rotate-90" />
          <span className="font-display font-bold text-sm text-white">HB</span>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Himanshu Baghel. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-slate-500">
          <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-white/10">|</span>
          <Link href="/terms-and-conditions" className="hover:text-blue-400 transition-colors">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
