"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/data";
import { InstagramIcon } from "./ui";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] border-b border-line-soft bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
        <Link href="/" className="flex items-baseline gap-2.5 py-2.5">
          <span className="text-[17px] font-black tracking-[-0.01em] text-ink">
            비체올린
          </span>
          <span className="text-[10px] font-medium tracking-[0.26em] text-dim">
            VICHEOLLIN
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-0.5">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap border-b-2 px-[11px] py-2 text-[13px] transition-colors hover:text-ink ${
                  active
                    ? "border-moss font-bold text-ink"
                    : "border-transparent font-normal text-mute"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="ml-3.5 flex items-center justify-center p-2 text-ink transition-colors hover:text-moss"
          >
            <InstagramIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
