import useSWR from "swr";
import Image from "next/image";
import Loading2 from "../Atom/skeleton/Loading2";
import { useRouter } from "next/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function All({ value, limit }: any) {
  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/top/${value}?limit=${limit}`,
    fetcher
  );
  var loading2 = !data && !error;

  const router = useRouter();

  return (
    <>
      <div className="w-full h-auto text-center lg:mt-4 mt-4">
        {loading2 && <Loading2 title={`Mohon tunggu...`}></Loading2>}
        <div className="flex w-full h-auto flex-wrap justify-center lg:p-6 px-2 lg:gap-x-4 lg:gap-y-8 rounded-md">
          {data &&
            data?.data?.map((data: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex w-full items-center px-1 my-1 py-1 mx-1  shadow-md rounded-md"
                >
                  <Image
                    loader={myLoader}
                    src={data.images.jpg.image_url}
                    alt={data.title}
                    width={100}
                    height={100}
                    className="w-20 h-auto rounded-md"
                  ></Image>
                  <div className="flex w-full mx-2">
                    <div className="flex flex-col w-3/4 text-start">
                      <h1 className="text-md font-bold hover:underline">
                        {data.title}
                      </h1>
                      <span>
                        {value === "anime" ? (
                          <small>
                            {data.type} ( {data.episodes} Eps )
                          </small>
                        ) : (
                          <small>
                            {data.type} ({" "}
                            {data.volumes === null ? " ?" : `${data.volumes}`}{" "}
                            Vol )
                          </small>
                        )}
                      </span>
                      <small>{data.members} Members</small>
                      {value === "anime" ? (
                        <small className="lg:flex">{data.aired?.string}</small>
                      ) : (
                        <small className="lg:flex">
                          {data.published?.string}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
