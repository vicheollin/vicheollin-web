"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  EASE,
  ParallaxBleed,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import { Placeholder, SectionLabel } from "@/components/ui";
import { NOTICES } from "@/lib/data";
import { ACTIVITIES, HOME_GALLERY } from "./data";

const heroItem = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

export default function HomePage() {
  return (
    <div>
      {/* Hero — typography as graphic, fills the first viewport */}
      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[1440px] flex-col justify-between px-5 pb-[clamp(40px,6vh,72px)] pt-[clamp(48px,7vh,96px)] sm:px-8 lg:px-14">
        <motion.div
          {...heroItem(0.1)}
          className="flex flex-wrap items-baseline justify-between gap-6"
        >
          <SectionLabel>JEJU HANGYEONG — SINCE 2015</SectionLabel>
          <SectionLabel>33.3300°N, 126.1700°E</SectionLabel>
        </motion.div>
        <motion.h1
          {...heroItem(0.25)}
          className="text-[clamp(52px,10.5vw,164px)] font-black leading-[0.98] tracking-[-0.045em] text-ink"
        >
          빛에 올린 자연,
          <br />
          비체올린<span className="text-moss">.</span>
        </motion.h1>
        <motion.div
          {...heroItem(0.45)}
          className="flex flex-wrap items-end justify-between gap-8"
        >
          <p className="max-w-[440px] text-[clamp(15px,1.5vw,17px)] font-light leading-[1.9] text-[#3D4038]">
            국내 최초의 힐링카약파크.
            <br />
            제주 한경의 숲과 수로 위에서 카약을 젓고, 바람을 달리고, 천천히
            걷습니다.
          </p>
          <p className="font-serif text-sm italic text-mute">
            Healing Kayak Park, Jeju
          </p>
        </motion.div>
      </section>

      {/* Full-bleed image with Ken Burns + parallax — full viewport */}
      <ParallaxBleed
        label="placeholder — 수로 카약 와이드 컷 (영상)"
        className="h-screen min-h-[560px]"
        scrollHint
      />

      {/* Manifesto */}
      <section className="mx-auto max-w-[1440px] px-5 py-[clamp(100px,16vh,180px)] sm:px-8 lg:px-14">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-2">
            <SectionLabel>01 — 소개</SectionLabel>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-9">
            <p className="font-serif text-[clamp(24px,3.2vw,40px)] leading-[1.6] text-ink [text-wrap:pretty]">
              &ldquo;빛에 올린&rdquo;이라는 말에서 태어난 이름처럼,
              <br />
              비체올린은 햇빛 위에 올려놓은 자연 속
              <br />
              <span className="text-moss">힐링 테마파크</span>입니다.
            </p>
            <p className="mt-9 max-w-[520px] text-[15.5px] font-light leading-loose text-body">
              능소화가 흐드러지는 동굴 수로, 곶자왈 둘레길, 석상광장. 놀이기구
              대신 자연 그대로의 풍경이 이곳의 전부입니다. 정보를 읽기보다,
              공간을 천천히 통과해보세요.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Experiences — editorial index */}
      <section className="mx-auto max-w-[1440px] px-5 pb-[clamp(100px,15vh,160px)] sm:px-8 lg:px-14">
        <Reveal>
          <SectionLabel className="mb-7">02 — 체험</SectionLabel>
        </Reveal>
        <Stagger className="border-t border-ink">
          {ACTIVITIES.map((card) => (
            <StaggerItem key={card.num}>
              <Link
                href={card.href}
                className="grid grid-cols-[64px_1fr_auto] items-center gap-4 border-b border-line py-[clamp(28px,4.5vh,48px)] transition-[padding-left] duration-300 ease-out hover:pl-5 sm:gap-12"
              >
                <span className="text-[13px] tabular-nums text-dim">
                  {card.num}
                </span>
                <div>
                  <h3 className="mb-2 text-[clamp(26px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                    {card.title}{" "}
                    <span className="align-middle text-[0.42em] font-medium tracking-[0.2em] text-dim">
                      {card.en}
                    </span>
                  </h3>
                  <p className="max-w-[560px] text-[14.5px] font-light leading-[1.8] text-body">
                    {card.desc}
                  </p>
                </div>
                <span className="text-[clamp(20px,2.4vw,28px)] text-moss">
                  →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Gallery strip */}
      <section className="overflow-hidden pb-[clamp(100px,15vh,160px)]">
        <Reveal className="mx-auto mb-8 flex max-w-[1440px] flex-wrap items-baseline justify-between gap-4 px-5 sm:px-8 lg:px-14">
          <SectionLabel>03 — 풍경</SectionLabel>
          <Link
            href="/park"
            className="border-b border-ink pb-0.5 text-xs font-medium tracking-[0.14em] text-ink transition-colors hover:border-moss hover:text-moss"
          >
            공원 전체 보기 →
          </Link>
        </Reveal>
        <div className="flex gap-0.5 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-14 [scrollbar-width:thin]">
          {HOME_GALLERY.map((g, i) => (
            <Reveal
              key={g.idx}
              kind="mask"
              delay={Math.min(i * 0.11, 0.66)}
              className="w-[min(340px,74vw)] flex-none"
            >
              <figure className="m-0">
                <div className="transition-transform duration-500 ease-premium hover:scale-[1.025]">
                  <Placeholder label={g.label} ratioClass="aspect-[4/5]" />
                </div>
                <figcaption className="mt-3 flex justify-between gap-2 text-xs tracking-[0.04em] text-mute">
                  <span>{g.caption}</span>
                  <span className="text-[#B4B4A6]">{g.idx}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Info — festival / program / news */}
      <section className="mx-auto max-w-[1440px] px-5 pb-[clamp(110px,16vh,180px)] sm:px-8 lg:px-14">
        <Reveal>
          <SectionLabel className="mb-7">04 — 안내</SectionLabel>
        </Reveal>

        {/* Featured : festival */}
        <div className="mb-[clamp(80px,12vh,140px)]">
          <Reveal>
            <h2 className="mb-[clamp(36px,6vh,64px)] text-[clamp(32px,4.2vw,56px)] font-black leading-none tracking-[-0.03em] text-ink">
              FESTIVAL
            </h2>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-start gap-[clamp(40px,6vw,88px)]">
            <Reveal>
              <h3 className="mb-1.5 text-[clamp(20px,2.2vw,26px)] font-bold leading-[1.4] tracking-[-0.02em] text-ink">
                2026 능소화 축제
              </h3>
              <p className="mb-6 text-[13px] font-medium tracking-[0.14em] text-mute">
                TRUMPET CREEPER FESTIVAL — 능소화동굴
              </p>
              <p className="mb-10 max-w-[460px] text-[14.5px] font-light leading-[2] text-body">
                전국 최대 규모의 능소화 축제. 한여름이면 주황빛 꽃이 동굴 수로를
                가득 덮고, 그 아래를 카약으로 통과하는 특별한 계절이 시작됩니다.
              </p>
              <div className="border-t border-ink">
                <div className="flex gap-5 border-b border-line py-[15px] text-sm">
                  <span className="w-[72px] flex-none font-medium text-ink">
                    축제기간
                  </span>
                  <span className="font-light tabular-nums text-body">
                    2026-06-20 – 2026-08-09
                  </span>
                </div>
                <div className="flex gap-5 border-b border-line py-[15px] text-sm">
                  <span className="w-[72px] flex-none font-medium text-ink">
                    운영시간
                  </span>
                  <span className="font-light tabular-nums text-body">
                    08:45 – 18:30 (입장마감 : 17:50)
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-5 border-b border-line py-[15px] text-sm">
                  <span className="w-[72px] flex-none font-medium text-ink">
                    휴무일
                  </span>
                  <span className="min-w-[220px] flex-1 font-light text-body">
                    연중무휴 (기상 상황에 따라 변경될 수 있습니다.)
                  </span>
                  <Link
                    href="/park"
                    className="flex-none whitespace-nowrap border border-ink px-6 py-[11px] text-[11.5px] font-medium tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal kind="mask">
              <figure className="m-0">
                <Placeholder
                  label="placeholder — 능소화동굴 수로 대표 컷"
                  tone="green"
                  ratioClass="aspect-[16/10]"
                />
                <figcaption className="mt-3 flex justify-between gap-2 text-xs tracking-[0.04em] text-mute">
                  <span>한여름의 능소화동굴</span>
                  <span className="text-[#B4B4A6]">2026</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Program + News */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-start gap-[clamp(48px,6vw,88px)]">
          <div>
            <Reveal>
              <h2 className="mb-[clamp(36px,6vh,64px)] text-[clamp(32px,4.2vw,56px)] font-black leading-none tracking-[-0.03em] text-ink">
                PROGRAM
              </h2>
            </Reveal>
            <Stagger className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(24px,3vw,40px)]">
              <StaggerItem>
                <Link href="/kayak" className="group block">
                  <div className="transition-transform duration-500 ease-premium group-hover:scale-[1.02]">
                    <Placeholder
                      label="placeholder — 카약 체험 컷"
                      ratioClass="aspect-[4/3]"
                    />
                  </div>
                  <h3 className="mb-1.5 mt-[18px] text-base font-bold leading-normal tracking-[-0.01em] text-ink">
                    힐링 카약 — 숲터널 수로 탐험
                  </h3>
                  <p className="mb-3.5 text-[12.5px] font-light tabular-nums text-dim">
                    매 40분 간격 승선 · 약 40분 소요
                  </p>
                  <p className="text-right text-xs tracking-[0.1em] text-dim transition-colors group-hover:text-moss">
                    more →
                  </p>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="/trike" className="group block">
                  <div className="transition-transform duration-500 ease-premium group-hover:scale-[1.02]">
                    <Placeholder
                      label="placeholder — 트라익 트랙 컷"
                      ratioClass="aspect-[4/3]"
                    />
                  </div>
                  <h3 className="mb-1.5 mt-[18px] text-base font-bold leading-normal tracking-[-0.01em] text-ink">
                    드리프트 트라익 — 전용 트랙 주행
                  </h3>
                  <p className="mb-3.5 text-[12.5px] font-light tabular-nums text-dim">
                    매 15분 간격 교육 후 탑승
                  </p>
                  <p className="text-right text-xs tracking-[0.1em] text-dim transition-colors group-hover:text-moss">
                    more →
                  </p>
                </Link>
              </StaggerItem>
            </Stagger>
          </div>
          <div>
            <Reveal className="mb-[clamp(36px,6vh,64px)]">
              <h2 className="text-[clamp(32px,4.2vw,56px)] font-black leading-none tracking-[-0.03em] text-ink">
                NEWS
              </h2>
            </Reveal>
            <Stagger className="border-t border-ink">
              {NOTICES.map((n) => (
                <StaggerItem key={n.title}>
                  <div className="flex items-baseline gap-5 border-b border-line py-[17px]">
                    <span className="min-w-0 flex-1 truncate text-sm font-light text-[#3D4038]">
                      [{n.cat}] {n.title}
                    </span>
                    <span className="flex-none text-[12.5px] tabular-nums text-dim">
                      {n.date}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </div>
  );
}
