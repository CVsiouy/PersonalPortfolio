import Link from "next/link";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role?: string;
  timeline?: string;
  description: string;
  tags?: string[];
  details?: string[];
  github?: string;
}

export default function ProjectCard({
  title,
  role,
  timeline,
  description,
  tags = [],
  details = [],
  github,
}: ProjectCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between gap-6 h-full relative group overflow-hidden">
      <div>
        {/* Header: Title + Action link */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="text-lg md:text-xl font-sans font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            {role && (
              <p className="text-[11px] font-mono text-zinc-500 mt-1">
                {role} {timeline ? `• ${timeline}` : ""}
              </p>
            )}
          </div>

          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-white/5 bg-zinc-950/60 text-zinc-400 hover:text-white hover:border-white/10 transition-all shrink-0 cursor-pointer"
              aria-label={`View ${title} code on GitHub`}
            >
              <Github className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Short description */}
        <p className="text-sm text-zinc-400 font-sans mb-4 leading-relaxed">
          {description}
        </p>

        {/* Details list (resume bullet points) */}
        {details.length > 0 && (
          <ul className="space-y-1.5 mb-6 text-xs text-zinc-500 font-sans list-disc list-inside">
            {details.slice(0, 3).map((detail, idx) => (
              <li key={idx} className="leading-relaxed list-none relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-zinc-600">
                <span className="text-zinc-400">{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tech Stack Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}