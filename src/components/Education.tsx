"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { education } from "@/data/resume";
import { paletteAt } from "@/lib/palette";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="border-b border-border" style={{ backgroundColor: paletteAt(3).bg }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading index="04" eyebrow="Academic background" title="Education" />

        <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.08}>
          {education.map((ed, idx) => {
            const { fg, bg } = paletteAt(idx + 2);
            return (
              <RevealItem key={ed.degree}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm hover:shadow-lg"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: bg, color: fg }}
                  >
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-foreground">{ed.degree}</h3>
                    {ed.school && <p className="mt-1 text-sm text-muted">{ed.school}</p>}
                    <p className="mt-2 font-mono text-xs" style={{ color: fg }}>{ed.period}</p>
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
