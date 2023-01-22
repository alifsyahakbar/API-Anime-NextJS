import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "../Organisme/Sidebar";
import FormSearch from "./FormSearch";
import { useRouter } from "next/router";

export default function MenuBar({ HandleSearch }: any) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenuBar = () => {
    setOpen(!open);
  };

  useEffect(() => setMounted(true), []);
  const { asPath } = useRouter();

  const [positionHeader, setpositionHeader] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 125) {
        setpositionHeader("w-full fixed z-20 top-0");
      } else {
        setpositionHeader("");
      }
    });
  });

  return (
    <div className={`${positionHeader}`}>
      <div className="relative z-50 bg-black py-1 lg:hidden w-full">
        {open && <Sidebar></Sidebar>}
        <div className="flex justify-between my-2 items-center">
          <div>
            <button onClick={toggleMenuBar} className="text-white ml-4">
              {open ? (
                <MdOutlineClose size={20}></MdOutlineClose>
              ) : (
                <FaBars size={20}></FaBars>
              )}
            </button>
          </div>
          <div>
            <FormSearch
              HandleSearch={HandleSearch}
              title={`Cari ${asPath === "/manga" ? "manga" : "anime"}`}
              styleInput={"px-4 py-1 rounded-l-md text-black"}
              styleButton={
                "px-3 py-1 rounded-r-md bg-slate-800 hover:bg-slate-100 text-white hover:text-black"
              }
            ></FormSearch>
          </div>
        </div>
      </div>
    </div>
  );
}
