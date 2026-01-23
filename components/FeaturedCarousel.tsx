"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FeaturedCarousel({ posts }: { posts: any[] }) {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    if (posts.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % posts.length);
    }, 5000); // 5 sec

    return () => clearInterval(interval);
  }, [posts.length]);

  const prev = () => setIndex((i) => (i === 0 ? posts.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === posts.length - 1 ? 0 : i + 1));

  return (
    <div className="mb-14 relative overflow-hidden rounded-xl">
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {posts.map((post) => (
          <Card key={post.id} className="min-w-full border-0 rounded-none">
            <div className="grid md:grid-cols-2 h-[260px] md:h-80">
              {/* LEFT */}
              <div className="bg-linear-to-r from-[#704FE6] to-indigo-500 p-8 text-white flex flex-col justify-center">
                <Badge className="mb-3 w-fit bg-white text-[#704FE6]">
                  Tavsiya etiladi
                </Badge>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-white/90 mb-5 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`}>
                  <Button variant="secondary" className="w-fit">
                    O‘qish
                  </Button>
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hidden md:block bg-gray-200 relative">
                {/* keyin image qo‘shiladi */}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CONTROLS */}
      {posts.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow"
          >
            <ChevronLeft className="h-5 w-5 text-[#704FE6]" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow"
          >
            <ChevronRight className="h-5 w-5 text-[#704FE6]" />
          </button>
        </>
      )}

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {posts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
