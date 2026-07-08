import type { ReactNode } from "react";
import type { Step } from "@/lib/data";
import { STRIPES } from "@/lib/stripes";
import { Stagger, StaggerItem } from "./motion";

/** Numbered eyebrow label, e.g. "01 — 소개". */
export function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[11.5px] font-medium tracking-[0.3em] text-mute ${className}`}
    >
      {children}
    </p>
  );
}

/** Striped image placeholder — swap for <Image> when real assets arrive. */
export function Placeholder({
  label,
  tone = "beige",
  ratioClass = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  tone?: keyof typeof STRIPES;
  ratioClass?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center ${ratioClass} ${className}`}
      style={{ background: STRIPES[tone] }}
    >
      <span className="px-3 text-center font-mono text-[11px] text-[#8A8A7C]">
        {label}
      </span>
    </div>
  );
}

/** Oversized editorial page header used on every sub-page. */
export function PageHeader({
  label,
  title,
  lede,
}: {
  label: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-[clamp(56px,8vh,88px)] pt-[clamp(64px,10vh,120px)] sm:px-8 lg:px-14">
      <SectionLabel className="mb-5">{label}</SectionLabel>
      <h1 className="text-[clamp(44px,7.5vw,110px)] font-black leading-none tracking-[-0.04em] text-ink">
        {title}
      </h1>
      {lede && (
        <p className="mt-9 max-w-[520px] text-base font-light leading-loose text-body">
          {lede}
        </p>
      )}
    </section>
  );
}

/** Hairline-ruled 4-step grid (관람 가이드 / 이용 방법), staggered into view. */
export function StepGrid({ steps }: { steps: Step[] }) {
  return (
    <Stagger className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] border-t border-ink">
      {steps.map((s) => (
        <StaggerItem
          key={s.num}
          className="border-b border-line py-8 pb-11 pr-7"
        >
          <p className="mb-[18px] text-[13px] font-medium tabular-nums text-moss">
            {s.num}
          </p>
          <h3 className="mb-2.5 text-lg font-bold tracking-[-0.01em] text-ink">
            {s.title}
          </h3>
          <p className="text-sm font-light leading-[1.85] text-body">
            {s.desc}
          </p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/** Hairline-ruled bullet-less list (안전 수칙 / 주의사항). */
export function RuleList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 list-none border-t border-ink p-0">
      {items.map((item) => (
        <li
          key={item}
          className="border-b border-line py-[15px] text-[14.5px] font-light leading-[1.8] text-body"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function InstagramIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      role="img"
      aria-label="Instagram"
    >
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}
