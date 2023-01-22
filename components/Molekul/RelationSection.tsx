import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import NotData from "../Atom/NotData";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function RelationSection({ anime, value }: any) {
  const router = useRouter();

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}&w=${width}}`;
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/${value}/${anime.mal_id}/recommendations`,
    fetcher
  );

  return (
    <div>
      <h1 className="text-lg lg:text-2xl mx-4 my-2 font-bangers tracking-wide border-t-2 pt-2">
        Rekomendasi
      </h1>
      {(data?.data || []).length ? (
        <div className="flex overflow-x-scroll bg-[#f0ebeb] dark:bg-black scrollbar-hide">
          {data?.data?.map((data: any, index: number) => {
            return (
              <div key={index} className="py-2">
                <div
                  onClick={() => router.push(`/${value}/${data.entry.mal_id}`)}
                  className="w-40 h-auto ml-2 cursor-pointer"
                >
                  <Image
                    loader={myLoader}
                    unoptimized={true}
                    src={data.entry.images.webp.image_url}
                    alt={data.entry.title}
                    width={100}
                    height={100}
                    className="w-full h-64 bg-cover rounded-sm hover:scale-105 ease-out duration-150"
                  ></Image>
                  <h1 className="text-md font-bold mt-1">{data.entry.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center">
          <NotData
            value={`Tidak ada rekomendasi ${value}`}
            fonts={"text-lg"}
          ></NotData>
        </div>
      )}
    </div>
  );
}
