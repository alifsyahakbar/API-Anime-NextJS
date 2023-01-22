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
        <div className="flex w-full h-auto flex-wrap justify-center lg:p-6 px-2 lg:gap-x-4 gap-y-6 lg:gap-y-8 rounded-md">
          {data &&
            data.data.map((user: any) => {
              return (
                <div
                  key={user.mal_id}
                  onClick={() => router.push(`/${value}/${user.mal_id}`)}
                  className="flex bg-slate-50 dark:bg-[#242424] rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:opacity-75 hover:cursor-pointer"
                >
                  <Image
                    loader={myLoader}
                    unoptimized={true}
                    src={user.images.jpg.image_url}
                    alt={user.title}
                    width={100}
                    height={100}
                    className="lg:w-44 w-36 h-auto bg-cover rounded-sm transition-all duration-150 overflow-hidden hover:scale-105"
                  ></Image>
                  <div className="w-56 ml-2 p-2 text-left relative">
                    <h1 className="text-xl lg:text-2xl font-bold leading-tight">
                      {user.title}
                    </h1>
                    {user.synopsis && (
                      <p className="text-xs leading-normal mt-2 pb-8">
                        {user.synopsis.substring(0, 170) + "..."}{" "}
                        <span className="text-blue-500 font-bold hover:underline">
                          Read More
                        </span>{" "}
                      </p>
                    )}
                    <div className="flex absolute bottom-0 my-3">
                      <span className="text-sm mr-2 border-r pr-2 border-slate-300">
                        Rank : <span className="font-bold">{user.rank}</span>
                      </span>
                      <span className="text-sm ">
                        Score : <span className="font-bold">{user.score}</span>
                      </span>
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