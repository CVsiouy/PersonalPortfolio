"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-white/5 bg-zinc-950/20 backdrop-blur-sm mt-auto py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        {/* Left: Copyright */}
        <div>
          <span>&copy; {new Date().getFullYear()} Chirag Verma. All rights reserved.</span>
        </div>

        {/* Center: Live Local Time */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Gurugram, IN / {time || "00:00:00"} IST</span>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-4 text-zinc-400">
          <Link
            href="https://github.com/cvsiouy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/chiragverma00310"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="mailto:chiragverma00310@gmail.com"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}