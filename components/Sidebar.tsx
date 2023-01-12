import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="absolute z-10 top-10 left-0 w-full border-t-2 border-slate-800 dark:border-slate-200 bg-white dark:bg-[#121212] h-auto overflow-hidden drop-shadow-[0_70px_35px_rgba(0,0,0,0.25)]">
      <div className="py-6">
        <ul className="text-slate-800 dark:text-white">
          <li className="py-1 px-10 hover:underline text-xl font-bangers tracking-wide">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="py-1 px-10 hover:underline text-xl font-bangers tracking-wide">
            <Link onClick={() => alert("Update V1.1")} href="">
              Dev
            </Link>
          </li>
          <li className="py-1 px-10 hover:underline text-xl font-bangers tracking-wide">
            <Link href={"https://github.com/alifsyahakbar"}>Github</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
