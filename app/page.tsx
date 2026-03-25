import Image from "next/image";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import Link from "next/link";
import StoryImage from "@/components/motionImage";

// Sections
import KPISection from "@/components/KPISection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUs from "@/components/WhyWe";
import TeachersCard from "@/components/TeachersCard";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import PartnersSection from "@/components/PartnersSection";

// Data
import { teachers } from "@/lib/data/teachers";

/* ================= HERO (client island) ================= */
import HeroSection from "@/components/HeroSection";

/* ================= PAGE ================= */

export default function HomePage() {
  return (
    <main className="bg-zinc-50 dark:bg-black font-sans overflow-hidden">
      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= KPI ================= */}
      <KPISection />

      {/* ================= ABOUT ================= */}
      <AboutSection />

      {/* ================= PROGRAMS ================= */}
      <ProgramsSection />

      {/* ================= WHY US ================= */}
      <section className="custom-container">
        <WhyChooseUs />
      </section>

      {/* ================= TEACHERS ================= */}
      <section className="custom-container py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Bizning ustozlar</h2>
          <p className="text-zinc-500">Tajribali professor va mutaxassislar</p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {teachers.map((teacher) => (
            <TeachersCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <AchievementsSection />

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialsSection />

      {/* ================= EVENTS ================= */}
      <EventsSection />

      {/* ================= PARTNERS ================= */}
      <PartnersSection />
    </main>
  );
}
