import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ListMenu({ dislay, list }: any) {
  const array = ["home", "anime", "manga", "community", "about"];

  const { asPath } = useRouter();

  return (
    <>
      <div className="">
        <ul className={`${dislay} font-bangers tracking-wide text-lg`}>
          {array.map((data: any, index: number) => (
            <li key={index} className={`${list}`}>
              <Link href={data === "home" ? "/" : `/${data}`}>
                <h1
                  className={`hover:text-black hover:bg-white py-3 px-6 ${
                    asPath === `/${data}`
                      ? "bg-white dark:bg-[#121212] text-black dark:text-white"
                      : ""
                  }`}
                >
                  {data}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
