import React from "react";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function ListSeason({ limit }: any) {
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/seasons/upcoming?limit=${limit}`,
    fetcher
  );

  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  return (
    <div>
      {data &&
        data?.data?.map((data: any, index: number) => {
          return (
            <div key={index} className="flex p-2 border-b">
              <Image
                src={data.images.jpg.image_url}
                loader={myLoader}
                unoptimized={true}
                alt={data.title}
                width={100}
                height={100}
                className="w-16 h-auto mr-3"
              ></Image>
              <div className="flex flex-col text-start">
                <h1 className="font-bold text-md lg:text-lg">{data.title}</h1>
                <p>{data.type}</p>
                <p>{data.genres.map((g: any) => g.name + ", ")}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
