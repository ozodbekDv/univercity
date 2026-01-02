import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  {
    id: 1,
    title: "Ochiq eshiklar kuni",
    date: "02-15-2025",
    time: "10:00",
    location: "Fakultet asosiy binosi",
    attendees: "200+",
    type: "Talabalar uchun",
    description:
      "Abituriyentlar uchun fakultet, kafedra va ta'lim yo'nalishlari bilan tanishuv kunlari",
    status: "Ro'yxatdan o'tish ochiq",
    image: "/events/open-day.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Xalqaro ilmiy-amaliy konferensiya",
    date: "03-10-2025",
    time: "09:00",
    location: "Konferens zali",
    attendees: "150+",
    type: "Professor-o'qituvchilar",
    description:
      "Raqamli iqtisodiyot va fintech texnologiyalari mavzusidagi xalqaro konferensiya",
    status: "Tez orada",
    image: "/events/conference.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Startup ko'rgazmasi",
    date: "02-28-2025",
    time: "14:00",
    location: "Innovatsiya markazi",
    attendees: "100+",
    type: "Talabalar",
    description:
      "Talabalar tomonidan ishlab chiqilgan innovatsion loyihalar namoyishi",
    status: "Ro'yxatdan o'tish ochiq",
    image: "/events/startup.jpg",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Karyera kunlari",
    date: "03-20-2025",
    time: "11:00",
    location: "Aula",
    attendees: "300+",
    type: "Barcha uchun",
    description:
      "Yetakchi kompaniyalar vakillari bilan uchrashuv va ish joyi topish imkoniyatlari",
    status: "Tez orada",
    image: "/events/career.jpg",
    color: "from-orange-500 to-red-500",
  },
];

export default function EventsSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("uz-UZ", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="py-16 md:py-25 bg-white dark:bg-black">
      <div className="custom-container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#704FE6] font-poppins mb-2">
              Yaqinlashayotgan Tadbirlar
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fakultetimizda bo'lib o'tadigan qiziqarli tadbirlar va voqealar
            </p>
          </div>
          <Link href="/events" className="hidden md:block">
            <Button variant="outline" className="items-center gap-2">
              Barcha tadbirlar
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#704FE6]"
            >
              <div className={`h-2 bg-linear-to-r ${event.color}`} />
              <CardContent className="p-6 space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-[#704FE6]/10 text-[#704FE6] rounded-full text-xs font-medium mb-3">
                      {event.type}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#704FE6] transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  {event.status === "Ro'yxatdan o'tish ochiq" && (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium animate-pulse">
                      Ochiq
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-[#704FE6]" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {/* {formatDate(event.date)} */}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-[#704FE6]" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {event.time} dan
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-[#704FE6]" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-[#704FE6]" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {event.attendees} ishtirokchi
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <Link href={`/events/${event.id}`}>
                  <Button
                    className={`w-full mt-4 bg-linear-to-r ${event.color} hover:opacity-90 text-white`}
                  >
                    {event.status === "Ro'yxatdan o'tish ochiq"
                      ? "Ro'yxatdan o'tish"
                      : "Batafsil ma'lumot"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calendar CTA */}
        <div className="mt-12 bg-linear-to-br from-[#704FE6]/5 to-purple-50 dark:from-[#704FE6]/10 dark:to-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <Calendar className="w-16 h-16 text-[#704FE6] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Barcha tadbirlar kalendari
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            To'liq tadbirlar ro'yxati va kalendar ko'rinishida barcha voqealar
            bilan tanishing
          </p>
          <Link href="/events">
            <Button className="bg-[#704FE6] hover:bg-[#5a3ec7] text-white px-8">
              Kalendarga o'tish
              <Calendar className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Mobile: View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/events">
            <Button className="bg-[#704FE6] hover:bg-[#5a3ec7] text-white">
              Barcha tadbirlar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
