import type { Metadata } from "next";
import { ParallaxBleed, Reveal } from "@/components/motion";
import { PageHeader, Placeholder, SectionLabel } from "@/components/ui";
import { PARK_GALLERY, PARK_SCENES } from "./data";

export const metadata: Metadata = { title: "공원 소개 — 비체올린" };

const RATIO_CLASS: Record<string, string> = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
};

export default function ParkPage() {
  return (
    <div>
      <PageHeader
        label="05 — GARDEN & PARK"
        title={
          <>
            천천히 걸어야
            <br />
            보이는 풍경<span className="text-moss">.</span>
          </>
        }
        lede="능소화동굴부터 석상광장, 곶자왈 둘레길까지. 계절마다 다른 얼굴을 보여주는 비체올린의 공원입니다."
      />
      <ParallaxBleed
        label="placeholder — 공원 산책로 와이드 영상"
        className="h-[70vh] min-h-[440px]"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-[clamp(80px,12vh,140px)] sm:px-8 lg:px-14">
        {PARK_SCENES.map((ps) => (
          <div
            key={ps.title}
            className={`mb-[clamp(72px,11vh,120px)] flex flex-wrap items-center gap-[clamp(32px,5vw,72px)] ${
              ps.reverse ? "flex-row-reverse" : ""
            }`}
          >
            <div className="min-w-[min(100%,320px)] flex-[1.5]">
              <Reveal kind="mask">
                <Placeholder
                  label={ps.imgLabel}
                  tone="green"
                  ratioClass="aspect-[16/10]"
                />
              </Reveal>
            </div>
            <Reveal className="min-w-[min(100%,280px)] flex-1">
              <p className="mb-3.5 text-xs font-medium tracking-[0.26em] text-dim">
                {ps.en}
              </p>
              <h2 className="mb-4 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                {ps.title}
              </h2>
              <p className="text-[15px] font-light leading-loose text-body">
                {ps.desc}
              </p>
            </Reveal>
          </div>
        ))}

        {/* Masonry gallery */}
        <div className="mt-4">
          <Reveal>
            <SectionLabel className="mb-7">공원 갤러리</SectionLabel>
          </Reveal>
          <div className="gap-3.5 [column-width:240px] [columns:3]">
            {PARK_GALLERY.map((pg, i) => (
              <Reveal
                key={pg.label}
                kind="mask"
                delay={Math.min((i % 4) * 0.11, 0.66)}
                className="mb-3.5 break-inside-avoid"
              >
                <div className="transition-transform duration-500 ease-premium hover:scale-[1.02]">
                  <Placeholder
                    label={pg.label}
                    ratioClass={RATIO_CLASS[pg.ratio]}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
