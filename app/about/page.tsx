"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Target,
  Briefcase,
  Building2,
} from "lucide-react";
import Link from "next/link";
import PartnersSection from "@/components/PartnersSection";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-black">
      {/* HERO */}
      <section className="py-20 bg-linear-to-r from-[#704FE6] to-indigo-600 text-white">
        <div className="custom-container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Zamonaviy iqtisodiy ta’lim maskani
          </h1>
          <p className="text-white/90 text-lg">
            Biz iqtisodiyot, moliya, statistika va inson resurslari
            yo‘nalishlarida bozor talablariga mos, amaliy bilimga ega
            mutaxassislarni tayyorlaymiz.
          </p>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-20">
        <div className="custom-container grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Target className="mx-auto h-8 w-8 text-[#704FE6]" />
              <h3 className="font-semibold text-lg">Missiyamiz</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Talabalarga real hayotda ishlaydigan bilim va ko‘nikmalar
                berish.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <GraduationCap className="mx-auto h-8 w-8 text-[#704FE6]" />
              <h3 className="font-semibold text-lg">Vizyonimiz</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Markaziy Osiyoda yetakchi iqtisodiy ta’lim markaziga aylanish.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Users className="mx-auto h-8 w-8 text-[#704FE6]" />
              <h3 className="font-semibold text-lg">Qadriyatlarimiz</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Sifat, shaffoflik va natijaga yo‘naltirilganlik.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="custom-container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nima uchun aynan biz?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Zamonaviy o‘quv dasturlari",
              "Amaliy mashg‘ulotlar",
              "Tajribali ustozlar",
              "Talab yuqori yo‘nalishlar",
              "Ishga yo‘naltirish",
              "Shaffof tizim",
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <Briefcase className="mx-auto h-7 w-7 text-[#704FE6] mb-3" />
                  <p className="font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="custom-container grid md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Talabalar", value: "1200+" },
            { label: "Professorlar", value: "50+" },
            { label: "Yo‘nalishlar", value: "6+" },
            { label: "Ishga joylashish", value: "85%" },
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-[#704FE6]">
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* ================= PARTNERS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <PartnersSection />
      </motion.section>

      {/* CTA */}
      <section className="py-20">
        <div className="custom-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Kelajagingizni bugun boshlang
          </h2>
          <div className="flex justify-center gap-4">
            <Link href="/programs">
              <Button className="bg-[#704FE6] hover:bg-[#5a3ec7]">
                Ta’lim yo‘nalishlari
              </Button>
            </Link>
            <Link href="/admission">
              <Button variant="outline">Qabul haqida</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
