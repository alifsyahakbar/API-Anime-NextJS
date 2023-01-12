import React from "react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Character({ value }: any) {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}`;
  };
  const { data, error }: any = useSWR(
    `https://api.jikan.moe/v4/anime/${value.mal_id}/characters`,
    fetcher
  );

  return (
    <div>
      <div>
        <h1 className="text-lg lg:text-2xl mx-4 my-2 font-bangers tracking-wide border-b-2 pb-2">
          Characters & Voice Actor
        </h1>
      </div>

      {data?.data?.map((data: any, index: number) => {
        return (
          <div key={index} className="flex justify-between p-2 mx-2 border-b-2">
            <div className="flex">
              <Image
                src={data.character.images.jpg.image_url}
                loader={myLoader}
                alt={data.character.images.jpg.image_url}
                width={100}
                height={100}
                className={"w-14 h-20"}
              ></Image>
              <div className="ml-2 flex flex-col gap-1">
                <h3>{data.character.name}</h3>
                <span>{data.role}</span>
                <small>{data.favorites} Favorites</small>
              </div>
            </div>
            <div className="flex-col">
              {data.voice_actors.map((data: any, index: number) => {
                return (
                  <div key={index} className="flex mb-2">
                    <div className="flex flex-col justify-start mr-2 text-end w-full">
                      <h3>{data.person.name}</h3>
                      <small className="mt-1">{data.language}</small>
                    </div>
                    <Image
                      src={data.person.images.jpg.image_url}
                      loader={myLoader}
                      alt={data.person.images.jpg.image_url}
                      width={100}
                      height={100}
                      className={"w-14 h-auto"}
                    ></Image>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
