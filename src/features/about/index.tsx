import type { Metadata } from "next";
import { ParallaxBleed, Reveal } from "@/components/motion";
import { PageHeader, RuleList, SectionLabel, StepGrid } from "@/components/ui";
import { ABOUT_CAUTION, FEES, GUIDE_STEPS, HOURS } from "./data";

export const metadata: Metadata = { title: "테마파크 소개 — 비체올린" };

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        label="02 — ABOUT"
        title="테마파크 소개"
        lede="비체올린은 2015년 문을 연 국내 최초의 힐링카약파크입니다. 숲터널을 모티브로 한 수로, 능소화동굴, 곶자왈 둘레길이 하나의 공원으로 이어집니다."
      />
      <ParallaxBleed
        label="placeholder — 파크 항공 전경"
        className="h-[56vh] min-h-[380px]"
      />
      <section className="mx-auto max-w-[1440px] px-5 py-[clamp(80px,12vh,140px)] sm:px-8 lg:px-14">
        <div className="mb-[clamp(88px,13vh,150px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(40px,6vw,96px)]">
          <Reveal>
            <SectionLabel className="mb-6">운영 시간</SectionLabel>
            <div className="border-t border-ink">
              {HOURS.map((h) => (
                <div
                  key={h.label}
                  className="flex justify-between gap-4 border-b border-line py-[18px] text-[15px]"
                >
                  <span className="font-light text-body">{h.label}</span>
                  <span className="text-right font-medium tabular-nums text-ink">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-[18px] text-[12.5px] font-light leading-[1.8] text-dim">
              연중무휴 · 기상 상황에 따라 해상 체험이 중단될 수 있습니다.
            </p>
          </Reveal>
          <Reveal>
            <SectionLabel className="mb-6">
              이용 요금{" "}
              <span className="tracking-[0.1em] text-dim">
                — 공원 관람 포함
              </span>
            </SectionLabel>
            <div className="border-t border-ink">
              {FEES.map((f) => (
                <div
                  key={f.type}
                  className="flex justify-between gap-4 border-b border-line py-[18px] text-[15px]"
                >
                  <span className="font-light text-body">
                    {f.type} <span className="text-xs text-dim">{f.note}</span>
                  </span>
                  <span className="text-right font-medium tabular-nums text-ink">
                    {f.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-[18px] text-[12.5px] font-light leading-[1.8] text-dim">
              36개월 미만 무료(증빙 지참) · 경로·장애인·유공자 할인은 현장
              신분증 제시 · 단체(20인 이상) 전화 문의
            </p>
          </Reveal>
        </div>

        <div className="mb-[clamp(88px,13vh,150px)]">
          <Reveal>
            <SectionLabel className="mb-7">관람 가이드</SectionLabel>
          </Reveal>
          <StepGrid steps={GUIDE_STEPS} />
        </div>

        <Reveal>
          <div className="grid grid-cols-12 gap-6">
            <SectionLabel className="col-span-12 lg:col-span-2">
              주의사항
            </SectionLabel>
            <div className="col-span-12 lg:col-span-9">
              <RuleList items={ABOUT_CAUTION} />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
