"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type ChangeEvent, useMemo, useState } from "react";
import { EASE, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Placeholder, SectionLabel } from "@/components/ui";
import { BASE_INQUIRIES, FAQS } from "../data";
import type { Inquiry } from "../types";

const TOPICS = ["일반 문의", "단체 예약", "카약 체험", "트라익 체험", "기타"];

const CONTACT_ROWS = [
  ["전화", "064-773-0000"],
  ["팩스", "064-773-5678"],
  ["주소", "제주특별자치도 제주시 한경면 판포리 725-1"],
  ["운영", "매일 08:45 – 18:30 (하절기 기준)"],
];

const BASE_NO = BASE_INQUIRIES[0].no;

const inputCls =
  "w-full border-0 border-b border-line bg-transparent px-1 py-[18px] text-[15px] text-ink outline-none transition-colors focus:border-ink placeholder:text-dim";

function LockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9A9A8C"
      strokeWidth="2"
      className="flex-none"
      aria-label="비밀글"
    >
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10 V7 a4 4 0 0 1 8 0 V10" />
    </svg>
  );
}

export default function SupportClient() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    topic: TOPICS[0],
    msg: "",
  });
  const [error, setError] = useState("");
  const [myInquiries, setMyInquiries] = useState<Omit<Inquiry, "no">[]>([]);
  const [openFaq, setOpenFaq] = useState<number>(0);

  const inquiries: Inquiry[] = useMemo(() => {
    const mine = myInquiries.map((m, i) => ({
      ...m,
      no: BASE_NO + myInquiries.length - i,
    }));
    return [...mine, ...BASE_INQUIRIES];
  }, [myInquiries]);

  const set =
    (key: keyof typeof form) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setError("");
    };

  const submit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.msg.trim()) {
      setError("성함, 연락처, 문의 내용을 모두 입력해주세요.");
      return;
    }
    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    setMyInquiries((prev) => [
      {
        title: `${form.topic} 문의드립니다`,
        writer: form.name.trim(),
        date: today,
        views: 0,
        locked: true,
      },
      ...prev,
    ]);
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", phone: "", topic: TOPICS[0], msg: "" });
    setError("");
  };

  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-[clamp(100px,15vh,160px)] sm:px-8 lg:px-14">
      {/* 문의하기 + 연락처 */}
      <div className="mb-[clamp(88px,13vh,150px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-[clamp(40px,6vw,96px)]">
        <Reveal>
          <SectionLabel className="mb-6">문의하기</SectionLabel>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="border border-ink px-8 py-10 text-center"
            >
              <p className="mb-2 text-[17px] font-bold text-ink">
                문의가 접수되었습니다
              </p>
              <p className="mb-6 text-sm font-light leading-[1.8] text-body">
                영업일 기준 1–2일 내에 답변드리겠습니다.
              </p>
              <button
                type="button"
                onClick={reset}
                className="border border-ink px-6 py-3 text-[13px] font-medium tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-white"
              >
                새 문의 작성
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="grid border-t border-ink"
            >
              <div className="grid grid-cols-2">
                <input
                  value={form.name}
                  onChange={set("name")}
                  placeholder="성함"
                  className={`${inputCls} border-r`}
                />
                <input
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="연락처"
                  className={`${inputCls} pl-[18px]`}
                />
              </div>
              <select
                value={form.topic}
                onChange={set("topic")}
                className={inputCls}
              >
                {TOPICS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <textarea
                value={form.msg}
                onChange={set("msg")}
                placeholder="문의 내용을 입력해주세요"
                rows={6}
                className={`${inputCls} resize-y leading-[1.8]`}
              />
              {error && (
                <p className="mt-3.5 text-[13px] text-[#A8502E]">{error}</p>
              )}
              <button
                type="submit"
                className="mt-7 bg-ink px-4 py-[18px] text-sm font-medium tracking-[0.14em] text-white transition-colors hover:bg-moss"
              >
                문의 보내기 →
              </button>
            </form>
          )}
        </Reveal>
        <Reveal>
          <SectionLabel className="mb-6">연락처</SectionLabel>
          <div className="border-t border-ink">
            {CONTACT_ROWS.map(([k, v]) => (
              <div
                key={k}
                className="flex gap-6 border-b border-line py-4 text-[15px]"
              >
                <span className="w-14 flex-none font-medium text-ink">{k}</span>
                <span className="font-light text-body">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Placeholder
              label="placeholder — 오시는 길 지도"
              ratioClass="aspect-video"
            />
          </div>
        </Reveal>
      </div>

      {/* 문의 내역 */}
      <div className="mb-[clamp(88px,13vh,150px)]">
        <Reveal className="mb-7 flex items-baseline justify-between gap-4">
          <SectionLabel>문의 내역</SectionLabel>
          <span className="text-xs tabular-nums text-dim">
            총 {BASE_NO + myInquiries.length}건
          </span>
        </Reveal>
        <div className="overflow-x-auto">
          <div className="min-w-[640px] border-t border-ink">
            <div className="grid grid-cols-[64px_1fr_130px_110px_64px] gap-3 border-b border-ink py-3.5 text-xs font-medium tracking-[0.12em] text-dim">
              <span>번호</span>
              <span className="text-center">제목</span>
              <span className="text-center">글쓴이</span>
              <span className="text-center">날짜</span>
              <span className="text-right">조회수</span>
            </div>
            <Stagger>
              {inquiries.map((iq) => (
                <StaggerItem key={`${iq.no}-${iq.title}`}>
                  <div className="grid cursor-pointer grid-cols-[64px_1fr_130px_110px_64px] items-center gap-3 border-b border-line py-[18px] text-[14.5px] transition-[padding-left] duration-300 hover:pl-2.5">
                    <span className="text-[13px] tabular-nums text-dim">
                      {iq.no}
                    </span>
                    <span className="flex min-w-0 items-center gap-2 text-ink">
                      <span className="truncate">{iq.title}</span>
                      {iq.locked && <LockIcon />}
                    </span>
                    <span className="truncate text-center text-[13.5px] font-light text-body">
                      {iq.writer}
                    </span>
                    <span className="text-center text-[13px] tabular-nums text-dim">
                      {iq.date}
                    </span>
                    <span className="text-right text-[13px] tabular-nums text-dim">
                      {iq.views}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
        <p className="mt-3.5 text-[12.5px] font-light text-dim">
          잠금 표시된 글은 비밀글입니다. 작성자와 관리자만 확인할 수 있습니다.
        </p>
      </div>

      {/* FAQ */}
      <Reveal>
        <div className="grid grid-cols-12 gap-6">
          <SectionLabel className="col-span-12 lg:col-span-2">
            자주 묻는 질문
          </SectionLabel>
          <div className="col-span-12 border-t border-ink lg:col-span-9">
            {FAQS.map((fq, i) => {
              const open = openFaq === i;
              return (
                <div key={fq.q} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-1 py-[22px] text-left text-base font-medium text-ink transition-colors hover:text-moss"
                    aria-expanded={open}
                  >
                    <span>{fq.q}</span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-none text-xl font-light text-moss"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[640px] px-1 pb-[26px] text-[14.5px] font-light leading-loose text-body">
                          {fq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
