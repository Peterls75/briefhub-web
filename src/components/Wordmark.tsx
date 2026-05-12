import Image from "next/image";

type Size = "sm" | "md" | "lg";

const sizes: Record<
  Size,
  { hatWidth: number; hatHeight: number; text: string }
> = {
  sm: { hatWidth: 30, hatHeight: 20, text: "text-xl" },
  md: { hatWidth: 42, hatHeight: 28, text: "text-2xl md:text-3xl" },
  lg: { hatWidth: 60, hatHeight: 40, text: "text-4xl md:text-5xl" },
};

export function Wordmark({ size = "md" }: { size?: Size }) {
  const s = sizes[size];
  return (
    <span className="inline-flex items-center gap-2 text-accent">
      <Image
        src="/brand/bowler-hat.svg"
        alt=""
        width={s.hatWidth}
        height={s.hatHeight}
        aria-hidden
        priority
        unoptimized
      />
      <span
        className={`font-display ${s.text} leading-none tracking-tight`}
      >
        <span className="font-normal">Brief</span>
        <span className="font-bold">Hub</span>
      </span>
    </span>
  );
}
