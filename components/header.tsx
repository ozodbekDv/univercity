"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ThemeSwitcher from "./themeSwitcher";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Bosh sahifa",
    path: "/",
  },
  {
    name: "Biz haqimizda",
    path: "/about",
  },
  {
    name: "Yo'nalishlar",
    path: "/major",
  },
  {
    name: "Fanlar",
    path: "/subjects",
  },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="custom-container flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/web-app-manifest-192x192.png"}
            alt="iqtisodiyot logosi"
            width={80}
            height={80}
          />
        </Link>
        <div className="flex justify-between py-5 gap-5">
          {links.map((link) => {
            let isActive = link.path == pathname;
            return (
              <Link
                className={`${
                  isActive ? "border-blue-400" : "border-transparent"
                } border-2 p-2 rounded-2xl`}
                key={link.path}
                href={link.path}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-5">
          <Button className="rounded-full">UZB</Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
