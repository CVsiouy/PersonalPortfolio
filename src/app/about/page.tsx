import Reveal from "@/components/Reveal";
import { Briefcase, GraduationCap, Trophy, Award, MapPin } from "lucide-react";

export default function AboutPage() {
  const experiences = [
    {
      role: "Full Stack .NET Developer",
      company: "Gentell India Pvt. Ltd.",
      location: "Noida, IN",
      period: "Jul 2025 - Present",
      details: [
        "Maintained and enhanced SQL Server-Brighttree integrations through SOAP-based .NET services, ensuring reliable synchronization of insurance claim data.",
        "Resolved 100+ production defects and feature enhancements, contributing to a 40% reduction in customer-reported issues over two release cycles.",
        "Engineered an internal documentation platform used by 15+ team members, reducing onboarding and knowledge-sharing time by approximately 30%.",
        "Built an automated testing framework using Playwright and Cucumber, reducing regression testing effort from 2 days to 3 hours per release.",
        "Implemented NUnit Test Framework, improving regression coverage and enabling faster release by 15%.",
        "Implemented Feature Toggle architecture, reducing production recovery time from hours to minutes by enabling selective feature deactivation.",
      ],
    },
    {
      role: ".NET Full Stack Developer Intern",
      company: "Cognizant Technology Solution",
      location: "Remote",
      period: "May 2025 - Jun 2025",
      details: [
        "Developed full-stack web tools using C#, .NET Core, and modern web frameworks.",
        "Gained hands-on experience in enterprise application workflows and Agile developer methodologies.",
      ],
    },
    {
      role: "Python Developer Intern",
      company: "Pranjali Growcap Pvt. Ltd.",
      location: "Delhi, IN",
      period: "Feb 2025 - Apr 2025",
      details: [
        "Developed an algorithmic trading strategy using Pandas, backtesting 260,000+ parameter combinations on 5 years of Nifty Options data.",
        "Improved strategy P&L by 37%, resulting in a Full-Time Equivalent (FTE) offer."
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-16 max-w-4xl mx-auto">
      {/* Intro section */}
      <section className="space-y-4">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-zinc-950/40 text-[11px] font-mono text-zinc-500">
            <span>About Me</span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-gradient leading-none">
            Engineering with Precision
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed max-w-2xl">
            I am a software engineer based in Gurugram, India. I specialize in designing and maintaining high-throughput backend services, SOAP/REST APIs, and quantitative trading systems. By combining .NET Core, Python, and automated testing tools, I focus on delivering robust, zero-downtime products.
          </p>
        </Reveal>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-sans font-bold text-white">Experience</h2>
          </div>
        </Reveal>

        <div className="relative border-l border-white/5 ml-3 pl-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-primary transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-primary transition-colors" />
              </div>

              <Reveal delay={idx * 0.15}>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-base font-sans font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-sans text-zinc-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-[11px] font-mono text-zinc-500 block">
                        {exp.period}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-zinc-400 font-sans list-disc list-inside">
                    {exp.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="leading-relaxed list-none relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-zinc-700 group-hover:before:text-primary/70 before:transition-colors"
                      >
                        <span className="text-zinc-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Academic qualifiers */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Education Card */}
        <div className="space-y-4">
          <Reveal>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-sans font-bold text-white">Education</h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div>
                <h3 className="text-sm font-sans font-bold text-white">
                  J.C. Bose University of Science and Technology, YMCA
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-0.5">
                  B.Tech in Electronics & Computer Engineering
                </p>
                <p className="text-[10px] font-mono text-zinc-500 mt-1">
                  2021 - 2025 | Faridabad, Haryana
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">Cumulative GPA:</span>
                <span className="text-white font-bold">7.6 / 10.0</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Achievements Card */}
        <div className="space-y-4">
          <Reveal>
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-sans font-bold text-white">Achievements</h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <ul className="space-y-3.5 text-xs text-zinc-400 font-sans">
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">1st Position</span> in 36H Hackathon HACK-KRMU 2.0 (Fintech track).
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold">5th Position</span> in International Hackathon Escalade 11.0 (IIT Guwahati).
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    Solved <span className="text-white font-bold">500+ problems</span> across Leetcode, GeeksforGeeks, and CodeStudio.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    Qualified AI course by <span className="text-white font-bold">IIT Delhi</span> (top 1.17% qualification rate).
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}