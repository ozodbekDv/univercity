import Image from "next/image";
import Link from "next/link";
import { Mail, GraduationCap, BookOpen, Linkedin } from "lucide-react";

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
        group rounded-2xl border border-black/10 dark:border-white/10
        bg-white dark:bg-zinc-900
        p-5 transition hover:shadow-lg
      "
    >
      {/* Image */}
      <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-xl">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {teacher.name}
        </h3>

        <p className="text-sm text-black/60 dark:text-white/60">
          {teacher.position}
        </p>

        <p className="mt-1 text-sm font-medium">{teacher.degree}</p>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70">
        <div className="flex items-center gap-2 justify-center">
          <GraduationCap size={16} />
          <span>{teacher.specialization}</span>
        </div>

        <div className="flex items-center gap-2 justify-center">
          <BookOpen size={16} />
          <span>{teacher.experience}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center justify-center gap-3">
        {teacher.email && (
          <a
            href={`mailto:${teacher.email}`}
            className="
              rounded-full border border-black/10 dark:border-white/10
              p-2 hover:bg-black/5 dark:hover:bg-white/10
            "
          >
            <Mail size={16} />
          </a>
        )}

        {teacher.linkedin && (
          <a
            href={teacher.linkedin}
            target="_blank"
            className="
              rounded-full border border-black/10 dark:border-white/10
              p-2 hover:bg-black/5 dark:hover:bg-white/10
            "
          >
            <Linkedin size={16} />
          </a>
        )}

        {teacher.profileUrl && (
          <Link
            href={teacher.profileUrl}
            className="
              rounded-xl bg-black px-4 py-2 text-sm text-white
              dark:bg-white dark:text-black
            "
          >
            Profil
          </Link>
        )}
      </div>
    </div>
  );
}
