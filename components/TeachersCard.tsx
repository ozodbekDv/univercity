import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

type Teacher = {
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

export default function TeachersCard({ teacher }: { teacher: Teacher }) {
  return (
    <div
      className="
        group relative h-[420px] overflow-hidden rounded-3xl
        bg-black text-white
        transition-all duration-500
        hover:scale-[1.02]
      "
    >
      {/* DIAGONAL ACCENT */}
      <div
        className="
        absolute inset-0
        bg-linear-to-br from-[#704FE6]/80 to-transparent
        opacity-0 group-hover:opacity-100
        transition
      "
      />

      {/* IMAGE SIDE */}
      <div className="absolute right-0 top-0 h-full w-1/2">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full w-1/2 p-6 flex flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#5EDFFF]">
            {teacher.position}
          </p>

          <h3 className="mt-2 text-2xl font-extrabold leading-tight">
            {teacher.name}
          </h3>

          <p className="mt-3 text-sm text-white/70">{teacher.degree}</p>

          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p>• {teacher.specialization}</p>
            <p>• {teacher.experience}</p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          {teacher.email && (
            <a
              href={`mailto:${teacher.email}`}
              className="text-white/70 hover:text-white"
            >
              <Mail size={18} />
            </a>
          )}

          {teacher.linkedin && (
            <a
              href={teacher.linkedin}
              target="_blank"
              className="text-white/70 hover:text-white"
            >
              <Linkedin size={18} />
            </a>
          )}

          {teacher.profileUrl && (
            <Link
              href={teacher.profileUrl}
              className="
                ml-auto inline-flex items-center gap-1
                text-sm font-medium
                text-[#5EDFFF] hover:text-white
              "
            >
              Profil
              <ArrowUpRight size={14} />
            </Link>
          )}
        </div>
      </div>

      {/* BIG BACK TEXT */}
      <div className="absolute bottom-4 left-4 text-[120px] font-black text-white/5 leading-none select-none">
        EDU
      </div>
    </div>
  );
}
