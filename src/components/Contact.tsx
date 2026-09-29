"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/resume";
import { paletteAt } from "@/lib/palette";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons/Brand";

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: paletteAt(4).bg }}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="05" eyebrow="Get in touch" title="Contact" />

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center shadow-sm sm:px-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="animate-blob-a absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
              <div className="animate-blob-b absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-accent-2/15 blur-3xl" />
            </div>

            <div className="relative">
              <h3 className="mx-auto max-w-xl text-2xl font-semibold text-foreground sm:text-4xl">
                Let&apos;s build something reliable, together.
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm text-muted sm:text-base">
                Open to senior full-stack roles, technical leadership, and
                enterprise platform work.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href={`mailto:${profile.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-md"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {profile.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted hover:border-accent hover:text-foreground"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {phone}
                  </a>
                ))}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted hover:border-accent hover:text-foreground"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted hover:border-accent hover:text-foreground"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  GitHub
                </a>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="font-mono">Built with Next.js &amp; Tailwind CSS</span>
        </footer>
      </div>
    </section>
  );
}
