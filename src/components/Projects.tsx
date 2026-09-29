"use client";

import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/resume";
import { paletteAt } from "@/lib/palette";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-border"
      style={{ backgroundColor: paletteAt(2).bg }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading index="03" eyebrow="Live client work" title="Projects" />

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {projects.map((project, idx) => {
            const { fg } = paletteAt(idx);
            return (
              <RevealItem key={project.title}>
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm hover:shadow-lg"
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-surface-2">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} homepage screenshot`}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full flex-col items-center justify-center gap-2"
                        style={{ backgroundColor: paletteAt(idx).bg }}
                      >
                        <Globe className="h-7 w-7" style={{ color: fg }} />
                        <span className="text-xs font-medium" style={{ color: fg }}>
                          {new URL(project.url).hostname.replace("www.", "")}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-2.5 p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <ExternalLink
                        className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-foreground"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-1" style={{ backgroundColor: fg }} />
                </motion.a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
