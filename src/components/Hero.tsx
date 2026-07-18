"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Copy, Check, Terminal } from "lucide-react";
import Reveal from "./Reveal";

interface HeroProps {
  name: string;
  title: string;
}

export default function Hero({ name, title }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("chiragverma00310@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-16 md:py-24 flex flex-col justify-center overflow-hidden">
      {/* Background radial glowing orbs (Stripe style) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full orb -z-10 animate-pulse duration-10000" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[250px] h-[250px] bg-accent/5 rounded-full orb -z-10 animate-pulse duration-7000" />

      <div className="flex flex-col items-start gap-6 max-w-4xl">
        {/* Availability Status Pill */}
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-zinc-950/40 backdrop-blur-sm shadow-inner text-[11px] font-mono font-medium text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute animate-none" />
            <span>Available for new opportunities</span>
          </div>
        </Reveal>

        {/* Big Premium Name Header */}
        <Reveal delay={0.25} yOffset={25}>
          <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight text-gradient leading-none">
            {name}
          </h1>
        </Reveal>

        {/* Typed-like sub-headline */}
        <Reveal delay={0.4} yOffset={20}>
          <p className="text-lg md:text-2xl font-sans font-medium text-zinc-400 leading-relaxed max-w-3xl">
            {title}
          </p>
        </Reveal>

        {/* Brief Pitch paragraph */}
        <Reveal delay={0.55} yOffset={15}>
          <p className="text-sm md:text-base font-sans text-zinc-500 max-w-2xl leading-relaxed">
            I engineer reliable enterprise integrations, optimize data pipeline performance, and design high-performance software. Experienced in C#, .NET Core, Python, and Quant analysis.
          </p>
        </Reveal>

        {/* Dynamic call to actions */}
        <Reveal delay={0.7} yOffset={10}>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-sans font-semibold text-sm shadow-md"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/5 bg-zinc-950/60 hover:bg-zinc-900 transition-all text-zinc-400 hover:text-zinc-200 text-sm font-sans font-medium select-none cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied Email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
            
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", {
                  key: "k",
                  metaKey: true,
                  bubbles: true,
                });
                window.dispatchEvent(event);
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-zinc-900/40 text-zinc-500 text-xs font-mono hover:text-zinc-400 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Press ⌘K for actions</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}