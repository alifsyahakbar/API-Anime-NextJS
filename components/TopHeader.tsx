import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "./Sidebar";
import DarkMode from "./button/DarkMode";

export default function TopHeader() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenuBar = () => {
    setOpen(!open);
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="relative w-full">
      {open && <Sidebar></Sidebar>}
      <div className="flex justify-between m-4 items-center">
        <div>
          <button onClick={toggleMenuBar}>
            {open ? (
              <MdOutlineClose size={25}></MdOutlineClose>
            ) : (
              <FaBars size={20}></FaBars>
            )}
          </button>
        </div>
        <div>
          <DarkMode></DarkMode>
        </div>
      </div>
    </div>
  );
}
