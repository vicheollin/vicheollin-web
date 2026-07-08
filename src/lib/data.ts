export type NavItem = { href: string; label: string };

export const NAV: NavItem[] = [
  { href: "/about", label: "테마파크 소개" },
  { href: "/kayak", label: "카약" },
  { href: "/trike", label: "트라익" },
  { href: "/park", label: "공원" },
  { href: "/facility", label: "부대시설" },
  { href: "/support", label: "고객센터" },
];

export type Step = { num: string; title: string; desc: string };

export const NOTICES = [
  {
    cat: "공지",
    color: "text-ink",
    title: "하절기 운영시간 안내 (08:45–18:30)",
    date: "2026.06.28",
  },
  {
    cat: "공지",
    color: "text-ink",
    title: "태풍 북상에 따른 카약 체험 임시 중단 안내 (7/5–7/6)",
    date: "2026.06.30",
  },
  {
    cat: "이벤트",
    color: "text-moss",
    title: "2026 능소화 축제 개막 — 개화 현황 안내",
    date: "2026.06.20",
  },
  {
    cat: "안내",
    color: "text-dim",
    title: "트라익 파크 트랙 정기 점검 시간 안내",
    date: "2026.06.12",
  },
  {
    cat: "공지",
    color: "text-ink",
    title: "주차장 확장 공사 완료 — 대형버스 주차 가능",
    date: "2026.05.30",
  },
  {
    cat: "안내",
    color: "text-dim",
    title: "단체(20인 이상) 할인 안내 및 예약 방법",
    date: "2026.05.18",
  },
];
