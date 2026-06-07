import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";

export default function HomePage() {
  return (
    <>
      <Hero
        name="Chirag Verma"
        title="Software Developer | Quant Trading | Machine Learning"
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}