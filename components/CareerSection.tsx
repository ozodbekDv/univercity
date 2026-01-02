import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, TrendingUp, DollarSign, Globe } from "lucide-react";
import Link from "next/link";

const careerPaths = [
  {
    id: 1,
    title: "Moliya va Bank sektori",
    icon: DollarSign,
    companies: [
      "O'zbekiston Markaziy Banki",
      "Asakabank",
      "Ipoteka Bank",
      "Kapitalbank",
    ],
    positions: [
      "Moliyaviy Tahlilchi",
      "Kredit Mutaxassisi",
      "Risk Menejeri",
      "Buxgalter",
    ],
    averageSalary: "5-15 mln so'm",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 2,
    title: "Konsalting va Audit",
    icon: Briefcase,
    companies: ["Ernst & Young", "Deloitte", "KPMG", "PwC"],
    positions: [
      "Biznes Konsultant",
      "Auditor",
      "Boshqaruv Konsultanti",
      "Tahlilchi",
    ],
    averageSalary: "8-20 mln so'm",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "IT va Fintech",
    icon: TrendingUp,
    companies: ["Uzum", "Payme", "Click", "TBC Bank"],
    positions: [
      "Mahsulot Menejeri",
      "Biznes Tahlilchi",
      "Fintech Mutaxassisi",
      "Data Analyst",
    ],
    averageSalary: "10-25 mln so'm",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Xalqaro Tashkilotlar",
    icon: Globe,
    companies: ["UNDP", "Jahon Banki", "ADB", "USAID"],
    positions: [
      "Loyiha Koordinatori",
      "Iqtisodiy Maslahatchi",
      "Tadqiqotchi",
      "Analitik",
    ],
    averageSalary: "$800-2000",
    color: "from-orange-500 to-red-500",
  },
];

const companyLogos = [
  { name: "Uzum", logo: "/bank.jpg" },
  { name: "Payme", logo: "/bank.jpg" },
  { name: "Click", logo: "/bank.jpg" },
  { name: "Asakabank", logo: "/bank.jpg" },
  { name: "EY", logo: "/bank.jpg" },
  { name: "Deloitte", logo: "/bank.jpg" },
  { name: "UNDP", logo: "/bank.jpg" },
  { name: "World Bank", logo: "/bank.jpg" },
];

export default function CareerSection() {
  return (
    <section className="py-16 md:py-25 bg-linear-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="custom-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#704FE6] font-poppins mb-4">
            Karyera Imkoniyatlari
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Bitiruvchilarimiz O'zbekiston va dunyo bo'ylab yetakchi
            kompaniyalarda faoliyat yuritmoqda
          </p>
        </div>

        {/* Career Paths */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {careerPaths.map((path) => {
            const Icon = path.icon;
            return (
              <Card
                key={path.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#704FE6] overflow-hidden"
              >
                <div className={`h-2 bg-linear-to-r ${path.color}`} />
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${path.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                      {path.averageSalary}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#704FE6] transition-colors">
                      {path.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Yetakchi Kompaniyalar:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {path.companies.map((company, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Lavozimlar:
                    </p>
                    <ul className="space-y-1">
                      {path.positions.map((position, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#704FE6]" />
                          {position}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Companies Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Bitiruvchilarimiz Ishlaydigan Kompaniyalar
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="aspect-square bg-white dark:bg-gray-900 rounded-xl p-4 flex items-center justify-center hover:shadow-lg transition-all border-2 border-gray-100 dark:border-gray-800 hover:border-[#704FE6] grayscale hover:grayscale-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-linear-to-r from-[#704FE6] to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Muvaffaqiyat Statistikasi
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-5xl font-bold mb-2">95%</p>
                <p className="text-white/90">
                  Bitirgandan keyin 6 oy ichida ishga joylashgan
                </p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">85%</p>
                <p className="text-white/90">O'z sohasi bo'yicha ishlaydi</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">70%</p>
                <p className="text-white/90">
                  O'rtacha maoshdan yuqori daromad oladi
                </p>
              </div>
            </div>
            <div className="pt-6">
              <Link href="/career">
                <Button
                  variant="outline"
                  className="bg-white text-[#704FE6] hover:bg-gray-100 border-0 px-8"
                >
                  Karyera Markazi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
