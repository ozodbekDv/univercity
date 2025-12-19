"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = ["/images/slide1.jpg", "/images/slide2.jpg"];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      {/* viewport */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, i) => (
            <div className="min-w-full relative h-[420px]" key={i}>
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="
    absolute left-4 top-1/2 -translate-y-1/2
    h-10 w-10 rounded-full backdrop-blur
    bg-white/80 text-black
    hover:bg-white
    dark:bg-black/60 dark:text-white
    dark:hover:bg-black/80
    transition
  "
      >
        ‹
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="
    absolute left-4 top-1/2 -translate-y-1/2
    h-10 w-10 rounded-full backdrop-blur
    bg-white/80 text-black
    hover:bg-white
    dark:bg-black/60 dark:text-white
    dark:hover:bg-black/80
    transition
  "
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === selectedIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
