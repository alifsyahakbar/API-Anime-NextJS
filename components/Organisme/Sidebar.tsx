import Link from "next/link";
import ListMenu from "../Atom/ListMenu";
import DarkMode from "../Atom/button/DarkMode";

export default function Sidebar() {
  return (
    <div className="absolute z-10 top-14 left-0 w-full h-auto border-t-2 border-slate-800 dark:border-slate-200 bg-white dark:bg-[#121212] overflow-hidden drop-shadow-[0_70px_35px_rgba(0,0,0,0.25)]">
      <ListMenu
        dislay={"flex flex-wrap"}
        list={"flex justify-center basis-1/2 border"}
      ></ListMenu>
      <DarkMode style={"text-center my-6 pb-2"}></DarkMode>
    </div>
  );
}
