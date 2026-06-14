"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/components/ui/home/Reveal";

type CounterProps = {
  target: number;
  suffix?: string;
};

export function Counter({ target, suffix = "+" }: CounterProps) {
  const { ref, visible } = useReveal();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));

      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [visible, target]);

  const fmt = target >= 1000 ? `${Math.round(val / 1000)}K` : String(val);

  return <span ref={ref}>{fmt}{suffix}</span>;
}