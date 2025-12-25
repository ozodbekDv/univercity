// WhyChooseUs.jsx
"use client";

import React from "react";

const features = [
  {
    title: "Keng qamrovli Ta'lim",
    description:
      "Fakultetimiz zamonaviy o'quv dasturlari va xalqaro standartlarga moslashgan yo'nalishlar bilan ta'lim beradi. Har bir talabaga individual yondashuv kafolatlangan.",
    icon: "📚",
  },
  {
    title: "Tajribali O'qituvchilar",
    description:
      "Bizning professor-o'qituvchilarimiz ilmiy darajaga ega va amaliyotga boy tajribaga ega. Sizni nafaqat nazariy bilim, balki real dunyo ko'nikmalari bilan ta'minlaydi.",
    icon: "👨‍🏫",
  },
  {
    title: "Innovatsion Muhit",
    description:
      "Fakultetimizda ilm-fan va texnologiya integratsiyasi ustuvor. Talabalar startaplar, laboratoriyalar va loyihalarda faol ishtirok etadi.",
    icon: "💡",
  },
  {
    title: "Xalqaro Hamkorlik",
    description:
      "Bizning talabalarimiz va professorlarimiz ko'plab xalqaro dasturlar va almashinuvlarda ishtirok etadi, bu sizga global imkoniyatlar eshigini ochadi.",
    icon: "🌍",
  },
  {
    title: "Kelajakga Tayyorlash",
    description:
      "Biz nafaqat bilim, balki yetakchilik, ijodkorlik va mehnat madaniyatini rivojlantiramiz. Siz bitiruvchimiz sifatida raqobatbardosh va malakali bo'lasiz.",
    icon: "🚀",
  },
];

export default function WhyChooseUs() {
  // Kartalarni ikkita nusxada joylab infinite effekt beramiz
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="py-16 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-black">
      <div className="container mx-auto px-4 dark:bg-transparent">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-indigo-100">
          Nega Bizni Tanlash Kerak?
        </h2>
        <div className="overflow-hidden">
          <div className="flex gap-6 min-w-max animate-scroll">
            {duplicatedFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="shrink-0 w-80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-500"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-indigo-50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
