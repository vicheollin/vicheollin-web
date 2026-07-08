import Link from "next/link";
import { NAV } from "@/lib/data";
import { Reveal } from "./motion";
import { InstagramIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-[#8F948A]">
      <Reveal kind="fade">
        <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-[clamp(56px,9vh,96px)] sm:px-8 lg:px-14">
          <p className="mb-[clamp(40px,7vh,72px)] text-[clamp(40px,7vw,104px)] font-black leading-none tracking-[-0.04em] text-white">
            VICHEOLLIN
          </p>
          <div className="mb-12 flex flex-wrap justify-between gap-10">
            <div className="flex max-w-[560px] flex-wrap gap-x-5 gap-y-0.5">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap py-1.5 text-[13px] font-light text-[#8F948A] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-fit items-center justify-center p-2 text-white transition-colors hover:text-[#9DB894]"
            >
              <InstagramIcon size={21} />
            </a>
          </div>
          <div className="grid gap-1.5 border-t border-white/[0.14] pt-8 text-[12.5px] font-light leading-[1.9]">
            <p>
              상호명 : 주식회사 비체올린 &nbsp;|&nbsp; 대표자 : 강정훈
              &nbsp;|&nbsp; 사업자등록번호 : 736-88-00499
            </p>
            <p>주소 : 제주특별자치도 제주시 한경면 판포리 725-1</p>
            <p>TEL. 064-773-0000 &nbsp;|&nbsp; FAX. 064-773-5678</p>
            <p className="mt-4 text-[11px] tracking-[0.1em] text-[#5E635A]">
              COPYRIGHT 2015 THE VICHEOLLIN. ALL RIGHTS RESERVED. &nbsp;·&nbsp;
              DESIGNED BY JEJUWEBPLAN
            </p>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
