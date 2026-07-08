"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { STRIPES } from "@/lib/stripes";

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Shared in-view trigger: fire once when 12% of the element is visible. */
const VIEWPORT = { once: true, amount: 0.12 } as const;

type RevealKind = "up" | "fade" | "mask";

interface RevealProps {
  children: ReactNode;
  kind?: RevealKind;
  delay?: number;
  className?: string;
}

const variantsFor = (kind: RevealKind, delay: number): Variants => {
  if (kind === "mask") {
    return {
      hidden: { clipPath: "inset(0 0 100% 0)", y: 26, scale: 1.05 },
      show: {
        clipPath: "inset(0 0 0% 0)",
        y: 0,
        scale: 1,
        transition: { duration: 1.1, ease: EASE, delay },
      },
    };
  }
  if (kind === "fade") {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 1.1, delay } },
    };
  }
  return {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: EASE, delay },
    },
  };
};

/** Scroll-triggered reveal. kind: "up" (fade+slide), "fade", "mask" (image clip reveal). */
export function Reveal({
  children,
  kind = "up",
  delay = 0,
  className,
}: RevealProps) {
  // The observed element must stay unclipped: IntersectionObserver counts the
  // clip-path'd area, so a fully-clipped "hidden" state would never enter view.
  // For "mask", observe the outer div and let the variant animate an inner child.
  if (kind === "mask") {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.div variants={variantsFor("mask", delay)}>
          {children}
        </motion.div>
      </motion.div>
    );
  }
  return (
    <motion.div
      className={className}
      variants={variantsFor(kind, delay)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its <StaggerItem> children by 110ms. */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11 } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  kind = "up",
  className,
}: {
  children: ReactNode;
  kind?: RevealKind;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={variantsFor(kind, 0)}>
      {children}
    </motion.div>
  );
}

/**
 * Full-bleed hero band: parallax (background moves slower than content)
 * + very slow Ken Burns zoom. Replace the stripes div with <Image fill /> when
 * real photography/video is available.
 */
export function ParallaxBleed({
  label,
  tone = "green",
  className = "h-[64vh] min-h-[420px]",
  scrollHint = false,
}: {
  label: string;
  tone?: keyof typeof STRIPES;
  className?: string;
  scrollHint?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[12%]">
        <div
          className="absolute inset-0 animate-kenburns"
          style={{ background: STRIPES[tone] }}
        />
      </motion.div>
      <div className="absolute bottom-6 left-5 bg-white/85 px-3 py-[7px] font-mono text-[11px] text-[#4B5244] sm:left-8 lg:left-14">
        {label}
      </div>
      {scrollHint && (
        <div className="absolute bottom-6 right-5 bg-white/85 px-3 py-[7px] text-[11px] font-medium tracking-[0.24em] text-[#4B5244] sm:right-8 lg:right-14">
          SCROLL ↓
        </div>
      )}
    </section>
  );
}
