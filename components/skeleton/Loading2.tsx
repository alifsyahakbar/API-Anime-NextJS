import Image from "next/image";

export default function Loading2({ title }: any) {
  return (
    <div className="flex justify-center items-center w-full h-72 mb-8">
      <h1 className="font-bangers text-slate-800 text-2xl drop-shadow-md dark:text-white mr-1">
        {title}
      </h1>
      <Image
        src="/assets/loading.png"
        alt="loading"
        width={100}
        height={100}
        className="w-20 h-20 drop-shadow-md"
      ></Image>
    </div>
  );
}
