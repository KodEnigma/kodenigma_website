import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Work | Code Enigba Labs",
  description:
    "Explore our portfolio of high-performance software projects.",
};

export default function WorkPage() {
  return (
    <>
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A selection of projects that showcase our commitment to excellence
              in software engineering and product design.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Selected Projects"
          description="Each project represents a unique challenge and a commitment to delivering exceptional results."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              href="#"
              featured={project.featured}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
