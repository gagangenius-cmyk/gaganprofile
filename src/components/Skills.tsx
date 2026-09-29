"use client";

import {
  Boxes,
  Cloud,
  Database,
  LayoutDashboard,
  Network,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/resume";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Frontend Development": LayoutDashboard,
  "Backend Development": Terminal,
  Databases: Database,
  "API & Architecture": Network,
  "Cloud & DevOps": Cloud,
  "AI-Assisted Development": Sparkles,
  "Additional Technologies": Boxes,
  "Development Tools": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading index="02" eyebrow="What I work with" title="Skills" />

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {skillGroups.map((group) => {
            const Icon = icons[group.title] ?? Boxes;
            return (
              <RevealItem key={group.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full rounded-2xl p-px"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent via-accent-2 to-accent-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative h-full rounded-[15px] border border-border bg-surface p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-accent">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="text-sm font-medium text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
