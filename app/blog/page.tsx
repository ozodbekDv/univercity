"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Flame } from "lucide-react";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";

const blogData = [
  {
    id: 1,
    title: "Statistika bugun nima uchun muhim?",
    slug: "statistika-bugun-nima-uchun-muhim",
    category: "Statistika & Data",
    excerpt:
      "Zamonaviy iqtisodiyotda statistika qaror qabul qilishning asosiy quroliga aylanmoqda.",
    cover: "/blog/statistika.jpg",
    readTime: "5 daqiqa",
    publishedAt: "2026-01-20",
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 2,
    title: "Fintech: moliyaning kelajagi",
    slug: "fintech-moliyaning-kelajagi",
    category: "Moliya & Fintech",
    excerpt:
      "Raqamli to‘lovlar, blockchain va moliyaviy texnologiyalar bozori qanday o‘zgaradi?",
    cover: "/blog/fintech.jpg",
    readTime: "6 daqiqa",
    publishedAt: "2026-01-18",
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 3,
    title: "HR menejer qanday ko‘nikmalarga ega bo‘lishi kerak?",
    slug: "hr-menejer-konikmalar",
    category: "HR & Karyera",
    excerpt:
      "Zamonaviy HR mutaxassis uchun soft va hard skill’lar muvozanati muhim.",
    cover: "/blog/hr.jpg",
    readTime: "4 daqiqa",
    publishedAt: "2026-01-15",
    isFeatured: true,
    isPopular: false,
  },
];

const categories = [
  "Barchasi",
  "Iqtisodiyot",
  "Moliya & Fintech",
  "Statistika & Data",
  "HR & Karyera",
  "Talabalar uchun",
];

const featuredPosts = blogData.filter((p) => p.isFeatured);

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchesQuery = post.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === "Barchasi" || post.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  const featuredPost = blogData.find((p) => p.isFeatured);

  return (
    <main className="py-16 bg-gray-50 dark:bg-black">
      <div className="custom-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#704FE6] mb-3">
            Blog & Tahlillar
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Iqtisodiyot, moliya, statistika va HR bo‘yicha foydali maqolalar va
            tahlillar
          </p>
        </div>

        {/* Featured */}
        {featuredPosts.length > 0 && <FeaturedCarousel posts={featuredPosts} />}

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Maqola qidirish..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? "default" : "outline"}
                className={activeCategory === cat ? "bg-[#704FE6]" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-xl transition-all duration-300"
            >
              <div className="h-40 bg-gray-200 relative">
                {post.isPopular && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                    <Flame className="h-3 w-3" /> Ommabop
                  </div>
                )}
              </div>
              <CardContent className="space-y-3 p-5">
                <Badge variant="secondary" className="w-fit">
                  {post.category}
                </Badge>
                <h3 className="font-semibold leading-snug">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{post.readTime}</span>
                  <span>{post.publishedAt}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    O‘qish
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-500 mt-16">
            Maqolalar topilmadi
          </div>
        )}
      </div>
    </main>
  );
}
