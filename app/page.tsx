import KPISection from "@/components/KPISection";
import TeachersCard from "@/components/TeachersCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// shad ui
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WhyChooseUs from "@/components/WhyWe";

export const teachers = [
  {
    name: "Xonkeldiyeva Goʻzal Sherovna",
    position: "Fakultet dekani",
    degree: "Iqtisodiyot fanlari doktori, Professor",
    specialization: "Iqtisodiyot va boshqaruv",
    experience: "25+ yil akademik va boshqaruv tajribasi",
    image: "/teachers/dekan.jpg",
    email: "honkeldiyeva@mail.ru",
    profileUrl: "/teachers/xonkeldiyeva-gozal-sherovna",
  },
  {
    name: "Mirsodiqov Abdulla Tursunaliyevich",
    position: "Ilmiy ishlar va innovatsiyalar bo‘yicha dekan o‘rinbosari",
    degree: "Iqtisodiyot fanlari bo‘yicha falsafa doktori (PhD)",
    specialization: "Ilmiy ishlar va innovatsiyalar",
    experience: "5+ yil akademik faoliyat",
    image: "/teachers/mirsodiqov.jpg",
    email: "",
    profileUrl: "/teachers/mirsodiqov-abdulla-tursunaliyevich",
  },
  {
    name: "Nematova Shaxlo Egamberdiyevna",
    position: "Xotin-qizlar masalalari bo‘yicha dekan maslahatchisi",
    degree: "",
    specialization: "Xotin-qizlar masalalari",
    experience: "Uzun yillik tajriba",
    image: "/teachers/nematova.jpg",
    email: "",
    profileUrl: "/teachers/nematova-shaxlo-egamberdiyevna",
  },
  {
    name: "Mirzayev Abdullajon Topilovich",
    position: "“Iqtisodiyot va Turizm” kafedrasi mudiri",
    degree: "Iqtisodiyot fanlari doktori, Professor",
    specialization: "Iqtisodiyot va turizm",
    experience: "20+ yil akademik faoliyat",
    image: "/teachers/mirzayev.jpg",
    email: "abdubehr@mail.ru",
    profileUrl: "/teachers/mirzayev-abdullajon-topilovich",
  },
  {
    name: "Jo‘rayeva Nodiraxon Qurbonovna",
    position: "Kafedra mudiri",
    degree: "Iqtisodiyot fanlari bo‘yicha falsafa doktori (PhD)",
    specialization: "Iqtisodiyot",
    experience: "Ko‘p yillik akademik faoliyat",
    image: "/teachers/jorayeva.jpg",
    email: "nodiraxonnum1@gmail.com",
    profileUrl: "/teachers/jorayeva-nodiraxon-qurbonovna",
  },
];

export default function App() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black h-full">
      <div className="custom-container flex justify-between md:flex-row flex-col gap-4 items-center md:py-25 py-5">
        <div className="font-epilogue flex flex-col gap-4 items-start order-2 md:order-0">
          <h1 className="text-md md:text-3xl font-bold text-[#704FE6] font-poppins">
            Iqtisodiyot va raqamli texnologiyalar <br /> kesishmasidagi yetakchi
            fakultet
          </h1>
          <p className="text-sm md:text-md">
            Biz iqtisodiyot, moliya va raqamli boshqaruv yo‘nalishlarida
            zamonaviy bilimga ega mutaxassislar tayyorlaymiz. Bitiruvchilarimiz
            bank, konsalting, IT va davlat sektorida faoliyat yuritadi.
          </p>
          <div className="flex gap-1 md:gap-4 items-start">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-[#17254E] rounded-3xl text-white">
                  🎓
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p> Ta’lim yo‘nalishlari</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-[#17254E] rounded-3xl text-white">
                  🌍
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p> Xalqaro dasturlar</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-[#17254E] rounded-3xl text-white">
                  📥
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p> Qabul haqida</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <Image
          className="rounded-3xl order-1 md:order-0"
          src={"/images/slide1.jpg"}
          alt="iqtisodiyot ustozlar"
          width={600}
          height={400}
        />
      </div>
      <KPISection />
      <WhyChooseUs />
      <div className="custom-container flex flex-col justify-between items-center py-25">
        <p className="text-[#704FE6] text-4xl font-bold mx-auto mb-10">
          Bizning Ustozlar
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {teachers.map((teacher) => (
            <TeachersCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
}
