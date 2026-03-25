"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";
import StoryImage from "@/components/motionImage";

export default function HeroSection() {
  return (
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
            <Link
              href="/admission"
              className="rounded-full px-8 py-2 text-white bg-[#704FE6] transition hover:scale-[1.03] hover:shadow-xl"
            >
              Qabulga ariza
            </Link>
            <Link href="/programs" className="rounded-full px-8 py-2 border">
              Yo'nalishlar
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <StoryImage />

          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 rounded-2xl px-5 py-3 shadow-lg text-sm">
            🎓 10+ ta zamonaviy dastur
          </div>
        </motion.div>
      </div>
    </section>
  );
}
