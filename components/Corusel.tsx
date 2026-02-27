"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState, useRef } from "react";

const slides = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

export default function Carousel() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplayRef.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      {/* viewport */}
      <div className="overflow-hidden rounded-2xl w-full" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, i) => (
            <div
              className="
                min-w-full
                relative
                aspect-[16/9]
              "
              key={i}
            >
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* left arrow */}
      <button
        onClick={scrollPrev}
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          h-10 w-10 rounded-full
          bg-white/80 hover:bg-white
          dark:bg-black/60 dark:hover:bg-black/80
          backdrop-blur
          flex items-center justify-center
          transition
          z-10
        "
      >
        ‹
      </button>

      {/* right arrow */}
      <button
        onClick={scrollNext}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          h-10 w-10 rounded-full
          bg-white/80 hover:bg-white
          dark:bg-black/60 dark:hover:bg-black/80
          backdrop-blur
          flex items-center justify-center
          transition
          z-10
        "
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`
              h-2.5 w-2.5 rounded-full transition-all duration-300
              ${
                i === selectedIndex
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
