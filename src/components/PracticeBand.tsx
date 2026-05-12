import Image from "next/image";
import { Fragment } from "react";

const practices = [
  "Contracts",
  "Litigation",
  "Regulatory",
  "Employment",
  "Corporate transactions",
  "IP",
  "Technology",
];

export function PracticeBand() {
  return (
    <div className="border-y border-rule/30 py-5 md:py-6 px-6 md:px-10">
      <div className="mx-auto max-w-6xl flex items-center justify-center flex-wrap gap-x-5 gap-y-3">
        {practices.map((p, i) => (
          <Fragment key={p}>
            <span className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-accent whitespace-nowrap">
              {p}
            </span>
            {i < practices.length - 1 && (
              <Image
                src="/brand/bowler-hat.svg"
                alt=""
                aria-hidden
                width={16}
                height={10}
                unoptimized
                className="opacity-90"
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
