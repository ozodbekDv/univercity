"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import ThemeSwitcher from "./themeSwitcher";

// shadcn/ui
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
  { name: "Yo'nalishlar", path: "/major" },
  { name: "Fanlar", path: "/subjects" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 h-25 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="custom-container flex items-center justify-between py-3">
        {/* LOGO */}
        <Link href={"/"}>
          <Image
            src={"/web-app-manifest-192x192.png"}
            alt="iqtisodiyot logosi"
            width={80}
            height={80}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path);

            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-2xl px-4 py-2 border transition
                  ${
                    isActive
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent hover:border-muted"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <Button size="sm" className="rounded-full hidden md:inline-flex">
            UZB
          </Button>

          <ThemeSwitcher />

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={"/"}>
                      <Image
                        src={"/web-app-manifest-192x192.png"}
                        alt="iqtisodiyot logosi"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-3">
                  {links.map((link) => {
                    const isActive =
                      link.path === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.path);

                    return (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`rounded-xl px-4 py-3 border
                          ${
                            isActive
                              ? "border-blue-500 text-blue-600"
                              : "border-transparent"
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
