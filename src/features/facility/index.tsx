import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHeader, Placeholder, SectionLabel } from "@/components/ui";
import { CONVENIENCES, FACILITIES } from "./data";

export const metadata: Metadata = { title: "부대시설 — 비체올린" };

export default function FacilityPage() {
  return (
    <div>
      <PageHeader
        label="06 — FACILITIES"
        title="부대시설"
        lede="체험 사이사이 쉬어갈 수 있는 식당과 편의점, 캠핑장까지. 필요한 것은 파크 안에서 모두 해결하세요."
      />
      <section className="mx-auto max-w-[1440px] px-5 pb-[clamp(100px,15vh,160px)] sm:px-8 lg:px-14">
        <Stagger className="mb-[clamp(88px,13vh,150px)] grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-[clamp(28px,3.5vw,48px)]">
          {FACILITIES.map((fc) => (
            <StaggerItem key={fc.title}>
              <article className="transition-transform duration-500 ease-premium hover:-translate-y-[7px]">
                <Placeholder
                  label={fc.imgLabel}
                  ratioClass="aspect-[4/3]"
                  className="mb-5"
                />
                <h3 className="mb-2.5 text-xl font-bold tracking-[-0.02em] text-ink">
                  {fc.title}
                </h3>
                <p className="mb-3 text-sm font-light leading-[1.85] text-body">
                  {fc.desc}
                </p>
                <p className="text-xs font-medium tracking-[0.1em] text-moss">
                  {fc.meta}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <div className="grid grid-cols-12 gap-6">
            <SectionLabel className="col-span-12 lg:col-span-2">
              방문객 편의
            </SectionLabel>
            <div className="col-span-12 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t border-ink lg:col-span-10">
              {CONVENIENCES.map((c) => (
                <p
                  key={c}
                  className="border-b border-line py-4 pr-4 text-[14.5px] font-light text-body"
                >
                  {c}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
