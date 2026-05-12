import { Fragment } from "react";

export function Eyebrow({
  words,
  tone = "rule",
  className = "",
}: {
  words: string[];
  tone?: "rule" | "accent";
  className?: string;
}) {
  const toneClass = tone === "accent" ? "text-accent" : "text-rule";
  return (
    <p
      className={`text-[0.7rem] md:text-xs font-medium uppercase tracking-[0.18em] ${toneClass} ${className}`}
    >
      {words.map((word, i) => (
        <Fragment key={i}>
          <span>{word}</span>
          {i < words.length - 1 && (
            <span aria-hidden className="mx-3 text-rule">
              ·
            </span>
          )}
        </Fragment>
      ))}
    </p>
  );
}
