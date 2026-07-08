import type { Metadata } from "next";
import { ExperienceLayout } from "@/components/ExperienceLayout";
import { KAYAK_CAUTION, KAYAK_SAFETY, KAYAK_STEPS } from "./data";

export const metadata: Metadata = { title: "카약 소개 — 비체올린" };

export default function KayakPage() {
  return (
    <ExperienceLayout
      label="03 — KAYAK"
      title={
        <>
          숲 사이,
          <br />
          물길을 젓다
        </>
      }
      lede="숲터널을 모티브로 만든 수로에서 즐기는 정글 카약 탐험. 여름이면 전국 최대 규모의 능소화가 동굴 수로를 뒤덮습니다."
      meta="약 40분 · 매 40분 간격 승선"
      bleedLabel="placeholder — 능소화동굴 수로 카약 와이드 컷"
      bleedTone="aqua"
      quote="노를 저을 때마다 능소화 그늘이 머리 위로 지나갑니다. 물 위에서만 보이는 공원의 얼굴이 있습니다."
      body="탑승 전 승선 교육이 진행되어 초보자도 쉽게 참여할 수 있습니다. 11세 이상은 단독 탑승이 가능하며, 120cm 미만 어린이는 보호자와 함께 탑승합니다. 우천 시에도 이용 가능합니다."
      sideImageLabel="카약 근접 컷"
      sideImageTone="aqua"
      steps={KAYAK_STEPS}
      safety={KAYAK_SAFETY}
      caution={KAYAK_CAUTION}
    />
  );
}
