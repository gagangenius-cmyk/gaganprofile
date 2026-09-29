import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  eyebrow,
}: {
  index: string;
  title: string;
  eyebrow?: string;
}) {
  return (
    <Reveal className="mb-12 flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs text-accent shadow-sm">
        {index}
      </span>
      <div>
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
          {title}
        </h2>
      </div>
      <span className="ml-2 h-px flex-1 bg-linear-to-r from-border to-transparent" />
    </Reveal>
  );
}
