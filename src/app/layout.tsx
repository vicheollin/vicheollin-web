import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/lib/query/providers";
import "@fontsource-variable/noto-sans-kr";
import "@fontsource-variable/noto-serif-kr";
import "./globals.css";

export const metadata: Metadata = {
  title: "비체올린 — 제주 힐링카약파크",
  description:
    "국내 최초의 힐링카약파크. 제주 한경의 숲과 수로 위에서 카약을 젓고, 바람을 달리고, 천천히 걷습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
