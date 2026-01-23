import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-25 bg-white dark:bg-black" id="about">
      <div className="custom-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-main.jpg"
                alt="Fakultet binosi"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-900 hidden md:block">
              <Image
                src="/images/talabalar.jpg"
                alt="Talabalar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-[#704FE6] font-semibold text-sm uppercase tracking-wider">
                Fakultet haqida
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800 dark:text-gray-200 font-poppins">
                Zamonaviy Ta'lim va Kuchli Kelajak
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Iqtisodiyot fakulteti 1998-yilda tashkil etilgan bo'lib, bugungi
                kunda O'zbekistonning eng yetakchi iqtisodiy ta'lim
                markazlaridan biri hisoblanadi. Biz zamonaviy bilim va amaliy
                ko'nikmalarni birlashtirgan holda talabalarimizni raqobatbardosh
                kadrlar sifatida tayyorlaymiz.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-2 hover:border-[#704FE6] transition-all">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#704FE6]/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#704FE6]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      2000+
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Talabalar
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#704FE6] transition-all">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#704FE6]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#704FE6]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      150+
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      O'qituvchilar
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#704FE6] transition-all">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#704FE6]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#704FE6]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      25+
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Yillik tajriba
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#704FE6] transition-all">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#704FE6]/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#704FE6]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      95%
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Bandlik
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#704FE6]/10 flex items-center justify-center -shrink-0 mt-1">
                  <span className="text-[#704FE6] text-sm">✓</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Zamonaviy kompyuter laboratoriyalari va o'quv xonalar
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#704FE6]/10 flex items-center justify-center -shrink-0 mt-1">
                  <span className="text-[#704FE6] text-sm">✓</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Xalqaro hamkorlik va talaba almashinuv dasturlari
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#704FE6]/10 flex items-center justify-center -shrink-0 mt-1">
                  <span className="text-[#704FE6] text-sm">✓</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Amaliyot va stajirovka imkoniyatlari yetakchi kompaniyalarda
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/about">
                <Button className="bg-[#704FE6] hover:bg-[#5a3ec7] text-white px-8">
                  Batafsil ma'lumot
                </Button>
              </Link>
              <Link href="/admission">
                <Button
                  variant="outline"
                  className="border-[#704FE6] text-[#704FE6] hover:bg-[#704FE6] hover:text-white px-8"
                >
                  Qabul 2025
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
