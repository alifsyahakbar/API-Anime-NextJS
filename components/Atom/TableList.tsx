import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
import Loading2 from "./skeleton/Loading2";
import { FaAngleRight } from "react-icons/fa";
import star from "../../public/star.svg";

export default function ({ value, limit }: any) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/top/${value}?limit=${limit}`,
    fetcher
  );

  const loading = !data && !error;

  const router = useRouter();
  return (
    <div className="pb-4 mb-4">
      <h1 className="pt-3 pb-1 font-bangers tracking-wide text-xl">
        Top {`${value}`} Series
      </h1>
      {loading && <Loading2 title={`Mohon tunggu...`}></Loading2>}
      <table className="table-auto w-full text-center border-y bg-white dark:bg-black [&>tbody>*:nth-child(even)]:bg-[#f8f8f8] dark:[&>tbody>*:nth-child(even)]:bg-[#121212]">
        <thead className="border-x-slate-100 border">
          <tr className="bg-black text-white font-bangers tracking-wide">
            <th className="py-2 px-4 border-r-slate-100 border">Rank</th>
            <th className="border-r-slate-100 border">Title</th>
            <th className="py-2 px-4">Score</th>
          </tr>
        </thead>
        <tbody className="border-x">
          {data &&
            data?.data?.map((data: any, index: number) => {
              return (
                <tr
                  key={index}
                  className="hover:bg-[#fdfdfd] hover:dark:bg-[#121212] "
                >
                  <td className="p-2 border-r font-bangers text-3xl lg:text-4xl lg:w-32">
                    {data.rank}
                  </td>
                  <td className="border-r">
                    <div className="flex justify-start items-center p-1 lg:p-2">
                      <Image
                        onClick={() => router.push(`/${value}/${data.mal_id}`)}
                        src={data.images.jpg.image_url}
                        loader={myLoader}
                        unoptimized={true}
                        alt={data.title}
                        width={100}
                        height={100}
                        className="w-14 cursor-pointer hover:opacity-90"
                      ></Image>
                      <div className="flex text-start flex-col ml-4">
                        <h1
                          onClick={() =>
                            router.push(`/${value}/${data.mal_id}`)
                          }
                          className="font-bold font-md lg:text-lg hover:underline cursor-pointer"
                        >
                          {data.title}
                        </h1>
                        {value === "anime" ? (
                          <small>
                            {data.type} ( {data.episodes} eps )
                          </small>
                        ) : (
                          <small>
                            {data.type} ({" "}
                            {data.volumes === null ? " ?" : `${data.volumes}`}{" "}
                            vol )
                          </small>
                        )}
                        <small className="hidden lg:flex">
                          {data.aired?.string}
                        </small>
                        <small>{data.members} members</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      <Image
                        src={star}
                        alt="star-icon"
                        width={100}
                        height={100}
                        className=" mr-1 w-4 h-4 drop-shadow-sm"
                      ></Image>
                      <h1 className="text-lg font-bold">{data.score}</h1>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4 hover:underline">
        <button
          onClick={() => router.push(`/${value}`)}
          className="flex text-sm font-bold drop-shadow-sm "
        >
          View More&nbsp;
          <span className="first-letter:uppercase">{value}</span>
        </button>
        <FaAngleRight size={15}></FaAngleRight>
      </div>
    </div>
  );
}
