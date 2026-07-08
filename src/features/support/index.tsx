import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import SupportClient from "./components/SupportClient";

export const metadata: Metadata = { title: "고객센터 — 비체올린" };

export default function SupportPage() {
  return (
    <div>
      <PageHeader
        label="08 — SUPPORT"
        title="고객센터"
        lede="궁금한 점이 있으신가요? 무엇이든 물어보세요."
      />
      <SupportClient />
    </div>
  );
}
