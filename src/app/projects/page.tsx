import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";
import Reveal from "@/components/Reveal";
import { FolderGit2 } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="space-y-12 pb-16 max-w-5xl mx-auto">
      {/* Page Header */}
      <section className="space-y-4">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-zinc-950/40 text-[11px] font-mono text-zinc-500">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Projects</span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-gradient leading-none">
            Technical Case Studies
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-sm md:text-base text-zinc-400 font-sans leading-relaxed max-w-2xl">
            A comprehensive list of enterprise integrations, quant trading engines, team wikis, and frontend platforms I have engineered.
          </p>
        </Reveal>
      </section>

      {/* Projects Grid */}
      <section className="relative w-full">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.1} yOffset={15}>
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
      </section>
    </div>
  );
}