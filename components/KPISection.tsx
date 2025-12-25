"use client";
import { useEffect, useRef, useState } from "react";

type KPI = {
  value: number;
  label: string;
};

const kpis: KPI[] = [
  { value: 8, label: "Kafedralar" },
  { value: 45, label: "PhD / DSc (%)" },
  { value: 12, label: "Xalqaro hamkorlar" },
  { value: 300, label: "Ilmiy ishlar" },
];

export default function KPISection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="mx-auto max-w-6xl grid grid-cols-2 gap-6 md:grid-cols-4">
        {kpis.map((kpi) => (
          <KPIItem
            key={kpi.label}
            value={kpi.value}
            label={kpi.label}
            start={isVisible}
          />
        ))}
      </div>
    </section>
  );
}

type KPIItemProps = {
  value: number;
  label: string;
  start: boolean;
};

function KPIItem({ value, label, start }: KPIItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1200;
    const step = Math.max(Math.floor(duration / value), 20);

    const interval = window.setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= value) window.clearInterval(interval);
    }, step);

    return () => window.clearInterval(interval);
  }, [start, value]);

  return (
    <div className="rounded-2xl bg-[#704FE6] p-8 text-center shadow-sm transition hover:shadow-md">
      <div className="text-4xl font-bold text-white">
        {count}
        {label.includes("%") && "%"}
        {label === "Ilmiy ishlar" && "+"}
      </div>
      <p className="mt-2 text-sm font-medium text-white">{label}</p>
    </div>
  );
}
