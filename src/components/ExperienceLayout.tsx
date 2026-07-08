import type { ReactNode } from "react";
import type { Step } from "@/lib/data";
import type { STRIPES } from "@/lib/stripes";
import { ParallaxBleed, Reveal } from "./motion";
import { Placeholder, RuleList, SectionLabel, StepGrid } from "./ui";

interface ExperienceLayoutProps {
  label: string;
  title: ReactNode;
  lede: string;
  meta: string;
  bleedLabel: string;
  bleedTone: keyof typeof STRIPES;
  quote: string;
  body: string;
  sideImageLabel: string;
  sideImageTone: keyof typeof STRIPES;
  steps: Step[];
  safety: string[];
  caution: string[];
}

/** Shared editorial layout for the Kayak / Trike experience pages. */
export function ExperienceLayout({
  label,
  title,
  lede,
  meta,
  bleedLabel,
  bleedTone,
  quote,
  body,
  sideImageLabel,
  sideImageTone,
  steps,
  safety,
  caution,
}: ExperienceLayoutProps) {
  return (
    <div>
      <section className="mx-auto max-w-[1440px] px-5 pb-[clamp(56px,8vh,88px)] pt-[clamp(64px,10vh,120px)] sm:px-8 lg:px-14">
        <Reveal>
          <SectionLabel className="mb-5">{label}</SectionLabel>
        </Reveal>
        <Reveal>
          <h1 className="text-[clamp(44px,7.5vw,110px)] font-black leading-none tracking-[-0.04em] text-ink">
            {title}
            <span className="text-moss">.</span>
          </h1>
        </Reveal>
        <Reveal className="mt-9 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-[520px] text-base font-light leading-loose text-body">
            {lede}
          </p>
          <p className="text-xs font-medium tracking-[0.2em] text-dim">
            {meta}
          </p>
        </Reveal>
      </section>

      <ParallaxBleed label={bleedLabel} tone={bleedTone} />

      <section className="mx-auto max-w-[1440px] px-5 py-[clamp(80px,12vh,140px)] sm:px-8 lg:px-14">
        <div className="mb-[clamp(88px,13vh,150px)] grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-2">
            <SectionLabel>체험 설명</SectionLabel>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-6">
            <p className="font-serif text-[clamp(20px,2.4vw,28px)] leading-[1.75] text-ink">
              {quote}
            </p>
            <p className="mt-7 text-[15px] font-light leading-loose text-body">
              {body}
            </p>
          </Reveal>
          <div className="col-span-12 lg:col-span-4">
            <Reveal kind="mask">
              <Placeholder
                label={sideImageLabel}
                tone={sideImageTone}
                ratioClass="aspect-[3/4]"
              />
            </Reveal>
          </div>
        </div>

        <div className="mb-[clamp(88px,13vh,150px)]">
          <Reveal>
            <SectionLabel className="mb-7">이용 방법</SectionLabel>
          </Reveal>
          <StepGrid steps={steps} />
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(40px,6vw,96px)]">
          <Reveal>
            <SectionLabel className="mb-6">안전 수칙</SectionLabel>
            <RuleList items={safety} />
          </Reveal>
          <Reveal>
            <SectionLabel className="mb-6">주의사항</SectionLabel>
            <RuleList items={caution} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
