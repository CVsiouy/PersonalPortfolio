import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import { projects } from "@/data/project";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { ArrowRight, Trophy, Code, Award, TrendingUp } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <Hero
        name="Chirag Verma"
        title="Full Stack .NET Developer & Algorithmic Trading Systems Engineer"
      />

      {/* Stats Bento Grid */}
      <section className="relative w-full">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-gradient mb-8">
            Achievements & Metrics
          </h2>
        </Reveal>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0.1}>
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-full min-h-[140px]">
              <div className="flex items-center justify-between">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span className="text-[10px] font-mono text-zinc-500">HACK-KRMU 2.0</span>
              </div>
              <div>
                <p className="text-2xl font-sans font-extrabold text-white mt-4">1st Position</p>
                <p className="text-xs text-zinc-400 mt-1 font-sans">36-Hour Hackathon (Fintech Track)</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-full min-h-[140px]">
              <div className="flex items-center justify-between">
                <Code className="w-5 h-5 text-indigo-400" />
                <span className="text-[10px] font-mono text-zinc-500">DSA PROBLEM SOLVING</span>
              </div>
              <div>
                <p className="text-2xl font-sans font-extrabold text-white mt-4">500+ Solved</p>
                <p className="text-xs text-zinc-400 mt-1 font-sans">Across Leetcode, GFG, & CodeStudio</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-full min-h-[140px]">
              <div className="flex items-center justify-between">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-[10px] font-mono text-zinc-500">QUANT MODELING</span>
              </div>
              <div>
                <p className="text-2xl font-sans font-extrabold text-white mt-4">+37% P&L</p>
                <p className="text-xs text-zinc-400 mt-1 font-sans">Trading strategy optimization & backtests</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-full min-h-[140px]">
              <div className="flex items-center justify-between">
                <Award className="w-5 h-5 text-pink-400" />
                <span className="text-[10px] font-mono text-zinc-500">ACADEMICS</span>
              </div>
              <div>
                <p className="text-2xl font-sans font-extrabold text-white mt-4">Top 1.17%</p>
                <p className="text-xs text-zinc-400 mt-1 font-sans">IIT Delhi Artificial Intelligence qualifier</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Featured Projects Grid */}
      <section className="relative w-full">
        <Reveal>
          <div className="flex items-end justify-between mb-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-gradient">
                Featured Projects
              </h2>
              <p className="text-sm text-zinc-500 max-w-md leading-relaxed">
                A curated selection of core engineering products, pipelines, and algorithmic strategies.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.15}>
              <ProjectCard
                title={project.title}
                role={project.role}
                timeline={project.timeline}
                description={project.description}
                tags={project.tags}
                details={project.details}
                github={project.github}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="flex justify-center sm:hidden mt-6">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/5 bg-zinc-950/60 text-zinc-400 text-sm font-medium hover:text-white transition-colors w-full justify-center"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Stripe-like CTA Section */}
      <section className="relative w-full overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/40 p-8 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/5 -z-10" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <Reveal>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-white">
                Interested in building together?
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm text-zinc-400 max-w-lg leading-relaxed">
                Whether you are a startup founder looking for full stack expertise, a recruiter, or want to talk quantitative strategies — let&rsquo;s connect.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-sans font-semibold text-sm shadow-md cursor-pointer shrink-0"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}