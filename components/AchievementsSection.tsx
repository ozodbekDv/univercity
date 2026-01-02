import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  Award,
  TrendingUp,
  Users,
  BookOpen,
  Globe,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    icon: Trophy,
    title: "TOP 3 Fakultet",
    description:
      "O'zbekiston universitetlari reytingida iqtisodiyot yo'nalishi bo'yicha",
    stats: "2024-yil",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 2,
    icon: Award,
    title: "15+ Xalqaro Grant",
    description:
      "Professor-o'qituvchilar xalqaro grantlar asosida tadqiqot olib borishmoqda",
    stats: "So'nggi 3 yilda",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    icon: Users,
    title: "500+ Bitiruvchi",
    description: "Har yili kasbga tayyorlanib chiqqan mutaxassislar",
    stats: "Har yili",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    icon: Globe,
    title: "20+ Mamlakat",
    description: "Bitiruvchilarimiz xalqaro kompaniyalarda faoliyat yuritmoqda",
    stats: "Dunyo bo'ylab",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    icon: BookOpen,
    title: "100+ Ilmiy Maqola",
    description: "Xalqaro jurnallarda nashr etilgan ilmiy ishlar",
    stats: "Har yili",
    color: "from-red-500 to-rose-500",
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "95% Bandlik",
    description: "Bitiruvchilar o'z sohalari bo'yicha ishlaydilar",
    stats: "Bitirgandan keyin",
    color: "from-indigo-500 to-violet-500",
  },
];

const recentAchievements = [
  {
    year: "2024",
    title: "Respublika olimpiadasi g'oliblari",
    description: "3 ta talabamiz I, II va III o'rinlarni egalladi",
  },
  {
    year: "2024",
    title: "Xalqaro konferensiya",
    description: "5 mamlakatdan 200+ ishtirokchi qatnashdi",
  },
  {
    year: "2023",
    title: "Erasmus+ loyihasi",
    description: "Evropa Ittifoqi granti yutib olindi",
  },
  {
    year: "2023",
    title: "Startup inkubatori",
    description: "10 ta talaba loyihasi muvaffaqiyatli boshlandi",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-16 md:py-25 bg-linear-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#704FE6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="custom-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#704FE6] font-poppins mb-4">
            Bizning Yutuqlarimiz
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Fakultetimiz erishgan muvaffaqiyatlar va talabalarimizning
            g'alabalari
          </p>
        </div>

        {/* Main Achievements Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={achievement.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#704FE6] overflow-hidden"
              >
                <div className={`h-1 bg-linear-to-r ${achievement.color}`} />
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#704FE6] transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-xs text-[#704FE6] font-medium">
                      {achievement.stats}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Achievements Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            So'nggi Yutuqlar
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {recentAchievements.map((achievement, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-[#704FE6] transition-all duration-300 hover:shadow-lg"
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#704FE6] to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {achievement.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-linear-to-r from-[#704FE6] to-purple-600 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Siz ham yutuqlarimiz qatoriga qo'shiling!
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Fakultetimizda o'qib, kelajagingizni bugun boshlab bering
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/admission"
              className="px-8 py-3 bg-white text-[#704FE6] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Qabul 2025
            </a>
            <a
              href="/programs"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Yo'nalishlar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
