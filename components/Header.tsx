import Image from "next/image";
import TopHeader from "./TopHeader";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div>
      <TopHeader></TopHeader>
      <Link href="/">
        <div className="flex justify-center w-full lg:mt-10 mt-0">
          <h1 className="flex drop-shadow-xl font-normal text-4xl lg:text-5xl text-slate-800 text-center py-10 font-bangers tracking-wide dark:text-white">
            Moshidesu<div className="animate-[bounce_1.5s_infinite]">.</div>Moe
          </h1>
          <Image
            src={`/assets/${
              theme === "light" ? "logo-dark.png" : "logo-light.png"
            }`}
            alt="logo"
            width={100}
            height={100}
            className="w-20 lg:w-24 h-20 lg:h-24 drop-shadow-xl dark:drop-shadow-white"
          ></Image>
        </div>
      </Link>
    </div>
  );
}
