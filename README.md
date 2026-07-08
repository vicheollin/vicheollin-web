# 비체올린 (VICHEOLLIN) — 제주 힐링카약파크 웹사이트

Modern Editorial / Swiss Style 디자인의 반응형 웹사이트.
**Next.js 14 (App Router) + TailwindCSS + TypeScript + Framer Motion**

## 시작하기

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 프로덕션 빌드
```

## 구조

```
app/
  layout.tsx          # 루트 레이아웃 (폰트, Header/Footer)
  template.tsx        # 페이지 전환 애니메이션 (fade + slide-up)
  page.tsx            # 홈 (Hero, 소개, 체험 인덱스, 갤러리, 안내)
  about/              # 테마파크 소개 (운영시간, 요금, 가이드, 주의사항)
  kayak/              # 카약 소개
  trike/              # 트라익 소개
  park/               # 공원 소개 (마소너리 갤러리)
  facility/           # 부대시설
  community/          # 커뮤니티 (이벤트, 공지사항)
  support/            # 고객센터 (문의 폼, 문의 내역, FAQ)
components/
  Header.tsx          # 스티키 헤더 (활성 메뉴 표시)
  Footer.tsx          # 공통 푸터
  motion.tsx          # 모션 프리미티브: Reveal / Stagger / ParallaxBleed
  ui.tsx              # SectionLabel / Placeholder / PageHeader / StepGrid / RuleList
  ExperienceLayout.tsx# 카약·트라익 공용 레이아웃
lib/
  data.ts             # 모든 콘텐츠 데이터 (요금, 운영시간, FAQ, 공지 등)
```

## 디자인 토큰 (tailwind.config.ts)

- `ink` #141612 — 텍스트/블랙
- `moss` #3A5A40 — 유일한 그린 액센트
- `body` #5A5D52 · `mute` #6B6E64 · `dim` #9A9A8C — 텍스트 위계
- `line` #DDDCD2 — 헤어라인
- 폰트: Noto Sans KR (900 헤드라인) + Noto Serif KR (인용)
- 이징: `ease-premium` = cubic-bezier(0.16, 1, 0.3, 1)

## 모션 시스템 (Framer Motion)

- `<Reveal kind="up|fade|mask">` — 스크롤 진입 시 1회 리빌. `mask`는 이미지용
  클립 리빌(아래→위) + 미세 확대 복귀
- `<Stagger>` + `<StaggerItem>` — 자식 110ms 시간차 순차 등장
- `<ParallaxBleed>` — 풀블리드 이미지 밴드: 스크롤 패럴랙스 + 30초 Ken Burns
- `app/template.tsx` — 라우트 전환 시 페이드 + 슬라이드 업
- FAQ 아코디언, 문의 접수 상태 전환은 `AnimatePresence`

## 이미지 교체

모든 이미지는 스트라이프 플레이스홀더(`<Placeholder>`)입니다. 실제 사진이
준비되면 `Placeholder`를 `next/image`의 `<Image fill>` 로 교체하세요.
`ParallaxBleed` 내부의 스트라이프 div도 동일하게 교체하면 Ken Burns /
패럴랙스가 그대로 적용됩니다.

## 참고

- 요금·운영시간 등은 공개 정보 기반 목 데이터입니다. 게시 전 공식 확인 필요.
- 문의 폼은 클라이언트 상태로만 동작합니다(백엔드 미연결). `SupportClient.tsx`
  의 `submit()`에 API 호출을 연결하세요.
