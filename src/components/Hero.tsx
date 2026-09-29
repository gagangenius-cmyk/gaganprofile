"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, stats } from "@/data/resume";
import { paletteAt } from "@/lib/palette";
import AnimatedCounter from "./AnimatedCounter";
import TypingRole from "./TypingRole";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const badges = [
  { label: "React.js", className: "top-2 -left-6 sm:-left-10", delay: 0 },
  { label: "Next.js", className: "top-1/4 -right-8 sm:-right-14", delay: 0.6 },
  { label: "Node.js", className: "bottom-1/4 -left-10 sm:-left-16", delay: 1.2 },
  { label: "AWS", className: "bottom-4 -right-4 sm:-right-8", delay: 1.8 },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob-a absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="animate-blob-b absolute top-40 -left-32 h-96 w-96 rounded-full bg-accent-2/20 blur-3xl" />
        <div className="animate-blob-c absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-3/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          className="flex flex-col gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-accent shadow-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for select opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="h-9 max-w-xl font-mono text-xl font-medium sm:text-2xl"
          >
            <TypingRole />
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-md"
            >
              Get in touch
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground shadow-sm hover:border-accent hover:text-accent"
            >
              View experience
            </motion.a>
            <div className="flex w-full items-center gap-3 pt-1 text-sm text-muted sm:w-auto sm:pt-0 sm:pl-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
                GitHub
              </a>
              <span className="text-border">/</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.dl
            variants={item}
            className="grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs uppercase tracking-wide text-muted">
                  {stat.label}
                </dt>
                <dd className="order-1 text-2xl font-semibold text-foreground sm:text-3xl">
                  <AnimatedCounter value={stat.value} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-border"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 rounded-full border border-dashed border-accent/30"
          />

          <div className="absolute inset-10 overflow-hidden rounded-full border-4 border-surface bg-surface-2 shadow-xl">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="(min-width: 1024px) 320px, 0px"
              className="object-cover"
              priority
            />
          </div>

          <div className="animate-gradient-pan absolute inset-8 -z-10 rounded-full bg-linear-to-br from-accent via-accent-2 to-accent-3 opacity-30 blur-xl" />

          {badges.map((badge, idx) => {
            const { fg } = paletteAt(idx);
            return (
              <motion.span
                key={badge.label}
                className={`animate-float-y absolute inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-foreground shadow-lg ${badge.className}`}
                style={{ animationDelay: `${badge.delay}s` }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + badge.delay * 0.15, type: "spring", stiffness: 260, damping: 20 }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: fg }} />
                {badge.label}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
