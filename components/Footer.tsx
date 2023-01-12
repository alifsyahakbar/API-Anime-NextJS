import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <Image
        priority
        src={"/assets/footer.png"}
        unoptimized={false}
        alt="footer"
        width={100}
        height={100}
        className="fixed bottom-0 -right-6 lg:w-40 w-32 h-auto"
      ></Image>
      <div className="flex-1 text-center m-4 p-2 text-slate-800 dark:text-white">
        <h2 className="font-bangers text-lg lg:text-3xl">Moshidesu.Moe</h2>
        <a href="https://github.com/alifsyahakbar">
          <small className="font-serif font-bold hover:underline">
            &copy;2023 Vivy
          </small>
        </a>
      </div>
    </div>
  );
}
