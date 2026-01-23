"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Sections
import KPISection from "@/components/KPISection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUs from "@/components/WhyWe";
import TeachersCard from "@/components/TeachersCard";
import AchievementsSection from "@/components/AchievementsSection";
import CareerSection from "@/components/CareerSection";
import NewsSection from "@/components/NewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CtaSection";
import { stagger, fadeUp } from "@/lib/animations";

/* ================= DATA ================= */

export const teachers = [
  {
    name: "Xonkeldiyeva Goʻzal Sherovna",
    position: "Fakultet dekani",
    degree: "Iqtisodiyot fanlari doktori, Professor",
    specialization: "Iqtisodiyot va boshqaruv",
    experience: "25+ yil akademik va boshqaruv tajribasi",
    image: "/teachers/dekan.jpg",
    email: "honkeldiyeva@mail.ru",
    profileUrl: "/teachers/xonkeldiyeva-gozal-sherovna",
  },
  {
    name: "Mirsodiqov Abdulla Tursunaliyevich",
    position: "Ilmiy ishlar va innovatsiyalar bo‘yicha dekan o‘rinbosari",
    degree: "Iqtisodiyot fanlari bo‘yicha falsafa doktori (PhD)",
    specialization: "Ilmiy ishlar va innovatsiyalar",
    experience: "5+ yil akademik faoliyat",
    image: "/teachers/abdulla-mirsodiqov.jpg",
    email: "",
    profileUrl: "/teachers/mirsodiqov-abdulla-tursunaliyevich",
  },
  {
    name: "Elyor Xamidov",
    position: "O'quv bo'limi bo‘yicha dekan o‘rinbosari",
    degree: "Iqtisodiyot fanlari bo‘yicha falsafa doktori (PhD)",
    specialization: "Ilmiy ishlar va innovatsiyalar",
    experience: "5+ yil akademik faoliyat",
    image: "/teachers/elyor-teacher.jpg",
    email: "",
    profileUrl: "/teachers/elyor-xamidov",
  },
  {
    name: "Nematova Shaxlo Egamberdiyevna",
    position: "Xotin-qizlar masalalari bo‘yicha dekan maslahatchisi",
    degree: "",
    specialization: "Xotin-qizlar masalalari",
    experience: "Uzun yillik tajriba",
    image: "/teachers/nematova.jpg",
    email: "",
    profileUrl: "/teachers/nematova-shaxlo-egamberdiyevna",
  },
  {
    name: "Mirzayev Abdullajon Topilovich",
    position: "“Iqtisodiyot va Turizm” kafedrasi mudiri",
    degree: "Iqtisodiyot fanlari doktori, Professor",
    specialization: "Iqtisodiyot va turizm",
    experience: "20+ yil akademik faoliyat",
    image: "/teachers/mirzayev.jpg",
    email: "abdubehr@mail.ru",
    profileUrl: "/teachers/mirzayev-abdullajon-topilovich",
  },
  {
    name: "Jo‘rayeva Nodiraxon Qurbonovna",
    position: "Kafedra mudiri",
    degree: "Iqtisodiyot fanlari bo‘yicha falsafa doktori (PhD)",
    specialization: "Iqtisodiyot",
    experience: "Ko‘p yillik akademik faoliyat",
    image: "/teachers/jorayeva.jpg",
    email: "nodiraxonnum1@gmail.com",
    profileUrl: "/teachers/jorayeva-nodiraxon-qurbonovna",
  },
];

/* ================= PAGE ================= */

export default function HomePage() {
  return (
    <main className="bg-zinc-50 dark:bg-black font-sans overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-[#704FE6]/20 via-transparent to-[#17254E]/30" />

        <div className="custom-container relative grid md:grid-cols-2 gap-12 items-center py-28">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <span className="w-fit rounded-full bg-[#704FE6]/10 text-[#704FE6] px-4 py-1 text-sm font-medium">
              🚀 Yetakchi fakultet
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Iqtisodiyot <br />
              <span className="text-[#704FE6]">kelajagi</span>{" "}
            </h1>

            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
              Biz real bozor talabiga mos, zamonaviy iqtisodchi va raqamli
              menejerlarni tayyorlaymiz.
            </p>

            <div className="flex gap-4">
              <Button className="rounded-full px-8 bg-[#704FE6] transition hover:scale-[1.03] hover:shadow-xl">
                Qabulga ariza
              </Button>
              <Button variant="outline" className="rounded-full px-8">
                Yo‘nalishlar
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <Image
              src="/images/slide1.jpg"
              alt="faculty"
              width={600}
              height={420}
              className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 rounded-2xl px-5 py-3 shadow-lg text-sm">
              🎓 10+ ta zamonaviy dastur
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= KPI ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <KPISection />
      </motion.section>

      {/* ================= ABOUT ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutSection />
      </motion.section>

      {/* ================= PROGRAMS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ProgramsSection />
      </motion.section>

      {/* ================= WHY US ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="custom-container"
      >
        <WhyChooseUs />
      </motion.section>

      {/* ================= TEACHERS ================= */}
      <section className="custom-container py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Bizning ustozlar</h2>
          <p className="text-zinc-500">Tajribali professor va mutaxassislar</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 sm:grid-cols-2 gap-8"
        >
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <TeachersCard teacher={teacher} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AchievementsSection />
      </motion.section>

      {/* ================= CAREER ================= */}
      {/* <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CareerSection />
      </motion.section> */}

      {/* ================= NEWS ================= */}
      {/* <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <NewsSection />
      </motion.section> */}

      {/* ================= TESTIMONIALS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <TestimonialsSection />
      </motion.section>

      {/* ================= EVENTS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <EventsSection />
      </motion.section>

      {/* ================= PARTNERS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <PartnersSection />
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <CTASection />
      </motion.section>
    </main>
  );
}
