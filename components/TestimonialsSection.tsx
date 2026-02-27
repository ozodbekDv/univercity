"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aziza Karimova",
    role: "JPMorgan analitik",
    image: "/testimonials/student1.jpg",
    text: "Bu fakultet hayotimni o'zgartirdi.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sardor Usmonov",
    role: "Startup founder",
    image: "/testimonials/student2.jpg",
    text: "Startup boshlashimga katta yordam berdi.",
    rating: 5,
  },
  {
    id: 3,
    name: "Malika Rahimova",
    role: "Fintech magistrant",
    image: "/testimonials/student3.jpg",
    text: "Amaliy bilimlar juda kuchli.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jasur Toshmatov",
    role: "Bank specialist",
    image: "/testimonials/student4.jpg",
    text: "Real ish uchun tayyorlaydi.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-linear-to-br from-[#704FE6]/5 to-purple-50 overflow-hidden">
      <div className="custom-container">
        <h2 className="text-center text-4xl font-bold text-[#704FE6] mb-12">
          Talabalar fikri
        </h2>

        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {duplicated.map((item, i) => (
              <Card
                key={i}
                className="min-w-[350px] max-w-[350px] shrink-0 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <Quote className="text-[#704FE6] opacity-40 mb-4" />

                  <p className="italic mb-4">"{item.text}"</p>

                  <div className="flex mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 border-t pt-3">
                    <Avatar>
                      <AvatarImage src={item.image} />
                      <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* animation style */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
