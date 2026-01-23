"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const subjectsData = [
  {
    id: 1,
    title: "Mikroiqtisodiyot",
    code: "ECON101",
    description:
      "Iqtisodiy qarorlar, bozor mexanizmlari va iste'molchi xatti-harakatlari.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
  {
    id: 2,
    title: "Makroiqtisodiyot",
    code: "ECON102",
    description: "Mamlakat iqtisodiyoti, davlat siyosati va pul-kredit tizimi.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
  {
    id: 3,
    title: "Statistika asoslari",
    code: "STAT101",
    description: "Ma'lumotlar tahlili, grafiklar, regressiya va korrelyatsiya.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
  {
    id: 4,
    title: "Inson resurslarini boshqarish",
    code: "HR201",
    description:
      "Kadrlar siyosati, ishchi motivatsiyasi va mehnat qonunchiligi.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
  {
    id: 5,
    title: "Fintech va Blockchain",
    code: "FIN301",
    description:
      "Raqamli moliya, blockchain texnologiyalari va fintech ekotizimi.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
  {
    id: 6,
    title: "Marketing asoslari",
    code: "MKT101",
    description:
      "Bozor tahlili, iste'molchi xulq-atvori va reklama strategiyalari.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
  {
    id: 7,
    title: "Biznes analitika",
    code: "BA201",
    description: "Ma'lumotlar asosida qaror qabul qilish va BI vositalari.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
  {
    id: 8,
    title: "Moliyaviy boshqaruv",
    code: "FIN201",
    description: "Korporativ moliya, investitsiyalar va risklarni boshqarish.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
  {
    id: 9,
    title: "Liderlik va etakchilik",
    code: "HR301",
    description: "Jamoa boshqaruvi, motivatsiya va etakchilik ko'nikmalari.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
  {
    id: 10,
    title: "Turizm biznesi",
    code: "TOUR101",
    description: "Turizm sanoati, mehmonxona boshqaruvi va xizmat ko'rsatish.",
    duration: "1 semestr",
    level: "Bakalavr",
  },
];

export default function SubjectsPage() {
  return (
    <main className="py-20 bg-linear-to-b from-[#f8f9fa] to-[#ffffff] dark:from-black dark:to-gray-900">
      <div className="custom-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#704FE6] mb-4">
            Fanlar bo‘yicha ta’lim
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Talabalarimizga amaliy va nazariy bilim beradigan asosiy fanlar
            bilan tanishing.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjectsData.map((subject) => (
            <Card
              key={subject.id}
              className="group hover:scale-105 hover:shadow-2xl transition-transform duration-500 border-0 rounded-2xl overflow-hidden"
            >
              <div className="bg-linear-to-tr from-[#704FE6] to-[#8b5cf6] p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {subject.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 line-clamp-3">
                    {subject.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 text-xs font-medium">
                    Kod: {subject.code}
                  </span>
                  <span className="text-white/80 text-xs font-medium">
                    {subject.duration}
                  </span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-white/80 text-xs font-medium">
                    {subject.level}
                  </span>
                  <Link href={`/subjects/${subject.id}`}>
                    <Button
                      size="sm"
                      className="bg-white text-[#704FE6] hover:bg-yellow-300 hover:text-white transition-colors"
                    >
                      Batafsil
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
