"use client";

import React, { useState } from "react";
import { categorizedSkills } from "@/data/skills";
import { Code2, Cpu, Database, Award } from "lucide-react";
import Reveal from "./Reveal";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-4 h-4" />;
      case "Frameworks & Libs":
        return <Cpu className="w-4 h-4" />;
      case "Databases & Cloud":
        return <Database className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative w-full py-12 border-b border-white/5">
      <div className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-gradient">
              Technical Expertise
            </h2>
            <p className="text-sm text-zinc-500 max-w-lg leading-relaxed">
              Leveraging modern tooling to construct reliable enterprise pipelines, trade models, and interactive frontends.
            </p>
          </div>
        </Reveal>

        {/* Tab triggers */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-1 p-1 bg-zinc-950/60 rounded-xl border border-white/5 backdrop-blur-sm self-start max-w-full">
            {categorizedSkills.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === idx
                    ? "bg-white/10 text-white shadow-sm border border-white/5"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {getCategoryIcon(cat.category)}
                <span>{cat.category}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tab panel */}
        <div className="min-h-[120px]">
          <Reveal key={activeTab} delay={0.1} yOffset={10}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {categorizedSkills[activeTab].skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 rounded-xl border border-white/5 bg-zinc-950/20 hover:bg-zinc-950/40 hover:border-white/10 transition-all flex items-center gap-3 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                  <span className="text-sm font-sans font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}