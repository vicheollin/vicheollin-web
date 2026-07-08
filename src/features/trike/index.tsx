import type { Metadata } from "next";
import { ExperienceLayout } from "@/components/ExperienceLayout";
import { TRIKE_CAUTION, TRIKE_SAFETY, TRIKE_STEPS } from "./data";

export const metadata: Metadata = { title: "트라익 소개 — 비체올린" };

export default function TrikePage() {
  return (
    <ExperienceLayout
      label="04 — TRIKE PARK"
      title={
        <>
          바람의 속도,
          <br />
          드리프트 트라익
        </>
      }
      lede="시속 80km. 전용 트랙 위에서 즐기는 드리프트 트라익은 비체올린에서 가장 빠른 시간입니다."
      meta="매 15분 간격 교육·탑승"
      bleedLabel="placeholder — 트라익 트랙 주행 와이드 컷"
      bleedTone="sand"
      quote="낮게 앉아 트랙을 미끄러지는 순간, 제주의 바람이 온몸을 지나갑니다."
      body="드리프트 트라익은 매 15분 간격으로 교육 후 탑승합니다. 만 10세 이상 65세 이하, 신장 140cm 이상이면 누구나 즐길 수 있습니다. 휴게시간은 12:30–13:30입니다."
      sideImageLabel="트라익 차량 컷"
      sideImageTone="sand"
      steps={TRIKE_STEPS}
      safety={TRIKE_SAFETY}
      caution={TRIKE_CAUTION}
    />
  );
}
