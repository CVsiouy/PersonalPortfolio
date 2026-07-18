import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <Reveal>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-zinc-950/40 text-[11px] font-mono text-zinc-500">
          <Terminal className="w-3.5 h-3.5" />
          <span>404 - Page Not Found</span>
        </div>
      </Reveal>
      
      <Reveal delay={0.15}>
        <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-gradient leading-none">
          Lost in the Matrix
        </h1>
      </Reveal>
      
      <Reveal delay={0.3}>
        <p className="text-sm text-zinc-400 max-w-sm leading-relaxed mx-auto">
          The page you are looking for does not exist or has been moved. Let&rsquo;s get you back on track.
        </p>
      </Reveal>
      
      <Reveal delay={0.45}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-sans font-semibold text-sm shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </Reveal>
    </div>
  );
}
