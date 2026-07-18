"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/whiteboard", label: "Whiteboard" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#08080a]/75 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-2 group font-mono font-bold tracking-tight text-white">
          <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center border border-white/15 group-hover:border-primary/50 transition-colors">
            <span className="text-[10px] text-zinc-400 group-hover:text-primary transition-colors">CV</span>
          </div>
          <span className="text-sm tracking-wider uppercase hover:text-zinc-300 transition-colors">Chirag Verma</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-950/40 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white/10 text-white shadow-sm border border-white/5"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Cmd-K Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                metaKey: true,
                bubbles: true,
              });
              window.dispatchEvent(event);
            }}
            className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-white/5 bg-zinc-950/60 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 transition-all text-xs font-mono select-none cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-500" />
            <span>Search</span>
            <span className="text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-1 rounded ml-1">
              ⌘K
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-white/5 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#08080a]/95 backdrop-blur-md absolute top-full left-0 w-full p-6 space-y-4 shadow-xl z-50">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-white border border-white/5"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setTimeout(() => {
                const event = new KeyboardEvent("keydown", {
                  key: "k",
                  metaKey: true,
                  bubbles: true,
                });
                window.dispatchEvent(event);
              }, 100);
            }}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/5 bg-zinc-950/60 text-zinc-400 text-sm font-mono"
          >
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-zinc-500" />
              <span>Command Palette</span>
            </span>
            <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-1 rounded">
              ⌘K
            </span>
          </button>
        </div>
      )}
    </header>
  );
}