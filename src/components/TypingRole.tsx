"use client";

import { useEffect, useState } from "react";

const roles = [
  "Senior Full-Stack Developer",
  "React.js & Next.js Specialist",
  "Node.js / NestJS Architect",
  "AI-Assisted Engineering Lead",
];

const TYPE_SPEED = 45;
const DELETE_SPEED = 28;
const HOLD_MS = 1600;

export default function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const current = roles[roleIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setPhase("typing");
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 0);
    return () => clearTimeout(t);
  }, [text, phase, roleIndex]);

  return (
    <span className="animate-gradient-pan bg-linear-to-r from-accent via-accent-2 to-accent-3 bg-clip-text text-transparent">
      {text}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}
