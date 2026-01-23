"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import ThemeSwitcher from "./themeSwitcher";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { name: "Bosh sahifa", path: "/" },
  { name: "Biz haqimizda", path: "/about" },
  { name: "Yo'nalishlar", path: "/programs" },
  { name: "Fanlar", path: "/subjects" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 z-50 w-full px-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between rounded-3xl border border-white/10 bg-background/70 backdrop-blur-xl px-6 py-3 shadow-lg">
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/web-app-manifest-192x192.png"
              alt="iqtisodiyot logosi"
              width={52}
              height={52}
              className="transition group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            />
            <span className="hidden sm:block text-lg font-semibold tracking-tight">
              Iqtisodiyot
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive =
                link.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative px-4 py-2 text-sm font-medium transition"
                >
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "text-blue-600"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* ACTIVE INDICATOR */}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-1 h-1 rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="hidden md:inline-flex rounded-full bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-md hover:opacity-90"
            >
              UZB
            </Button>

            <ThemeSwitcher />

            {/* MOBILE */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="border-white/10 bg-background/90 backdrop-blur-xl"
              >
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/web-app-manifest-192x192.png"
                      alt="iqtisodiyot logosi"
                      width={64}
                      height={64}
                    />
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-8 flex flex-col gap-3">
                  {links.map((link) => {
                    const isActive =
                      link.path === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.path);

                    return (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`rounded-2xl px-4 py-3 text-sm font-medium transition
                          ${
                            isActive
                              ? "bg-blue-500/10 text-blue-600"
                              : "hover:bg-muted"
                          }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
