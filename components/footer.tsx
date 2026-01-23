import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="">
      <div className="custom-container py-16 grid gap-10 md:grid-cols-4 border-t border-gray-400">
        {/* ABOUT */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#5EDFFF]">
            Iqtisodiyot va raqamli texnologiyalar fakulteti
          </h3>
          <p className="text-sm  leading-relaxed">
            Biz iqtisodiyot, moliya va raqamli boshqaruv yo‘nalishlarida
            zamonaviy bilim va amaliy ko‘nikmalarga ega mutaxassislarni
            tayyorlaymiz.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="mb-4 font-semibold text-[#5EDFFF]">Bo‘limlar</h4>
          <ul className="space-y-2 text-sm ">
            <li>
              <Link href="#about">Fakultet haqida</Link>
            </li>
            <li>
              <Link href="#programs">Ta’lim dasturlari</Link>
            </li>
            <li>
              <Link href="#teachers">Ustozlar</Link>
            </li>
            <li>
              <Link href="#news">Yangiliklar</Link>
            </li>
            <li>
              <Link href="#admission">Qabul</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="mb-4 font-semibold text-[#5EDFFF]">Aloqa</h4>
          <ul className="space-y-3 text-sm ">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <span>
                O‘zbekiston Respublikasi, <br />
                Universitet shaharchasi
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+998 (__) ___-__-__</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@faculty.uz</span>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="mb-4 font-semibold text-[#5EDFFF]">Bizni kuzating</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#5EDFFF]">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#5EDFFF]">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[#5EDFFF]">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Iqtisodiyot va raqamli texnologiyalar
        fakulteti. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
