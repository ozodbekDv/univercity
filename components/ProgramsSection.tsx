import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Clock, Users } from "lucide-react";
import Link from "next/link";

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
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-16 md:py-25 bg-white dark:bg-black">
      <div className="custom-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#704FE6] font-poppins mb-4">
            Ta'lim Yo'nalishlari
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Zamonaviy bozor talablariga mos kadrlar tayyorlaydigan ta'lim
            dasturlarimiz bilan tanishing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {programsData.map((program) => (
            <Card
              key={program.id}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#704FE6]"
            >
              <div className={`h-2 bg-linear-to-r ${program.color}`} />
              <CardHeader className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="text-5xl">{program.icon}</div>
                  <span className="bg-[#704FE6]/10 text-[#704FE6] px-3 py-1 rounded-full text-xs font-medium">
                    {program.degree}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#704FE6] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Kod: {program.code}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {program.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="flex flex-col items-center text-center">
                    <Clock className="w-5 h-5 text-[#704FE6] mb-1" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Users className="w-5 h-5 text-[#704FE6] mb-1" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {program.students}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <BookOpen className="w-5 h-5 text-[#704FE6] mb-1" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      O'zbek/Rus
                    </span>
                  </div>
                </div>

                <Link href={`/programs/${program.id}`}>
                  <Button
                    variant="outline"
                    className="w-full mt-4 group-hover:bg-[#704FE6] group-hover:text-white group-hover:border-[#704FE6] transition-all"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Batafsil ma'lumot
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/programs">
            <Button className="bg-[#704FE6] hover:bg-[#5a3ec7] text-white px-8">
              Barcha yo'nalishlarni ko'rish
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
