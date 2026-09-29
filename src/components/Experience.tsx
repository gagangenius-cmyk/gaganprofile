"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import { paletteAt } from "@/lib/palette";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border" style={{ backgroundColor: paletteAt(3).bg }}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading index="04" eyebrow="Where I've worked" title="Experience" />

        <ol className="relative flex flex-col gap-8 pl-8">
          <motion.div
            className="absolute top-0 left-0 h-full w-px origin-top bg-linear-to-b from-accent via-accent-2 to-accent-3"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {experience.map((job, idx) => {
            const { fg } = paletteAt(idx);
            return (
              <Reveal key={`${job.company}-${job.period}`} delay={Math.min(idx * 0.05, 0.3)}>
                <li className="relative">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 400, damping: 20 }}
                    className="absolute -left-9.25 top-7 h-2.5 w-2.5 rounded-full ring-4 ring-background"
                    style={{ backgroundColor: fg }}
                  />

                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm hover:shadow-lg"
                  >
                    <div className="h-1" style={{ backgroundColor: fg }} />
                    <div className="p-6 sm:p-7">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-lg font-semibold text-foreground">
                          {job.role} <span className="text-muted">· {job.company}</span>
                        </h3>
                        <span className="font-mono text-xs text-muted whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>

                      <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                        <span>{job.location}</span>
                        {job.websites?.map((site) => (
                          <a
                            key={site.url}
                            href={site.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                            style={{ color: fg }}
                          >
                            {site.label}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ))}
                      </div>

                      <ul className="mt-4 flex flex-col gap-2">
                        {job.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full"
                              style={{ backgroundColor: fg }}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
