import TeachersCard from "@/components/TeachersCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
    <div className=" bg-zinc-50 font-sans dark:bg-black h-full">
      <div className="custom-container flex justify-between items-center py-25">
        <div className="font-epilogue flex flex-col gap-4 items-start">
          <p className="text-[#704FE6] font-poppins font-bold text-2xl">
            Iqtisodiyot Fakultetiga hush kelibsiz!
          </p>
          <h1 className="text-3xl font-bold">
            Milliy va global iqtisodiyot <br /> yetakchilari shu yerda yetishadi
          </h1>
          <Button className="bg-[#17254E] rounded-3xl text-white">
            Ko'proq
          </Button>
        </div>
        <Image
          className="rounded-3xl"
          src={"/images/slide1.jpg"}
          alt="iqtisodiyot ustozlar"
          width={600}
          height={400}
        />
      </div>
      <div className="custom-container flex flex-col justify-between items-center py-25">
        <p className="text-[#704FE6] text-4xl font-bold mx-auto mb-10">
          Bizning Ustozlar
        </p>
        <div className="grid grid-cols-3 gap-5">
          {teachers.map((teacher) => (
            <TeachersCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
}
