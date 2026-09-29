"use client";

import {
  Award,
  ClipboardList,
  Gauge,
  Layers,
  MessageCircle,
  Puzzle,
  Repeat,
  Rocket,
  Share2,
  Users,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { profile, strengths } from "@/data/resume";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Technical Leadership": Award,
  "Team Management": Users,
  "Solution Architecture": Layers,
  "Problem Solving": Puzzle,
  "Requirement Analysis": ClipboardList,
  "Project Delivery": Rocket,
  "Client Communication": MessageCircle,
  "Performance Optimization": Gauge,
  "Production Troubleshooting": Wrench,
  "Agile Development": Repeat,
  "Cross-Functional Collaboration": Share2,
};

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading index="01" eyebrow="Get to know me" title="About" />

        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3" delay={0.05}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border bg-surface p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
                15+ years turning complex requirements into{" "}
                <span className="text-gradient">reliable software.</span>
              </h3>
              <RevealGroup className="flex flex-col gap-4" stagger={0.06}>
                {profile.highlights.map((point) => (
                  <RevealItem key={point} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                    <span>{point}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.15}>
            <div className="h-full rounded-3xl border border-border bg-surface p-8 shadow-sm">
              <h4 className="mb-5 text-sm font-medium text-foreground">
                Strengths
              </h4>
              <RevealGroup className="grid grid-cols-1 gap-2.5" stagger={0.04}>
                {strengths.map((s) => {
                  const Icon = icons[s] ?? Award;
                  return (
                    <RevealItem key={s} y={10}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-3 py-2.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background text-accent">
                          <Icon className="h-4 w-4" />
                        </span>
                        {s}
                      </motion.div>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
