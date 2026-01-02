"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const testimonialsData = [
  {
    id: 1,
    name: "Aziza Karimova",
    role: "Bitiruvchi 2023, hozir JPMorgan Chase analitik",
    image: "/testimonials/student1.jpg",
    text: "Fakultet menga nafaqat nazariy bilim, balki amaliy ko'nikmalar ham berdi. Professorlar har doim yordam berishga tayyor edi. Hozir xalqaro kompaniyada ishlayapman.",
    rating: 5,
    year: "2023",
  },
  {
    id: 2,
    name: "Sardor Usmonov",
    role: "4-kurs talabasi, Iqtisodiyot",
    image: "/testimonials/student2.jpg",
    text: "Fakultetdagi zamonaviy laboratoriyalar va amaliyot dasturlari menga kelajakdagi kasbimga tayyorlanishda katta yordam bermoqda. Startup loyihamni ishlab chiqyapman.",
    rating: 5,
    year: "2024",
  },
  {
    id: 3,
    name: "Malika Rahimova",
    role: "Magistrant, Moliya va fintech",
    image: "/testimonials/student3.jpg",
    text: "Magistratura dasturi juda chuqur va amaliy yo'naltirilgan. Xalqaro tajriba almashish dasturlarida qatnashish imkoniyati ham mavjud.",
    rating: 5,
    year: "2024",
  },
  {
    id: 4,
    name: "Jasur Toshmatov",
    role: "Bitiruvchi 2022, bankda moliyaviy mutaxassis",
    image: "/testimonials/student4.jpg",
    text: "Fakultetda o'rgangan bilimlarimni har kuni ishimda qo'llayman. Ustozlarimizning tajribasi va yo'l-yo'riqlari juda qimmatli bo'ldi.",
    rating: 5,
    year: "2022",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-25 bg-linear-to-br from-[#704FE6]/5 to-purple-50 dark:from-[#704FE6]/10 dark:to-black">
      <div className="custom-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#704FE6] font-poppins mb-4">
            Talabalarimiz Fikri
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Bizning bitiruvchilar va talabalarimiz fakultet haqida nima
            deyishadi
          </p>
        </div>

        {/* Mobile: Stack view */}
        <div className="md:hidden space-y-4">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white dark:bg-gray-900">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-10 h-10 text-[#704FE6] opacity-50" />
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop: Carousel view */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {testimonialsData
              .slice(activeIndex, activeIndex + 2)
              .map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8 space-y-6">
                    <Quote className="w-12 h-12 text-[#704FE6] opacity-50" />
                    <p className="text-gray-700 dark:text-gray-300 text-lg italic min-h-[120px]">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-6 border-t">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="text-lg">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2">
            {[0, 2].map((index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full p-0 ${
                  activeIndex === index
                    ? "bg-[#704FE6] hover:bg-[#704FE6]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
