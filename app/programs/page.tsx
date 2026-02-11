"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const programsData = [
  {
    id: 1,
    title: "Iqtisodiyot",
    code: "5230100",
    degree: "Bakalavr",
    duration: "4 yil",
    students: "120+ talaba",
    description:
      "Zamonaviy iqtisodiy nazariya va amaliyotni o'rganish. Mikroiqtisodiyot, makroiqtisodiyot, moliya va bank ishi.",
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
    language: "O'zbek",
  },
  {
    id: 2,
    title: "Moliya va moliyaviy texnologiyalar",
    code: "5230400",
    degree: "Bakalavr",
    duration: "4 yil",
    students: "100+ talaba",
    description:
      "Moliyaviy boshqaruv, investitsiyalar, blockchain va raqamli to'lov tizimlari. Zamonaviy fintech yo'nalishi.",
    icon: "💰",
    color: "from-green-500 to-emerald-500",
    language: "O'zbek",
  },
  {
    id: 3,
    title: "Turizm va mehmonxona xo'jaligi",
    code: "5811000",
    degree: "Bakalavr",
    duration: "4 yil",
    students: "80+ talaba",
    description:
      "Turizm industriyasi boshqaruvi, mehmonxona biznesi va xizmat ko'rsatish sanoati.",
    icon: "✈️",
    color: "from-purple-500 to-pink-500",
    language: "O'zbek",
  },
  {
    id: 4,
    title: "Iqtisodiyot (tarmoqlar va sohalar bo'yicha)",
    code: "7011001",
    degree: "Magistr",
    duration: "2 yil",
    students: "50+ magistrant",
    description:
      "Chuqur iqtisodiy tadqiqotlar, tarmoq iqtisodiyoti va ilmiy izlanishlar.",
    icon: "🎓",
    color: "from-orange-500 to-red-500",
    language: "O'zbek",
  },
  {
    id: 5,
    title: "Statistika",
    code: "5230200",
    degree: "Bakalavr",
    duration: "4 yil",
    students: "90+ talaba",
    description:
      "Ma'lumotlarni yig‘ish, tahlil qilish va modellashtirish. Statistika, ehtimollar nazariyasi, data analysis va iqtisodiy prognozlash.",
    icon: "📈",
    color: "from-teal-500 to-lime-500",
    language: "O'zbek",
  },
  {
    id: 6,
    title: "Inson resurslarini boshqarish (HR)",
    code: "5230900",
    degree: "Bakalavr",
    duration: "4 yil",
    students: "70+ talaba",
    description:
      "Kadrlar boshqaruvi, motivatsiya tizimlari, mehnat huquqi, performance management va zamonaviy HR-analitika.",
    icon: "👥",
    color: "from-fuchsia-500 to-violet-600",
    language: "O'zbek",
  },
  {
    id: 7,
    title: "Mintaqaviy iqtisodiyot",
    code: "5230902",
    degree: "Bakalavr",
    duration: "4 yil",
    students: "70+ talaba",
    description:
      "Kadrlar boshqaruvi, motivatsiya tizimlari, mehnat huquqi, performance management va zamonaviy HR-analitika.",
    icon: "🗺️",
    color: "from-fuchsia-500 to-violet-600",
    language: "O'zbek",
  },
];

export default function ProgramsPage() {
  const [query, setQuery] = useState("");
  const [degreeFilter, setDegreeFilter] = useState<
    "All" | "Bakalavr" | "Magistr"
  >("All");

  const filteredPrograms = useMemo(() => {
    return programsData.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      const matchesDegree = degreeFilter === "All" || p.degree === degreeFilter;
      return matchesQuery && matchesDegree;
    });
  }, [query, degreeFilter]);

  return (
    <main className="py-16 ">
      <div className="custom-container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#704FE6] mb-4">
            Ta'lim Yo'nalishlari
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Bakalavr va magistratura yo'nalishlari, o'qish muddati, tillari va
            asosiy yo'nalishlari bilan batafsil tanishing.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Yo'nalish nomi bo'yicha qidirish..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            {(["All", "Bakalavr", "Magistr"] as const).map((d) => (
              <Button
                key={d}
                variant={degreeFilter === d ? "default" : "outline"}
                className={degreeFilter === d ? "bg-[#704FE6]" : ""}
                onClick={() => setDegreeFilter(d)}
              >
                {d === "All" ? "Barchasi" : d}
              </Button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <Card
              key={program.id}
              className="relative overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${program.color}`}
              />

              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{program.icon}</div>
                  <Badge
                    variant="secondary"
                    className="text-[#704FE6] bg-[#704FE6]/10"
                  >
                    {program.degree}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-xs text-gray-500">Kod: {program.code}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {program.description}
                </p>

                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="flex flex-col items-center">
                    <Clock className="h-4 w-4 text-[#704FE6] mb-1" />
                    {program.duration}
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="h-4 w-4 text-[#704FE6] mb-1" />
                    {program.students}
                  </div>
                  <div className="flex flex-col items-center">
                    <BookOpen className="h-4 w-4 text-[#704FE6] mb-1" />
                    {program.language}
                  </div>
                </div>

                <Link href={`/programs/${program.id}`}>
                  <Button className="w-full bg-[#704FE6] hover:bg-[#5a3ec7]">
                    Batafsil ko'rish
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filteredPrograms.length === 0 && (
          <div className="text-center text-gray-500 mt-16">
            Hech qanday yo'nalish topilmadi
          </div>
        )}
      </div>
    </main>
  );
}
