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
        group relative overflow-hidden rounded-2xl
    bg-white text-neutral-900
    dark:bg-neutral-900 dark:text-neutral-100
    border border-neutral-200 dark:border-neutral-800
    shadow-lg
    transition
    hover:border-indigo-500/40
      "
    >
      {/* CREATIVE ACCENT STRIPE */}
      <div
        className="
        absolute left-0 top-0 h-full w-1
        bg-linear-to-b from-indigo-500 via-cyan-400 to-transparent
      "
      />

      <div className="flex gap-6 p-6">
        {/* AVATAR */}
        <div className="relative h-28 w-28 shrink-0">
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-indigo-500 to-cyan-400 opacity-70 blur" />
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={teacher.image}
              alt={teacher.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col justify-between">
          {/* IDENTITY */}
          <div>
            <h3 className="text-lg font-bold">{teacher.name}</h3>

            <p className="text-sm font-medium text-indigo-400">
              {teacher.position}
            </p>
          </div>

          {/* CREDENTIALS */}
          <div className="mt-3 space-y-1 text-sm text-indigo-500 dark:text-neutral-300">
            <p>{teacher.degree}</p>
            <p>{teacher.specialization}</p>
            <p className="text-neutral-400">Tajriba: {teacher.experience}</p>
          </div>

          {/* ACTIONS */}
          <div className="mt-4 flex items-center gap-4 border-t border-neutral-800 pt-3">
            {teacher.email && (
              <a
                href={`mailto:${teacher.email}`}
                className="text-neutral-400 hover:text-white transition"
              >
                <Mail size={18} />
              </a>
            )}

            {teacher.linkedin && (
              <a
                href={teacher.linkedin}
                target="_blank"
                className="text-neutral-400 hover:text-white transition"
              >
                <Linkedin size={18} />
              </a>
            )}

            {teacher.profileUrl && (
              <Link
                href={teacher.profileUrl}
                className="
                  ml-auto inline-flex items-center gap-1.5
                  rounded-md px-3 py-1.5
                  text-sm font-medium bg-neutral-200
                  dark:bg-neutral-800 text-indigo-400
                  hover:bg-indigo-500 hover:text-black
                  transition
                "
              >
                Profil
                <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
