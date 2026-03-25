export type Teacher = {
  name: string;
  position: string;
  degree: string;
  specialization: string;
  experience: string;
  image: string;
  email?: string;
  linkedin?: string;
  profileUrl?: string;
};

export const teachers: Teacher[] = [
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
    position: "Ilmiy ishlar va innovatsiyalar bo'yicha dekan o'rinbosari",
    degree: "Iqtisodiyot fanlari bo'yicha falsafa doktori (PhD)",
    specialization: "Ilmiy ishlar va innovatsiyalar",
    experience: "5+ yil akademik faoliyat",
    image: "/teachers/abdulla-mirsodiqov.jpg",
    email: "",
    profileUrl: "/teachers/mirsodiqov-abdulla",
  },
  {
    name: "Elyor Xamidov Tursunali o'g'li",
    position: "O'quv bo'limi bo'yicha dekan o'rinbosari",
    degree: "Iqtisodiyot fanlari bo'yicha falsafa doktori (PhD)",
    specialization: "Ilmiy ishlar va innovatsiyalar",
    experience: "5+ yil akademik faoliyat",
    image: "/teachers/elyor-teacher.jpg",
    email: "hamidovelyor@gmail.com",
    profileUrl: "/teachers/elyor-xamidov",
  },
  {
    name: "Uzganbayeva Dilnoza Toxtasinovna",
    position: "Xotin-qizlar masalalari bo'yicha dekan maslahatchisi",
    degree: "",
    specialization: "Xotin-qizlar masalalari",
    experience: "5+ yil akademik faoliyat",
    image: "/teachers/dilnoza-uzganbayeva.jpg",
    email: "",
    profileUrl: "/teachers/dilnoza-toxtasinovna",
  },
  {
    name: "Turg'unov Muxriddin Mo'ydinjon o'g'li",
    position: "\u201cIqtisodiyot va Turizm\u201d kafedrasi mudiri",
    degree: "Iqtisodiyot fanlari doktori",
    specialization: "Iqtisodiyot va turizm",
    experience: "20+ yil akademik faoliyat",
    image: "/teachers/muhriddin.jpg",
    email: "abdubehr@mail.ru",
    profileUrl: "/teachers/mirzayev-abdullajon-topilovich",
  },
  {
    name: "Jo'rayeva Nodiraxon Qurbonovna",
    position: "Kafedra mudiri",
    degree: "Iqtisodiyot fanlari bo'yicha falsafa doktori (PhD)",
    specialization: "Jahon va mintaqa iqtisodiyot",
    experience: "Ko'p yillik akademik faoliyat",
    image: "/teachers/jorayeva.jpg",
    email: "nodiraxonnum1@gmail.com",
    profileUrl: "/teachers/jorayeva-nodiraxon-qurbonovna",
  },
  {
    name: "Oripov Abdumalik Abdusalomovich",
    position: "Kafedra mudiri",
    degree: "Iqtisodiyot fanlari bo'yicha falsafa doktori (PhD)",
    specialization: "Buxgalteriya hisobi va iqtisodiy tahlili",
    experience: "Ko'p yillik akademik faoliyat",
    image: "/teachers/abdumalik.jpg",
    email: "aoripov@gmail.com",
    profileUrl: "/teachers/abdumalik-abdusalomovich",
  },
];
