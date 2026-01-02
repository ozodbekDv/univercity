"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Calendar, ArrowRight } from "lucide-react";

export function formatDate(date: string) {
  const [m, d, y] = date.split("-");
  return `${y}-${m}-${d}`; // ISO format serverga mos bo‘lsin
}

const newsData = [
  {
    id: 1,
    title: "Fakultetda yangi zamonaviy laboratoriya ochildi",
    description:
      "Iqtisodiyot fakultetida talabalar uchun zamonaviy kompyuter laboratoriyasi ishga tushirildi. Laboratoriya 50 ta zamonaviy kompyuter bilan jihozlangan.",
    image: "/news/lab.jpg",
    date: "01-15-2025",
    category: "Yangiliklar",
  },
  {
    id: 2,
    title: "Xalqaro konferensiya muvaffaqiyatli yakunlandi",
    description:
      "Fakultetimiz tomonidan uyushtirilgan 'Raqamli iqtisodiyot istiqbollari' mavzusidagi xalqaro ilmiy konferensiya o'tkazildi.",
    image: "/news/conference.jpg",
    date: "01-10-2025",
    category: "Tadbirlar",
  },
  {
    id: 3,
    title: "Talabalarimiz respublika olimpiadasida g'olib bo'ldi",
    description:
      "Fakultet talabalari iqtisodiyot bo'yicha respublika olimpiadasida 1-o'rinni qo'lga kiritishdi va universitet sharafini himoya qilishdi.",
    image: "/news/olympiad.jpg",
    date: "01-05-2025",
    category: "Yutuqlar",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 md:py-25 bg-linear-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="custom-container">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#704FE6] font-poppins mb-2">
              So'nggi Yangiliklar
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fakultetdagi eng muhim voqealar va yangiliklardan xabardor bo'ling
            </p>
          </div>
          <Link href="/news">
            <Button
              variant="outline"
              className="hidden md:flex items-center gap-2"
            >
              Barchasini ko'rish
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {newsData.map((news) => (
            <Card
              key={news.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#704FE6] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {news.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#704FE6] transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                  {news.description}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Link href={`/news/${news.id}`} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-[#704FE6] group-hover:text-white transition-colors"
                  >
                    Batafsil o'qish
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/news">
            <Button className="bg-[#704FE6] hover:bg-[#5a3ec7] text-white">
              Barchasini ko'rish
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
